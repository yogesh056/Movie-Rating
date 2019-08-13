import React, { Component } from 'react';
import Axios from 'axios';


class login extends Component {
  constructor() {
    super()
    this.state = {
     
      email: '',
      password: '',
        }

  }
 


  
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const newUser = { ...this.state }
    console.log(newUser);
    // var link = "http://localhost:8123/signup"
    // Axios.post(link,newUser).then(res => {
     
    //    console.log(res);
    // })
  }
  onRegister=()=>
  {
    this.props.history.push(`/register`)

  }

  render() {
    return (
      <div className="container">
        <div className="row">

          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
               
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Login
              </button>
              <button
                type="button"
                className="btn btn-lg btn-primary btn-block"
                onClick={this.onRegister}
              >
                new user Create Account
              </button>
            </form>
           
          </div>
        </div>
      </div>
    )
  }
}

export default login;
