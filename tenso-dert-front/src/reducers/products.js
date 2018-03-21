import _ from "lodash/fp/object"

// Own
import {
  GET_PRODUCTS_CATEGORIES,
  ERROR_PRODUCTS_CATEGORIES,
  SUCCESS_PRODUCTS_CATEGORIES
} from "actions/products"

const getInitialState = () => {
  return {
    products: [],
    categories: []
  }
}

const products = function (state = getInitialState(), action) {
  let _state = _.assign({}, state)

  switch(action.type) {
    case GET_PRODUCTS_CATEGORIES:
      return {
        ..._state,
        fetchingCategories: true
      }
    case ERROR_PRODUCTS_CATEGORIES:
      return {
        ..._state,
        fetchingCategories: false,
        error: action.error
      }
    case SUCCESS_PRODUCTS_CATEGORIES:
      return {
        ..._state,
        fetchingCategories: false,
        categories: action.categories
      }
    default:
      return state
  }
}

export default products