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


<form onSubmit={(e)=> {
    e.preventDefault()
    this.handleSubmit()}}>
    <input id ="name"name='users' type='text' placeholder='your pretty name'/>
    <input id="password" name='password' type='text' placeholder='your secret code'/>
    <button value="submit">I am new - be nice</button>
    <button value="submit">I have been here before</button>
  </form>