import { prisma } from ".";
const SKU = (ProductName) => {
  let firstValue = ProductName.substring(0, 3); //product name must be morethan 2 string lenght
  let secondValue = Math.floor(Math.random() * 90000) + 10000;

  let sku = firstValue.toLowerCase() + secondValue;
  return sku
}

export const createProduct = (userProduct) => {

  return prisma.product.create({
    data: {
      ...userProduct, sku: SKU(userProduct.productName
      )
    }
  })
}