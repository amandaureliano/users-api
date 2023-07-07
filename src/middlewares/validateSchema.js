const createSchema = require('./schemas');

const validateSchema = (table, requireds = []) => async (request, response, next) => {
	try {
		const joiSchema = createSchema(table, requireds);
		await joiSchema.validateAsync(request.body);

		next();
	} catch (error) {
		return response.status(400).json({ mensagem: error.message });
	}
}

module.exports = validateSchema;
