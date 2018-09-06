import request from 'superagent'

const apiEndpointBase = '/'

export function getFox() {
 return request.get(apiEndpointBase + '/*our foximage*/')
}

