import React from 'react'
import {connect} from 'react-redux'
import {fetchCOMICS} from '../actions'

const Comics = (props) => {
  console.log(props)
  return (
  <div id='comics'>
    <h4>GARFIIIELD where are you?</h4>
    {props.comics.length > 0 && <img id='garfields' src={props.comics}/>}
      {/* [Math.floor(Math.random()*25)].comicImage}/>} */}
  </div>
  )
}

function mapStateToProps(state){
  return {
    comics: state.comics
  }
} 

const mapDispatchToProps=(dispatch)=>{
  dispatch(fetchCOMICS())
  return {}
} 

export default connect(mapStateToProps, mapDispatchToProps)(Comics)