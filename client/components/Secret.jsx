import React from 'react'

class Secret extends React.Component {

  render() {
    return(
      <div className="secret-video">
       <h1> What does the Fox say?</h1>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/jofNR_WkoCE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    )
  }
}


export default Secret