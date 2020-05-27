import { FETCH_PRODUCTS } from './types'

export const fetchProducts = (payload: any) => {
  return {
    type   : FETCH_PRODUCTS,
    payload: payload
  }
}
