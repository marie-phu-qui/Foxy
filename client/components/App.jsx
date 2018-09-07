import React from 'react'
import ArticleWithFox from './ArticleWithFox'

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
        <ArticleWithFox foxImage={this.state.foxImage}/>
      </div>
    )
  }
}

export default App
