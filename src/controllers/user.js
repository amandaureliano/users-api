const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AppError = require('../helpers/appError');
const DbError = require('../helpers/dbError');
const knexConfig = require('../../knexfile');
const { Log } = require('./log');
const knex = require('knex')(knexConfig);

const log = new Log();

class Users {
  create = async (request, response) => {
    try {
      request.body.password = await bcrypt.hash(request.body.password, 10);
      request.body.avatar = request.file?.filename ?? '';
      await knex('users').insert(request.body).returning("*");
      return response.redirect(302,'/login');
    } catch (error) {
      console.log(error);
      throw new DbError(error, 500);
    }
  };

  update = async (request, response) => {
    try {
      if (request.body.password) {
        request.body.password = await bcrypt.hash(request.body.password, 10);
      }

      const [updatedUser] = await knex('users').update(request.body).where("id", request.id).returning("*");

      if (request.file) {
        return response.status(200).json(updatedUser).send(request.file);
      }

      return response.status(200).json(updatedUser);
    } catch (error) {
      throw new DbError(error, 500);
    }
  };

  delete = async (request, response) => {
    const { status } = request.body

    try {
      const [deletedUser] = await knex('users').update(status).where("id", request.id).returning("*");
      return response.status(200).json(deletedUser);
    } catch (error) {
      throw new DbError(error, 500);
    }
  };

  login = async (req, res) => {
		let { email, password } = req.body;

		try {
			let user = await knex('users').where({ email }).first();
			if (!user) return res.status(404).json({ mensagem: "O Email informado não existe!" });

			let validPassword = await bcrypt.compare(password,user.password);
			if (!validPassword) return res.status(400).json({ mensagem: "A senha informada é inválida!" });

			const token = jwt.sign({ id: user.id },process.env.JWT_SECRET,{ expiresIn: "8h" });
			user.token = token;

      res.cookie('token', `Bearer ${token}`);
      await log.insert({ userId: user.id, email: user.email });
			return res.redirect(302,'/dashboard');
		} catch (error) {
			return res.status(400).json({ mensagem: error.message });
		}
	};
}

module.exports = new Users();
