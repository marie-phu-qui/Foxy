import React from 'react'

class Advertising extends React.Component {
  render() {
    return (
      <React.Fragment>

        <h3>Desperate Advertising</h3>
        <p>{this.props.add}</p>
      </React.Fragment>
    )
  }
}

export default Advertising