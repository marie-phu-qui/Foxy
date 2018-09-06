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
  }

  render() {
    return (
      <div>
        {console.log('hello?')}
        <h1>Fox Fox Fox</h1>
      
        <p>
          {this.state.foxImage.value}
        </p>
      
      </div>
    )
  }
}

export default App
