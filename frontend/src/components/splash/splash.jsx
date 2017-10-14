import React, { Component } from 'react';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.state = {username: "", email: "", password: ""};
  }

  componentWillMount() {
    //redirect if currentUser
  }

  handleSignUp(e) {
    e.preventDefault();
    this.props.signUp(this.state)
              .then(() => this.props.history.push("/index"));
  }

  handleLogIn(e) {
    e.preventDefault();
    // debugger
    // this.context.router.push("/login");
    // console.log(this.state);
    this.props.logIn({username: this.state.username,
                      password: this.state.password});
  }

  handleSignOut(e) {
    e.preventDefault();
    this.setState({username: "", email: "", password: ""})
    this.props.logOut();
  }

  update(field) {
    return (e) => { //no periods allowed for some reason.
      this.setState({[field]: e.target.value});
    }
  }

  render() {
    const form = this.props.currentUser ?
      <button onClick={this.handleSignOut}>You're logged in. Sign Out!</button> :
        <div>
          <form onSubmit={this.handleSignUp}>
            <label>
              <input type="text"
                     onChange={this.update('username')}
                     placeholder="Username"
                     value={this.state.username}></input>
            </label>

            <label>
              <input type="text"
                     onChange={this.update('password')}
                     placeholder="Password"
                     value={this.state.password}></input>
            </label>

            <input type="submit" value="Sign Up"></input>
          </form>
            <button onClick={this.handleLogIn}>Log In</button>
        </div>


    return (
      <div>
        <h1>Get better results at Translate OverFlow</h1>
        {form}
        <ul>
          {
            this.props.errors.map((err) => <li key={err}>{err}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default Splash;
