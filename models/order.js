const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = require('./itemSchema');


const lineItemSchema = new Schema({
  qty: { type: Number, default: 1 },
  item: itemSchema
}, {
  timestamps: true
});

lineItemSchema.virtual('extPrice').get(function () {
    return this.qty * this.item.price;
  });

const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    lineItems: [lineItemSchema],
    isPaid: { type: Boolean, default: false },
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('Order', orderSchema);