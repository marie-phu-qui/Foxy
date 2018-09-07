import React from 'react'

class ArticleWithFox extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id='main-article'>
          <h1>breaking news</h1>
          <img id='fox-image' src={this.props.foxImage}/>
          <p>{this.props.article}</p>
        </div>
      </React.Fragment>
    )
  }
}

export default ArticleWithFox