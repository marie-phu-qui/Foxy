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
    console.log('clicliclcicliclcilci')
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
        <form onSubmit={(e)=> {
          e.preventDefault()
          this.handleSubmit()}}>
          <input id ="name"name='users' type='text' placeholder='your pretty name'/>
          <input id="password" name='password' type='text' placeholder='your secret code'/>
          <button value="submit">Sent it away</button>
        </form>
    )
}
}

export default Login