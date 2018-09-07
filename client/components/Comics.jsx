import React from 'react'

// {let randomness = Math.floor(Math.random *(this.props.comics.length))}


class Comics extends React.Component {
  render() {
    return (
      <React.Fragment>
        {console.log('GARFIIIEL where are yhou?')}


        <div id='comics'>
          <h4>GARFIIIEL where are yhou?</h4>
          {console.log(Math.floor(Math.random()))}
          {this.props.comics.length > 0 && <img id='garfields' src={this.props.comics[Math.floor(Math.random *(this.props.comics.length-1))].comicImage}/>}
        </div>
      </React.Fragment>
    )
  }
}

export default Comics