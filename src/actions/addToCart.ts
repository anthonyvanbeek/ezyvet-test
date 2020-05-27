import { ADD_PRODUCT_TO_CART } from './types'

export const addToCart = (productID: number) => {
  return {
    type   : ADD_PRODUCT_TO_CART,
    payload: productID
  }
}
