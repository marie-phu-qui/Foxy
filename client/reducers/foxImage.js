
import {RECEIVE_FOX} from '../actions'

function foxImage (state = '', action) {
  switch (action.type) {
    case RECEIVE_FOX:
    console.log("Hello")
      return action.image

    default:
    console.log("Hello2")
      return state
  }
}

export default foxImage