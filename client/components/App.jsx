import React from 'react'
import ArticleWithFox from './ArticleWithFox'
import Comics from './Comics'
import TrumpQuote from './TrumpQuote'
import ChatApp from './Chat'

import {getFox, getComics, getQuote, getArticles} from '../FoxApi-client'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      foxImage: '',
      comics:'',
      article:'',
      quote: ''
    }

    this.getFox = this.getFox.bind(this)
    this.getComics = this.getComics.bind(this)
    this.getArticles = this.getArticles.bind(this)
    this.getQuote = this.getQuote.bind(this)
    
  }

  componentDidMount() {
    this.refresh()
  }

  refresh(){
    this.getFox()
    this.getComics()
    this.getArticles()
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
      <React.Fragment>
        <div id="header"><img src="images/foxy.png"/></div>
        <div id ="main">
          <div id= "article">
            <ArticleWithFox foxImage={this.state.foxImage} article={this.state.article}/>
          </div>  
          <div id="sidebar">
            <ChatApp/>
            <TrumpQuote quote={this.state.quote}/>
          </div>
        </div>
        <div id= "comic">
          <Comics comics={this.state.comics}/>
        </div>  
      </React.Fragment>
      

    )
  }
}

export default App
