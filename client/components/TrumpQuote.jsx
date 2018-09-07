import React from 'react'

class TrumpQuote extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id='quotes'>
          <h1>Inspirational Quotes</h1>
          <i>{this.props.quote}</i>
          <p><strong>{this.props.names}</strong></p>
        </div>
      </React.Fragment>
    )
  }
}

export default TrumpQuote