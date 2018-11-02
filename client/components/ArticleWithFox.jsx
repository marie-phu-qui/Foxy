import React from 'react'
import {connect} from 'react-redux'
import {fetchFoxImage, fetchArticle} from '../actions'

export class ArticleWithFox extends React.Component {

  constructor(props){
    super(props)
  }

 componentDidMount() {
   this.props.dispatch(fetchFoxImage())
   this.props.dispatch(fetchArticle())
 }


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
  return {
    foxImage:state.foxImage,
    article: state.article
  }
}

export default connect(mapStateToProps)(ArticleWithFox)