// Own
import { getProductsCategories } from "./products"

export function startingAction(dispatch) {
  dispatch(getProductsCategories())
}
