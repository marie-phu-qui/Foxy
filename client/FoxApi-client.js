import request from 'superagent'



export function getFox() {
 return request.get('/')
}

// export function getMyFox() {
//   return request.get('/fox')
//  }