function article (state = "", action) {
    switch (action.type) {
      case "RECEIVE_ARTICLE":
        return action.article
      default:
        return state
    }
  }
  
  export default article