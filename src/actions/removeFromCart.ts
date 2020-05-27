import { REMOVE_PRODUCT_FROM_CART } from './types'

export const removeFromCart = (productID: number) => {
  return {
    type   : REMOVE_PRODUCT_FROM_CART,
    payload: productID
  }
}
