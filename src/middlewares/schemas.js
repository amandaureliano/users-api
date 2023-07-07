/* eslint-disable max-classes-per-file */
const joi = require('joi');

class Messages {
  constructor(column) {
    this.messages = {
      'any.required': `The field ${column} is required.`,
      'date.base': `The entered data for ${column} is incorrect. Please verify.`,
      'date.format': `The entered data for ${column} is incorrect. Please verify.`,
      'date.greater': `The entered data for ${column} is incorrect. Please verify.`,
      'date.less': `The entered data for ${column} is incorrect. Please verify.`,
      'date.strict': `The entered data for ${column} is incorrect. Please verify.`,
      'string.base': `The entered data for ${column} is incorrect. Please verify.`,
      'string.email': `The entered data for ${column} is incorrect. Please verify. Please verify.`,
      'string.empty': `The field ${column} is empty.`,
      'string.min': 'The field must contain at least 8 characters.',
      'string.pattern.base': `The entered data for ${column} is incorrect. Please verify.`,
      'string.trim': `The field ${column} must have a valid format.`,
    };
  }
}

class Validate {
  constructor() {
    this.tables = {
      users: ['name', 'email', 'password', 'avatar', 'birthday', 'active'],
    };

    this.validateRegex = {
      password: '^.{8,}$'
    };
  }

  createSchema = (table, requireds) => {
    const schema = {};
    const columnSchema = {
      name: joi.string(),
      email: joi.string().email({ minDomainSegments: 2 }),
      avatar: joi.binary(),
      birthday: joi.date(),
      active: joi.boolean(),
    };

    this.tables[table].forEach((column) => {
      schema[column] = columnSchema[column]
      ?? joi.string().pattern(new RegExp(this.validateRegex[column]));
      schema[column] = schema[column].messages(new Messages(column).messages);

      if (requireds.includes(column)) {
        schema[column] = schema[column].required();
      }
    });

    return joi.object(schema);
  };
}

module.exports = new Validate().createSchema;
