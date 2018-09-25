function comics (state = "", action) {
    switch (action.type) {
      case "RECEIVE_COMICS":
        return action.comics
      default:
        return state
    }
  }
  
  export default comics