import request from 'superagent'
// import foxImage from '../reducers/foxImage'
// import ad from '../reducers/ad'


// export const SHOW_ERROR = 'SHOW_ERROR'
// export const RECEIVE_FOX = 'RECEIVE_FOX'
// export const REQUEST_FOX = 'REQUEST_FOX'

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

export function fetchFoxImage () {
  return (dispatch) => {
    dispatch(requestDATA())
    return request
      .get(`/fox`)
      .then(res => {
        dispatch(receiveFOX(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export const receiveAD = (ad) => {
  console.log("receive: ", ad)
  return {
    type: "RECEIVE_AD",
    ad: ad
  }
}

export function fetchAD () {
  console.log('hello2')
  return (dispatch) => {
    console.log('hello3')
    dispatch(requestDATA())
    console.log('hello4')
    return request
      .get(`/ad`)
      .then(res => {
        dispatch(receiveAD(res.body))
      })
      .catch(err => {
        console.log('HelloERR');        
        dispatch(showError(err.message))
      })
  }
}