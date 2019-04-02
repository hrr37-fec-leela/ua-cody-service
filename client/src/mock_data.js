const faker = require('faker');

const generateShoeImagesData = (shoeImagesData = []) => {
  for (let i = 0; i < 6; i++) {
    shoeImagesData.push ({
      productId: 'pid3020612',
      color: faker.commerce.color(),
      colorNumber: faker.random.number(),
      right: faker.random.image(),
      left: faker.random.image(),
      top: faker.random.image(),
      bottom: faker.random.image(),
      sideAngle: faker.random.image(),
    });
  }
  for (let i = 0; i < 94; i++) {
    shoeImagesData.push ({
      productId: 'pid' + faker.random.number(),
      color: faker.commerce.color(),
      colorNumber: faker.random.number(),
      right: faker.random.image(),
      left: faker.random.image(),
      top: faker.random.image(),
      bottom: faker.random.image(),
      sideAngle: faker.random.image(),
    });
  }
  return JSON.stringify(shoeImagesData);
}

const generateShoeInfoData = (shoeInfoData = []) => {
  for (let i = 0; i < 1; i++) {
    shoeInfoData.push({
      productId: 'pid3020612',
      name: faker.commerce.productName(),
      category: faker.commerce.productAdjective(),
      price: faker.commerce.price(),
      fullDesc: faker.lorem.paragraph(),
    });
  }
  return JSON.stringify(shoeInfoData);
}

const generateShoeInventoryData = (shoeInventoryData = []) => {
  for (let i = 0; i < 6; i++) {
    shoeInventoryData.push({
      productId: 'pid3020612',
      color: faker.commerce.color(),
      colorNumber: faker.random.number(),
      size7: faker.random.number(),
      size7H: faker.random.number(),
      size8: faker.random.number(),
      size8H: faker.random.number(),
      size9: faker.random.number(),
      size9H: faker.random.number(),
      size10: faker.random.number(),
      size10H: faker.random.number(),
      size11: faker.random.number(),
      size11H: faker.random.number(),
      size12: faker.random.number(),
      size12H: faker.random.number(),
      size13: faker.random.number(),
      size13H: faker.random.number(),
      size14: faker.random.number(),
      size15: faker.random.number(),
      size16: faker.random.number(),
      size17: faker.random.number(),
      size18: faker.random.number(),
    })
  }
  return JSON.stringify(shoeInventoryData);
}

const currySix405 = [{
  productId:"pid3020612",
  color:"Petrol Blue / Mod Gray",
  colorNumber:405,
  right:"https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-405/CurrySix-right-405.jpeg",
  left:"https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-405/CurrySix-left-405.jpeg",
  top:"https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-405/CurrySix-top-405.jpeg",
  bottom:"https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-405/CurrySix-bottom-405.jpeg",
  pair:"https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-405/CurrySix-pair-405.jpeg"
}]

module.exports.currySix405 = currySix405;
module.exports.generateShoeImagesData = generateShoeImagesData;
module.exports.generateShoeInfoData = generateShoeInfoData;
module.exports.generateShoeInventoryData = generateShoeInventoryData;