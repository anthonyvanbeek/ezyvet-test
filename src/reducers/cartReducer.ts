import { ADD_PRODUCT_TO_CART, CartActionTypes, FETCH_PRODUCTS, GET_NUMBERS_OF_CART, REMOVE_PRODUCT_FROM_CART } from '../actions/types'
import Product                                                                                                 from '../types/Product'

type initialStateType = {
  numInCart: number
  total: number
  products: Product[]
}

const initialState: initialStateType = {
  numInCart: 0,
  total    : 0,
  products : []
}

export default (state: initialStateType = initialState, action: CartActionTypes) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      const selectedProducttoAdd = state.products[action.payload]
      return {
        ...state,
        numInCart: state.numInCart + 1,
        total    : state.total + selectedProducttoAdd.price,
        products : state.products.map((product) => {
          if (product.id === action.payload) {
            const quantity = product.quantity + 1
            return {
              ...product,
              quantity: quantity,
              inCart  : true,
              total   : quantity * selectedProducttoAdd.price
            }
          }
          
          return { ...product }
        })
      }
    
    case REMOVE_PRODUCT_FROM_CART:
      const selectedProducttoRemove = state.products[action.payload]
      
      return {
        ...state,
        numInCart: selectedProducttoRemove.quantity > 0 ? state.numInCart - 1 : state.numInCart,
        total    : selectedProducttoRemove.quantity > 0 ? state.total - selectedProducttoRemove.price : state.total,
        products : state.products.map((product) => {
          const quantity = product.quantity > 0 ? product.quantity - 1 : 0
          if (product.id === action.payload) {
            return {
              ...product,
              quantity: quantity,
              inCart  : quantity > 0,
              total   : quantity * selectedProducttoRemove.price
            }
          }
          
          return product
        })
      }
    
    case FETCH_PRODUCTS:
      return {
        ...state,
        numInCart: state.numInCart ? state.numInCart : 0,
        total    : state.total ? state.total : 0,
        products : action.payload.map((product, index) => ({
          ...product,
          id      : index,
          quantity: state.products[index] && state.products[index].quantity ? state.products[index].quantity : product.quantity || 0,
          inCart  : state.products[index] && state.products[index].inCart ? state.products[index].inCart : product.inCart || 0,
          total   : state.products[index] && state.products[index].total ? state.products[index].total : product.total || 0
        }))
      }
    
    case GET_NUMBERS_OF_CART:
      return {
        ...state
      }
    
    default:
      return state
  }
}
