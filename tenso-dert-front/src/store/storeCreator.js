import { createStore, combineReducers, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"

// Own
import products from "reducers/products"

const reducers = combineReducers({
  products
})

let store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
  )
)

export default store