function ad (state = "", action) {
    switch (action.type) {
      case "RECEIVE_AD":
        return action.ad
      default:
        return state
    }
  }
  
  export default ad