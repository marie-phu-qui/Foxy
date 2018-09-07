import React from 'react'

class TrumpQuote extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id='quotes'>
          <h1>Inspirational Quotes</h1>
          <p>{this.props.quote}</p>
        </div>
      </React.Fragment>
    )
  }
}

export default TrumpQuote