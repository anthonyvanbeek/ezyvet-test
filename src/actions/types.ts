import Product from '../types/Product'

export const ADD_PRODUCT_TO_CART      = 'ADD_PRODUCT_TO_CART'
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART'
export const GET_NUMBERS_OF_CART      = 'GET_NUMBERS_OF_CART'
export const FETCH_PRODUCTS           = 'FETCH_PRODUCTS'

export interface AddProductToCartAction {
  type: typeof ADD_PRODUCT_TO_CART
  payload: number
}

export interface RemoveProductFromCartAction {
  type: typeof REMOVE_PRODUCT_FROM_CART
  payload: number
}

export interface GetNumbersOfCartAction {
  type: typeof GET_NUMBERS_OF_CART
}

export interface FetchProductsAction {
  type: typeof FETCH_PRODUCTS
  payload: Product[]
}

export type CartActionTypes = AddProductToCartAction | GetNumbersOfCartAction | RemoveProductFromCartAction | FetchProductsAction
