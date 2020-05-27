import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools }          from 'redux-devtools-extension'
import { persistStore }                 from 'redux-persist'
import thunk                            from 'redux-thunk'
import combineReducers                  from './reducers'
import Product                          from './types/Product'

const initialState = {}
const middleware   = [ thunk ]

export type RootState = {
  cartState: {
    numInCart: number
    products: Product[]
    total: number
  }
}

const store = createStore(
  combineReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

const persistor = persistStore(store)

export { store, persistor }
