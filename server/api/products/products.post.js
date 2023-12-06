import { sendError } from "h3"
import { createProduct } from "../../db/Product";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { productName,
    productImage,
    shortDiscription,
    longDiscription,
    productPrice,
    rating,
    condition,
    brand,
  } = body

  if (
    !productName ||
    !productImage ||
    !shortDiscription ||
    !longDiscription ||
    !productPrice ||
    !condition ||
    !brand) {
    return sendError(event, createError({ statusCode: 400, statusMessage: 'Invalid params' }))
  }

  const singleProduct = {
    productName,
    productImage,
    shortDiscription,
    longDiscription,
    productPrice,
    rating,
    condition,
    brand,
  }

  const productCreated = await createProduct(singleProduct)

  return {
    body: productCreated
  }
})