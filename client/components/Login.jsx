import React from 'react'
const request = require('superagent')

class Login extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      authentication:false
    }
  
  this.handleSubmit = this.handleSubmit.bind(this)

}


  handleSubmit() {
      let thisUser = document.getElementById("name").value
      let thisPassword = document.getElementById("password").value
      request.post('/register')
      .send({ users: thisUser, password: thisPassword })
      .then(() => {
        console.log('send')  
        this.props.authentication()
      })
      .catch((err) => {
        console.log('error', err)
      })
    }



  render() {
    return (
      <div>
        <h4 className='title-form'>Psssst.... Wanna see something cool ?</h4>
        <form onSubmit={(e)=> {
          e.preventDefault()
          this.handleSubmit()}}>
          <div id = "register">
          <input id ="name"name='users' type='text' placeholder='your pretty name'/>
          <input id="password" name='password' type='text' placeholder='your secret code'/>
          <button id = "signin" value='submit'>I am new - be nice</button>
          {/* <button id = "login" value="submit">I have been here before</button> */}
          </div>
        </form>
      </div>
          
    )
}
}

export default Login