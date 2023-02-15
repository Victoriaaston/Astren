const Order = require('../../models/order');
const stripe = require('stripe')('sk_test_51MbSmyCwSUDU3KMA9imLUlMWgsYEc2fhr44p6M6Uf1gdYsJTUJdRRCGRCSSKPxQfiqSGpT4BvJLkxzlI5ac6HmJE00GZcNEhRA')

module.exports = {
  cart,
  addToCart,
  setItemQtyInCart,
  checkout,
  delete: deleteItem,
  checkout
};

// A cart is the unpaid order for a user
async function cart(req, res) {
  if (req.user) {
    const cart = await Order.getCart(req.user._id)
    res.json(cart)
  }
}

// Add an item to the cart
async function addToCart(req, res) {
  const cart = await Order.getCart(req.user._id)
  await cart.addItemToCart(req.params.id)
  res.json(cart)
}

// Updates an item's qty in the cart
async function setItemQtyInCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.setItemQty(req.body.itemId, req.body.newQty);
  res.json(cart);
}

// Update the cart's isPaid property to true
async function checkout(req, res) {
  const cart = await Order.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save();
  res.json(cart);
}

async function deleteItem(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.deleteItemFromCart(req.params.id);
  await cart.save();
  res.json(cart);
}

async function checkout(req, res) {
  const cart = await Order.getCart();
  console.log(cart)
  const session = await stripe.checkout.sessions.create({
    line_items: cart.lineItems.map(lineItem => {
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: lineItem.item.name,
          },
          unit_amount: lineItem.item.price * 100,
        },
        quantity: lineItem.qty, //I dont have quantity in mt schema 
      };
    }),
    mode: 'payment',
    success_url: 'http://localhost:3000/orders/success',
    cancel_url: 'http://localhost:3000/orders/new',
  });

  res.status(200).send(session.url);
};

   
