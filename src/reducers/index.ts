import { combineReducers } from 'redux'
import { persistReducer }  from 'redux-persist'
import storage             from 'redux-persist/lib/storage'
import cartReducer         from './cartReducer'

const persistConfig = {
  key      : 'root',
  storage,
  whitelist: [ 'cartState' ]
}

const rootReducer = combineReducers({
  cartState: cartReducer
})

export default persistReducer(persistConfig, rootReducer)
