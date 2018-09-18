import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_FOX = 'RECEIVE_FOX'
export const REQUEST_FOX = 'REQUEST_FOX'

export const requestFOX = () => {
  return {
    type: REQUEST_FOX
  }
}

export const receiveFOX = () => {
  return {
    type: RECEIVE_FOX,
    fox: fox.image
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function fetchData () {
  return (dispatch) => {
    dispatch(requestFOX())
    return request
      .get(`/fox`)
      .then(res => {
        dispatch(receiveFOX(res.body.image))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}