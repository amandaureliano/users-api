const knexConfig = require('../../knexfile');
const knex = require('knex')(knexConfig);

const daysToBirthday = (birthday) => {
    const today = new Date();
    const date = new Date(2023, birthday.getMonth(), birthday.getDate());
    const timeDiff = date - today;

    if (timeDiff <= 0) {
        return 'Feliz aniversário!';
    } else {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        return `${days} dias até o seu aniversário`;
    }
}

const dashboard = async (request, response) => {
    const { id } = request.user;
    let user = await knex('users').where({ id }).first();
    return response.render('dashboard', { name: user.name, daysToBirthday: daysToBirthday(user.birthday) });
};

module.exports = { dashboard };