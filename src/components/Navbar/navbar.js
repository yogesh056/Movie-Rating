import React, { Component } from 'react'
import './navbar.css'
import { Link, withRouter } from 'react-router-dom'

export default class navbar extends Component {
    render() {
        return (

            <div className="head-container">
                <div className="navbar">
                    <div>
                        <a href="#">
                            <Link to="/" className="nav-link">
                                Home
          </Link></a>
                    </div>
                    <div>

                        <a href="#">Movies</a>
                        <a href="#">
                            <Link to="/login" className="nav-link">
                                Login
          </Link></a>
                        <a href="#">

                            <Link to="/notification" className="nav-link">
                                {/* <span className="icon-bell"></span> */}
                                Notification
                            </Link>


                        </a>
                    </div>



                </div>
            </div>

        )
    }
}
