import React from 'react'

class ArticleWithFox extends React.Component {
  render() {
    return (
      <React.Fragment>
        {console.log('hello?')}
        <div id='main-article'>
          <h1>Fox Fox Fox</h1>
          <img id='fox-image' src={this.props.foxImage}/>
        </div>
      </React.Fragment>
    )
  }
}

export default ArticleWithFox