const faker = require('faker');

const generateShoeImagesData = (shoeImagesData = []) => {
  for (let i = 1; i < 2; i++) {
    shoeImagesData.push ({
      id: i,
      productId: '3020612',
      shoeImages: [
        {
          colorNumber: 103,
          colorName: 'White / Royal',
          images: {
            video: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-103/CurrySix360-103.mp4',
            right: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-103/CurrySix-right-103.jpeg',
            left: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-103/CurrySix-left-103.jpeg',
            top: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-103/CurrySix-top-103.webp',
            bottom: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-103/CurrySix-bottom-103.jpeg',
            pair: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-103/CurrySix-pair-103.jpeg'
          }
        },
        {
          colorNumber: 405,
          colorName: 'Petrol Blue / Mod Gray',
          images: {
            video: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-405/CurrySix360-405.mp4',
            right: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-405/CurrySix-right-405.jpeg',
            left: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-405/CurrySix-left-405.jpeg',
            top: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-405/CurrySix-top-405.jpeg',
            bottom: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-405/CurrySix-bottom-405.jpeg',
            pair: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-405/CurrySix-pair-405.jpeg'
          }
        },
        {
          colorNumber: 300,
          colorName: 'Black / White',
          images: {
            video: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-300/CurrySix360-300.mp4',
            right: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-300/CurrySix-right-300.webp',
            left: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-300/CurrySix-left-300.jpeg',
            top: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-300/CurrySix-top-300.webp',
            bottom: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-300/CurrySix-bottom-300.jpeg',
            pair: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-300/CurrySix-pair-300.jpeg'
          }
        },
        {
          colorNumber: 302,
          colorName: 'High Vis Yellow / High Vis Yellow',
          images: {
            video: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-302/CurrySix360-302.mp4',
            right: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-302/CurrySix-right-302.jpeg',
            left: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-302/CurrySix-left-302.jpeg',
            top: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-302/CurrySix-top-302.jpeg',
            bottom: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-302/CurrySix-bottom-302.webp',
            pair: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-302/CurrySix-pair-302.jpeg'
          }
        },
        {
          colorNumber: 101,
          colorName: 'White / White',
          images: {
            video: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-101/CurrySix360-101.mp4',
            right: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-101/CurrySix-right-101.webp',
            left: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-101/CurrySix-left-101.webp',
            top: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-101/CurrySix-top-101.webp',
            bottom: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-101/CurrySix-bottom-101.jpeg',
            pair: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-101/CurrySix-pair-101.webp'
          }
        },
        {
          colorNumber: 404,
          colorName: 'Academy / Mango Orange',
          images: {
            right: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-404/CurrySix-right-404.jpeg',
            left: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-404/CurrySix-left-404.jpeg',
            top: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-404/CurrySix-top-404.jpeg',
            bottom: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-404/CurrySix-bottom-404.jpeg',
            pair: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-404/CurrySix-pair-404.jpeg'
          }
        },
        {
          colorNumber: 603,
          colorName: 'Red / Black',
          images: {
            video: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-603/CurrySix360-603.mp4',
            right: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-603/CurrySix-right-603.jpeg',
            left: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-603/CurrySix-left-603.jpeg',
            top: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-603/CurrySix-top-603.jpeg',
            bottom: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-603/CurrySix-bottom-603.jpeg',
            pair: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-603/CurrySix-pair-603.jpeg'
          }
        }
      ]
    });
  }
  for (let i = 2; i < 101; i++) {
    shoeImagesData.push ({
      id: i,
      productId: faker.random.number(),
      shoeImages: [{
        colorName: faker.commerce.color(),
        colorNumber: faker.random.number(),
        images: {
          video: faker.random.image(),
          right: faker.random.image(),
          left: faker.random.image(),
          top: faker.random.image(),
          bottom: faker.random.image(),
          pair: faker.random.image(),
        }
      }]
    });
  }
  return JSON.stringify(shoeImagesData);
};

const generateShoeInfoData = (shoeInfoData = []) => {
  for (let i = 1; i < 2; i++) {
    shoeInfoData.push({
      id: 1,
      productId: '3020612',
      name: 'UA Curry 6',
      category: 'Basketball Shoes',
      price: '130.00',
      fullDesc: 'FRESH. NEW. INNOVATIVE. GROUNDBREAKING. Positive, right? That’s what they said about Stephen when he first stepped on the court 10 years ago. Changing the game isn’t easy and before long, haters came out of the woodwork. But that’s what happens when you make people think about the game, play the game, and even dream about the game…differently. If that’s ruining the game—then he’ll just need to keep on doing it. NO APOLOGIES. ALL LOVE. COMPLETE COMMITMENT.'
    });
  }

  for (let i = 2; i < 101; i++) {
    shoeInfoData.push({
      id: i,
      productId: faker.random.number(),
      name: faker.commerce.productName(),
      category: faker.commerce.productAdjective(),
      price: faker.commerce.price(),
      fullDesc: faker.lorem.paragraph(),
    });
  }
  return JSON.stringify(shoeInfoData);
};

