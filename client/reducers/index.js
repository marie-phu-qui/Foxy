import {combineReducers} from 'redux'
import foxImage from './foxImage'
import ad from './ad'
import comics from './comics'
import article from './article'


export default combineReducers({
    foxImage,
    ad,
    comics,
    article
})