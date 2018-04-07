// Own
import { getProductsCategories } from "./products"

export const INIT_START = "INIT_START"
export const FINISH_START = "FINISH_START"

export function initStartingAction(dispatch) {
  dispatch({
    type: INIT_START
  })

  dispatch(getProductsCategories())
}

export const SET_STARTING_PROGRESS = "SET_STARTING_PROGRESS"

export function setStartingProgress(progressName) {
  return dispatch => {
    return dispatch({
      type: SET_STARTING_PROGRESS,
      progressName
    })
  }
}

export function finishStartingAction(dispatch) {
  dispatch({
    type: FINISH_START
  })
}
