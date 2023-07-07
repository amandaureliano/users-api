require("dotenv").config();
const jwt = require("jsonwebtoken");
const knexConfig = require('../../knexfile');
const knex = require('knex')(knexConfig);

let validateToken = async (request, response, next) => {
	let { authorization } = request.headers;

  if(!authorization) {
    authorization = request.cookies.token;
  }

	try {
		if (!authorization) return response.status(401).json({ mensagem: "Não autorizado!" });

		const token = authorization.split(" ")[1];
		const id = jwt.verify(token,process.env.JWT_SECRET).id;
		const [user] = await knex("users").select("*").where("id", id).returning("*");

		request.id = id;
		request.user = user;

		next()
	} catch (error) {
		return response.status(401).json({ mensagem: "Token inválido!" });
	}
}

module.exports = validateToken;
