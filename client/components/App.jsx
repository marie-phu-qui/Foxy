import React from 'react'
import ArticleWithFox from './ArticleWithFox'
import Comics from './Comics'
import TrumpQuote from './TrumpQuote'
import ChatApp from './Chat'

import {getFox, getComics, getQuote} from '../FoxApi-client'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      foxImage: '',
      comics:'',
      quote: ''
    }

    this.getFox = this.getFox.bind(this)
    this.getComics = this.getComics.bind(this)
    this.getQuote = this.getQuote.bind(this)

  }

  componentDidMount() {
    this.refresh()
  }

  refresh(){
    this.getFox()
    this.getComics()
    this.getQuote()
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

  getQuote() {
    getQuote()
    .then(res => {
      this.setState({
        quote: res.body
        
      })
    })
  }

  render() {
    return (
      <div id ="main">
        <ArticleWithFox foxImage={this.state.foxImage}/>
        <Comics comics={this.state.comics}/>
        <ChatApp/>
        <TrumpQuote quote={this.state.quote}/>
      </div>
      

    )
  }
}

export default App
