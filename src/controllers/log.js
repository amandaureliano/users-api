const mongoose = require('mongoose');

class Log extends mongoose.Schema {
  constructor() {
    super(
      {
        userId: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        }
      },
      {
        timestamps: true,
        versionKey: false,
      },
    );

    this.model = mongoose.model('Logs', this);
  }

  insert = async (item) => {
    return this.model.create(item);
  };
}
module.exports = { Log };