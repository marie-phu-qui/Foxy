import request from 'superagent'



export function getFox() {
 return request.get('/fox')
}

export function getComics() {
  return request.get('/comics')
 }
 
