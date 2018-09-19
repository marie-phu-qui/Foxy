
function foxImage (state = "", action) {
  switch (action.type) {
    case "RECEIVE_FOX":
      return action.foxImage
    default:
      return state
  }
}

export default foxImage