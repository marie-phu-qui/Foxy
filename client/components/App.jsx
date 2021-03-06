import React from 'react'
import ArticleWithFox from './ArticleWithFox'
import Comics from './Comics'
import TrumpQuote from './TrumpQuote'
import ChatApp from './Chat'
import Advertising from './Advertising'
import Login from './Login'
import Secret from './Secret'


import { getQuote, getQuoteNames, getAuthentication } from '../utils/FoxApi-client'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      foxImage: '',
      comics: '',
      article: '',
      quote: '',
      names: '',
      ad: '',
      authentication: false
    }

    this.getQuote = this.getQuote.bind(this)
    this.getQuoteNames = this.getQuoteNames.bind(this)
    this.getAuthentication = this.getAuthentication.bind(this)
    this.renderFoxVideo = this.renderFoxVideo.bind(this)
  }

  componentDidMount() {
    this.refresh()
  }

  refresh() {
    this.getQuote()
    this.getQuoteNames()
  }

  getQuote() {
    getQuote()
      .then(res => {
        this.setState({
          quote: res.body
        })
      })
  }

  getQuoteNames() {
    getQuoteNames()
      .then(res => {
        this.setState({
          names: res.body
        })
      })
  }

  getAuthentication() {
    getAuthentication()
      .then(res => {
        this.setState({
          authentication: res.body
        })
      })
  }

  renderFoxVideo() {
    this.setState({
      authentication: true
    })
  }

  renderTheRest() {
    return (
      <div id="main">
        <button onClick={() => Router.refresh()}>Refresh Page</button>
        <div id="article">
          <ArticleWithFox foxImage={this.state.foxImage} article={this.state.article} />
        </div>
        <div id="sidebar">
          <i>Chat to me, sweetie!<ChatApp /></i>
          <br />
          <TrumpQuote quote={this.state.quote} names={this.state.names} />
          <br />
          <div>
            <Advertising ad={this.state.ad} />
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <React.Fragment>
        <div id="header"><img src="images/foxy.png" /></div>
        <div id='login-thing'><Login authentication={this.renderFoxVideo} /></div>
        <div>{this.state.authentication == true ? <Secret /> : this.renderTheRest()}</div>
        <div id="comic">
          <Comics comics={this.state.comics} />
        </div>
      </React.Fragment>
    )
  }
}

export default App
