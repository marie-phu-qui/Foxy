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
 
 
 export function getQuote() {
   return request.get('/quote')
 }

 export function getQuoteNames(){
  return request.get('/quotenames')
 }