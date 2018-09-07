import React from 'react'

class TrumpQuote extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id='quotes'>
          <h2>Inspirational Quotes</h2>
          <i>{this.props.quote}</i>
          <h3><strong>{this.props.names}</strong></h3>
        </div>
      </React.Fragment>
    )
  }
}

export default TrumpQuote