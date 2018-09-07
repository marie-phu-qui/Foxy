import React from 'react'

class TrumpQuote extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id='quotes'>
          <h2>Quote of the day</h2>
          <p>{this.props.quote}</p>
        </div>
      </React.Fragment>
    )
  }
}

export default TrumpQuote