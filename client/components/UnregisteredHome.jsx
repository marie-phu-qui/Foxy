import React from 'react'
import { connect } from 'react-redux'
import { fetchFoxImage, fetchArticle, fetchAD } from '../actions'
import ArticleWithFox from './ArticleWithFox'
import TrumpQuote from './TrumpQuote'
import ChatApp from './Chat'
import Advertising from './Advertising'


const UnregisteredHome = (props) => {
  console.log(props)
  return (
    <div id="main">
      <button onClick={() => Router.refresh()}>Refresh Page</button>
      <div id="article">
        <ArticleWithFox foxImage={props.foxImage} article={props.article} />
      </div>
      <div id="sidebar">
        <i>Chat to me, sweetie!<ChatApp /></i>
        <br />
        <TrumpQuote quote={props.quote} names={props.names} />
        <br />
        <div>
          <Advertising ad={props.ad} />
        </div>
      </div>
    </div>
  )
}
function mapStateToProps(state) {
  return {
    foxImage: state.foxImage,
    article: state.article,
    quote: state.quote,
    names: state.name,
    ad: state.ad
  }
}

const mapDispatchToProps = {
  fetchFoxImage,
  fetchArticle,
  fetchAD
}

export default connect(mapStateToProps, mapDispatchToProps)(UnregisteredHome)