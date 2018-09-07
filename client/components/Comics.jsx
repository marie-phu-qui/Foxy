import React from 'react'

class Comics extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id='comics'>
          <h4>GARFIIIEL where are yhou?</h4>

          {this.props.comics.length > 0 && <img id='garfields' src={this.props.comics[Math.floor(Math.random()*25)].comicImage}/>}
        </div>
      </React.Fragment>
    )
  }
}

export default Comics