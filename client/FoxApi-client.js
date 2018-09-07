import request from 'superagent'



export function getFox() {
 return request.get('/fox')
}

export function getComics() {
  return request.get('/comics')
 }

 export function getArticles() {
  return request.get('/articles')
 }
 