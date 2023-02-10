require('dotenv').config();
require('./config/database');

const Item = require('./models/item');

(async function() {

  await Item.deleteMany({});
  const items = await Item.create([
    {photo: 'https://freeimage.host/i/HE12eUu', name: 'Tie-Dye', size: '14x8', price: 21.99},
    {photo: 'https://freeimage.host/i/HE12DOv', name: 'Skull', size: '14x8', price: 38.99},
    {photo: 'https://freeimage.host/i/HE13mYu', name: 'light-outfit', size: '4x4', price: 12.99},
    {photo: 'https://freeimage.host/i/HE1FP8g', name: 'dark-outfit', size: '4x4', price: 12.99},
    {photo: 'https://freeimage.host/i/HE1FyFt', name: 'smoke-profile', size: '4x4', price: 13.99},
    {photo: 'https://freeimage.host/i/HE1KIHu', name: 'diamonds', size: '14x8', price: 25.99},
    {photo: 'https://freeimage.host/i/HE1KXxR', name: 'red-rose-newspaper', size: '10x6', price: 22.99},
    {photo: 'https://freeimage.host/i/HE1K6s2', name: 'yellow-rose-newspaper', size: '10x6', price: 22.99},
    {photo: 'https://freeimage.host/i/HE1Kt5u', name: 'hands', size: '10x6', price: 18.99},
    {photo: 'https://freeimage.host/i/HE1fJqB', name: 'coaster', size: '3x3', price: 4.95},
    {photo: 'https://freeimage.host/i/HE1fFdF', name: 'Skeleton', size: '24x12', price: 321.99},
    {photo: 'https://freeimage.host/i/HE1fosp', name: 'light-blue-record', size: '12x12', price: 38.99},
    {photo: 'https://freeimage.host/i/HE1fE1S', name: 'smokey-record', size: '12x12', price: 38.99},
    {photo: 'https://freeimage.host/i/HE1fhmb', name: 'dark-blue-record', size: '12x12', price: 38.99},
  ]);

  console.log(items)

  process.exit();

})();


