require('dotenv').config();
require('./config/database');

const Item = require('./models/item');

(async function() {

  await Item.deleteMany({});
  const items = await Item.create([
    {photo: 'https://iili.io/HE12eUu.jpg', name: 'Vibrant Swirl', size: '14x8', price: 21.99},
    {photo: 'https://iili.io/HE12DOv.jpg', name: 'Skull', size: '14x8', price: 38.99},
    {photo: 'https://iili.io/HE13mYu.jpg', name: 'Summer Outfit', size: '4x4', price: 12.99},
    {photo: 'https://iili.io/HE1FP8g.jpg', name: 'Fall Outfit', size: '4x4', price: 12.99},
    {photo: 'https://iili.io/HE1FyFt.jpg', name: 'Winter Profile', size: '4x4', price: 13.99},
    {photo: 'https://iili.io/HE1KIHu.jpg', name: 'Diamonds', size: '14x8', price: 25.99},
    {photo: 'https://iili.io/HE1KXxR.jpg', name: 'Roses Vintage Newspaper', size: '10x6', price: 22.99},
    {photo: 'https://iili.io/HE1K6s2.jpg', name: 'Rose Vintage Newspaper', size: '10x6', price: 22.99},
    {photo: 'https://iili.io/HE1Kt5u.jpg', name: 'Hands', size: '10x6', price: 18.99},
    {photo: 'https://iili.io/HE1fJqB.jpg', name: 'Vibrant Swirl Coaster', size: '3x3', price: 4.95},
    {photo: 'https://iili.io/HE1fFdF.jpg', name: 'Skeleton', size: '24x12', price: 321.99},
    {photo: 'https://iili.io/HE1fosp.jpg', name: 'Summer Record', size: '12x12', price: 38.99},
    {photo: 'https://iili.io/HE1fE1S.jpg', name: 'Smokey Record', size: '12x12', price: 38.99},
    {photo: 'https://iili.io/HE1fhmb.jpg', name: 'Waves Record', size: '12x12', price: 38.99},
  ]);

  console.log(items)

  process.exit();

})();


