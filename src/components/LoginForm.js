import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit = event => {
     event.preventDefault();
     if (this.state.username.length !== 0 || this.state.password.length !== 0){
       this.props.onSubmit(this.state)
     }

   }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text"
              onChange={event => this.setState({username: event.target.value})} value={this.state.message}
              />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password"
              onChange={event => this.setState({password: event.target.value})} value={this.state.message}
              />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
