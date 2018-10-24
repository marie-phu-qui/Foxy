import request from 'superagent'


export const requestDATA = () => {
  return {
    type: "REQUEST_DATA"
  }
}


export const showError = (errorMessage) => {
  return {
    type: "SHOW_ERROR",
    errorMessage: errorMessage
  }
}

export const receiveFOX = (fox) => {
  return {
    type: "RECEIVE_FOX",
    foxImage: fox
  }
}

export function fetchFoxImage() {
  return (dispatch) => {
    dispatch(requestDATA())
    return request
      .get(`/article/fox`)
      .then(res => {
        dispatch(receiveFOX(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export const receiveARTICLE = (article) => {
  return {
    type: "RECEIVE_ARTICLE",
    article: article
  }
}

export function fetchArticle() {
  return (dispatch) => {
    dispatch(requestDATA())
    return request
      .get(`/article`)
      .then(res => {
        dispatch(receiveARTICLE(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export const receiveAD = (ad) => {
  return {
    type: "RECEIVE_AD",
    ad: ad
  }
}

export function fetchAD() {
  return (dispatch) => {
    dispatch(requestDATA())
    return request
      .get(`/ad`)
      .then(res => {
        dispatch(receiveAD(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export const receiveCOMICS = (comics) => {
  return {
    type: "RECEIVE_COMICS",
    comics: comics
  }
}

export function fetchCOMICS() {
  return (dispatch) => {
    dispatch(requestDATA())
    return request
      .get(`/comics`)
      .then(res => {
        dispatch(receiveCOMICS(res.body[Math.floor(Math.random() * 25)].comicImage))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}