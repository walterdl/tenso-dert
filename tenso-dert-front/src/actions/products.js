import { API_ROOT } from "common/constants"

export const GET_PRODUCTS_CATEGORIES = "GET_PRODUCTS_CATEGORIES"

const _getProductsCategories = () => {
  return {
    type: GET_PRODUCTS_CATEGORIES
  }
}

export const ERROR_PRODUCTS_CATEGORIES = "ERROR_PRODUCTS_CATEGORIES"

const errorProductsCategories = (error) => {
  return {
    type: ERROR_PRODUCTS_CATEGORIES,
    error
  }
}

export const SUCCESS_PRODUCTS_CATEGORIES = "SUCCESS_PRODUCTS_CATEGORIES"

const successProductsCategories = (categories) => {
  return {
    type: SUCCESS_PRODUCTS_CATEGORIES,
    categories
  }
}

export function getProductsCategories() {
  return dispatch => {
    dispatch(_getProductsCategories())

    return fetch(`${API_ROOT}products-categories`)
      .then(response => response.json(),
        error => Promise.reject(error))
      .then(json => {
        dispatch(successProductsCategories(json))
      }, error => {
        dispatch(errorProductsCategories(error))
      })
  }
}