const generateShoeInventoryData = (shoeInventoryData = []) => {
  // for (let i = 0; i < 6; i++) {
  //   shoeInventoryData.push({
  //     productId: '3020612',
  //     sizeInventory: {
  //       7: faker.random.number(),
  //       7.5: faker.random.number(),
  //       8: faker.random.number(),
  //       8.5: faker.random.number(),
  //       9: faker.random.number(),
  //       9.5: faker.random.number(),
  //       10: faker.random.number(),
  //       10.5: faker.random.number(),
  //       11: faker.random.number(),
  //       11.5: faker.random.number(),
  //       12: faker.random.number(),
  //       12.5: faker.random.number(),
  //       13: faker.random.number(),
  //       13.5: faker.random.number(),
  //       14: faker.random.number(),
  //       15: faker.random.number(),
  //       16: faker.random.number(),
  //       17: faker.random.number(),
  //       18: faker.random.number(),
  //     }
  //   })
  // }

  for (let i = 2; i < 101; i++) {
    shoeInventoryData.push({
      id: i,
      productId: faker.random.number(),
      colorNumber: faker.random.number(),
      sizeInventory: {
        7: faker.random.number(),
        7.5: faker.random.number(),
        8: faker.random.number(),
        8.5: faker.random.number(),
        9: faker.random.number(),
        9.5: faker.random.number(),
        10: faker.random.number(),
        10.5: faker.random.number(),
        11: faker.random.number(),
        11.5: faker.random.number(),
        12: faker.random.number(),
        12.5: faker.random.number(),
        13: faker.random.number(),
        13.5: faker.random.number(),
        14: faker.random.number(),
        15: faker.random.number(),
        16: faker.random.number(),
        17: faker.random.number(),
        18: faker.random.number(),
      }
    });
  }

  return JSON.stringify(shoeInventoryData);
};

const currySixList = [
  {
    productId: '3020612-405',
    color: 'Petrol Blue / Mod Gray',
    colorNumber: 405,
    right: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-405/CurrySix-right-405.jpeg',
    left: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-405/CurrySix-left-405.jpeg',
    top: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-405/CurrySix-top-405.jpeg',
    bottom: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-405/CurrySix-bottom-405.jpeg',
    pair: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-405/CurrySix-pair-405.jpeg'
  },
  {
    productId: '3020612-300',
    color: 'Black / White',
    colorNumber: 300,
    right: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-300/CurrySix-right-300.webp',
    left: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-300/CurrySix-left-300.jpeg',
    top: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-300/CurrySix-top-300.webp',
    bottom: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-300/CurrySix-bottom-300.jpeg',
    pair: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-300/CurrySix-pair-300.jpeg'
  },
  {
    productId: '3020612-302',
    color: 'High Vis Yellow / High Vis Yellow',
    colorNumber: 302,
    right: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-302/CurrySix-right-302.jpeg',
    left: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-302/CurrySix-left-302.jpeg',
    top: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-302/CurrySix-top-302.jpeg',
    bottom: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-302/CurrySix-bottom-302.webp',
    pair: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-302/CurrySix-pair-302.jpeg'
  },
  {
    productId: '3020612-101',
    color: 'White / White',
    colorNumber: 101,
    right: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-101/CurrySix-right-101.webp',
    left: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-101/CurrySix-left-101.webp',
    top: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-101/CurrySix-top-101.webp',
    bottom: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-101/CurrySix-bottom-101.jpeg',
    pair: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-101/CurrySix-pair-101.webp'
  },
  {
    productId: '3020612-404',
    color: 'Academy / Mango Orange',
    colorNumber: 404,
    right: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-404/CurrySix-right-404.jpeg',
    left: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-404/CurrySix-left-404.jpeg',
    top: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-404/CurrySix-top-404.jpeg',
    bottom: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-404/CurrySix-bottom-404.jpeg',
    pair: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-404/CurrySix-pair-404.jpeg'
  },
  {
    productId: '3020612-603',
    color: 'Red / Black',
    colorNumber: 603,
    right: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-603/CurrySix-right-603.jpeg',
    left: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-603/CurrySix-left-603.jpeg',
    top: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-603/CurrySix-top-603.jpeg',
    bottom: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-603/CurrySix-bottom-603.jpeg',
    pair: 'https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-603/CurrySix-pair-603.jpeg'
  }
];

const shoeInfo = [{
  productId: '3020612',
  name: 'UA Curry 6',
  category: 'Basketball Shoes',
  price: '130.00',
  fullDesc: 'FRESH. NEW. INNOVATIVE. GROUNDBREAKING. Positive, right? That’s what they said about Stephen when he first stepped on the court 10 years ago. Changing the game isn’t easy and before long, haters came out of the woodwork. But that’s what happens when you make people think about the game, play the game, and even dream about the game…differently. If that’s ruining the game—then he’ll just need to keep on doing it. NO APOLOGIES. ALL LOVE. COMPLETE COMMITMENT.'
}];

const shoeInventory405 = [{
  productId: '3020612-405',
  7: faker.random.number(),
  7.5: faker.random.number(),
  8: faker.random.number(),
  8.5: faker.random.number(),
  9: faker.random.number(),
  9.5: faker.random.number(),
  10: faker.random.number(),
  10.5: faker.random.number(),
  11: faker.random.number(),
  11.5: faker.random.number(),
  12: faker.random.number(),
  12.5: faker.random.number(),
  13: faker.random.number(),
  13.5: 0,
  14: faker.random.number(),
  15: faker.random.number(),
  16: faker.random.number(),
  17: 0,
  18: 0,
}];

module.exports.currySixList = currySixList;
module.exports.shoeInfo = shoeInfo;
module.exports.shoeInventory405 = shoeInventory405;
module.exports.generateShoeImagesData = generateShoeImagesData;
module.exports.generateShoeInfoData = generateShoeInfoData;
module.exports.generateShoeInventoryData = generateShoeInventoryData;