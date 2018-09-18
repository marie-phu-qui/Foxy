import React from 'react'
import {connect} from 'react-redux'
// import {getFoxApi} from '../FoxApi-client/'


class ArticleWithFox extends React.Component {

  constructor(props){
    super(props)
  }
  // componentDidMount() {
  //   this.getFoxApi()
  // }

  render() {
    return (
      <React.Fragment>
        <div id='main-article'>
          <h1>breaking news</h1>
          <img id='fox-image' src={this.props.foxImage}/>
          <p>{this.props.article}</p>
        </div>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state){
  console.log(state);
  console.log(state.foxImage);
  
  return {foxImage:state.foxImage}
}


// const mapDispatchToProps = (dispatch) => {
//   return { 

//  }


export default connect (mapStateToProps)(ArticleWithFox)