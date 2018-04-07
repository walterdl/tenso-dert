import _ from "lodash/fp/object"

// Own
import {
  INIT_START,
  SET_STARTING_PROGRESS,
  FINISH_START
} from "actions/start"

function getInitialState() {
  return {
    startingInitialized: false,
    startingFinished: false,
    progressNames: []
  }
}

function start(state = getInitialState(), action) {
  let _state = _.assign({}, state)

  switch(action.type) {
    case INIT_START:
      return {
        ..._state,
        startingInitialized: true
      }

    case FINISH_START:
      return {
        ..._state,
        startingInitialized: false,
        startingFinished: true
      }

    case SET_STARTING_PROGRESS: {
      let progressNames = _state.progressNames

      progressNames.push(action.progressName)

      return {
        ..._state,
        progressNames
      }
    }

    default:
      return state
  }
}

export default start