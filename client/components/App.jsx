import React from 'react'
import ArticleWithFox from './ArticleWithFox'
import Comics from './Comics'
import ChatApp from './Chat'

import {getFox, getComics, getArticles} from '../FoxApi-client'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      foxImage: '',
      comics:'',
      article:''
    }

    this.getFox = this.getFox.bind(this)
    this.getComics = this.getComics.bind(this)
    this.getArticles = this.getArticles.bind(this)

  }

  componentDidMount() {
    this.refresh()
  }

  refresh(){
    this.getFox()
    this.getComics()
    this.getArticles()
  }

  getComics() {
    getComics()
    .then(res => {
      this.setState({
        comics: res.body
      })
    })
  }

  getArticles() {
    getArticles()
    .then(res => {
      this.setState({
        article: res.body,
              
      })
    })
  }

  getFox() {
    getFox()
    .then(res => {
      this.setState({
        foxImage: res.body,
              
      })
    })
  }

  render() {
    return (
      <div id ="main">
        <ArticleWithFox foxImage={this.state.foxImage} article={this.state.article}/>
        <Comics comics={this.state.comics}/>
        <ChatApp/>
      </div>
    )
  }
}

export default App
