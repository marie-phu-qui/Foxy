import React from 'react'
import Comics from './Comics'
import Login from './Login'
import Secret from './Secret'
import UnregisteredHome from './UnregisteredHome'

import { getQuote, getQuoteNames, getAuthentication } from '../utils/FoxApi-client'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // quote: '',
      // names: '',
      authentication: false
    }
    // this.getQuote = this.getQuote.bind(this)
    // this.getQuoteNames = this.getQuoteNames.bind(this)
    this.getAuthentication = this.getAuthentication.bind(this)
    this.renderFoxVideo = this.renderFoxVideo.bind(this)
  }

  componentDidMount() {
    this.refresh()
  }

  refresh() {
    // this.getQuote()
    // this.getQuoteNames()
  }

  // getQuote() {
  //   getQuote()
  //     .then(res => {
  //       this.setState({
  //         quote: res.body
  //       })
  //     })
  // }

  // getQuoteNames() {
  //   getQuoteNames()
  //     .then(res => {
  //       this.setState({
  //         names: res.body
  //       })
  //     })
  // }

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


  render() {
    return (
      <React.Fragment>
        <div id="header"><img src="images/foxy.png" /></div>
        <div id='login-thing'><Login authentication={this.renderFoxVideo} /></div>
        <div>{this.state.authentication == true ? <Secret /> : <UnregisteredHome />}</div>
        <div id="comic">
          <Comics comics={this.state.comics} />
        </div>
      </React.Fragment>
    )
  }
}

export default App
