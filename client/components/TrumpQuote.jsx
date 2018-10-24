import React from 'react'

import { getQuote, getQuoteNames } from '../utils/FoxApi-client'

class TrumpQuote extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      quote: '',
      names: ''
    }

    this.getQuote = this.getQuote.bind(this)
    this.getQuoteNames = this.getQuoteNames.bind(this)
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

  render() {
    return (
      <React.Fragment>
        <div id='quotes'>
          <h2>Inspirational Quotes</h2>
          <i>{this.state.quote}</i>
          <h3><strong>{this.state.names}</strong></h3>
        </div>
      </React.Fragment>
    )
  }
}

export default TrumpQuote