import { createStore, combineReducers, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"

// Own
import start from "reducers/start"
import products from "reducers/products"

const reducers = combineReducers({
  start,
  products
})

let store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
  )
)

export default store