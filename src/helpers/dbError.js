const errorsObj = {
  '22P02': 'Invalid input error (code 22P02): The provided input is invalid or does not match the expected data type. Please verify the input and ensure it is correctly formatted according to the required data type.',
  22005: 'Data exception error (code 22005): There was an issue with the data formatting or value provided. Please ensure the data is correctly formatted and within the allowed limits.',
  23502: 'Not null violation error (code 23502): A required field has not been provided with a value. Please ensure that all mandatory fields are filled in and contain valid data.',
  23503: 'Foreign key violation error (code 23503): The operation failed due to a violation of a foreign key constraint.Please ensure that the referenced values exist in the related table before performing the operation.',
  23505: 'Unique constraint violation error (code 23505): The operation failed because it violated a unique constraint in the database. Please ensure that the data being inserted or updated does not violate any unique constraints defined in the database.',
  '42P12': 'Duplicate alias error (code 42P12): The error occurs when there is a duplicate alias used in a query, making the reference to a column or table ambiguous. Ensure that each alias used in the query is unique to avoid conflicts and improve clarity in the query structure.',
  42601: 'Syntax error (code 42601): The error occurs when there is a syntax error in the SQL statement. Review the SQL statement carefully and make sure it adheres to the correct syntax and structure of the PostgreSQL query language.',
  42703: 'Undefined column error (code 42703): The error occurred because the SQL statement referenced a column that does not exist in the specified table or view. Please ensure that the column name is spelled correctly and exists in the table or view being referenced.',
  42830: 'Invalid foreign key error (code 42830): The error occurred due to an attempt to reference a non-existent value in a foreign key relationship. Please ensure that the referenced value exists in the related table before performing the operation.',
};

class DbError {
  constructor(error, statusCode = 400) {
    this.message = errorsObj[error.code];
    this.statusCode = statusCode;
  }
}

module.exports = DbError;
