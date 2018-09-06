import React from 'react'
import {getFox} from '../FoxApi-client'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      foxImage: '',
    }

    this.getFox = this.getFox.bind(this)
  }

  componentDidMount() {
    this.getFox()

  }

  getFox() {
    getFox()
    .then(res => {
      this.setState({
        foxImage: res.body
        
      })
    })
    console.log(this.state.foxImage)
  }

  render() {
    return (
      <div>
      
        <h1>Fox Fox Fox</h1>
        <img id='fox-image' src={this.state.foxImage}/>
        {console.log('hello?')}
      </div>
    )
  }
}

export default App
