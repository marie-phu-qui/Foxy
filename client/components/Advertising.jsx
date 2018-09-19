import React from 'react'
import {connect} from 'react-redux'
import {fetchAD} from '../actions'


const Advertising = ({ad}) => {

      return (
      <div>
        <h3>Desperate Advertising</h3>
        {ad.length>0 ?  <p>{ad}</p> : console.log('empty')}
        <button id ="ad" onClick={() => mapDispatchToProps()}>I am not interested</button>
      </div>
    )
}


function mapStateToProps(state){
  return {
    ad: state.ad
  }
} 

const mapDispatchToProps=(dispatch)=>{
  dispatch(fetchAD())
  return {}
} 
export default connect (mapStateToProps, mapDispatchToProps)(Advertising)