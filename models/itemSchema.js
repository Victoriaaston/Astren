const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  photo: {type: String},
  name: { type: String, required: true },
  price: { type: Number, required: true, default: 0 },
  size: {type: String, required: true}
}, {
  timestamps: true
});

module.exports = itemSchema;
