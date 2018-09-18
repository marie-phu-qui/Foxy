import request from 'superagent'

export function getFoxApi() {
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

export function getAdvertising(){
  return request.get('/add')
}

export function getAuthentication(){
  return request.get('/register')
}