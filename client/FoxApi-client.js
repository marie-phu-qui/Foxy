import request from 'superagent'



export function getFox() {
 return request.get('/fox')
}

// export function getMyFox() {
//   return request.get('/fox')
//  }