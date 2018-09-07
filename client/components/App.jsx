import React from 'react'
import ArticleWithFox from './ArticleWithFox'
import Comics from './Comics'

import {getFox, getComics} from '../FoxApi-client'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      foxImage: '',
      comics:''
    }

    this.getFox = this.getFox.bind(this)
    this.getComics = this.getComics.bind(this)

  }

  componentDidMount() {
    this.refresh()
  }

  refresh(){
    this.getFox()
    this.getComics()
  }

  getComics() {
    getComics()
    .then(res => {
      this.setState({
        comics: res.body
      })
    })
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
      <div id ="main">
        <ArticleWithFox foxImage={this.state.foxImage}/>
        <Comics comics={this.state.comics}/>
      </div>
    )
  }
}

export default App
