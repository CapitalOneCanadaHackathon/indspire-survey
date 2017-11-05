import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render () {
    return (
      <div className="mb-3">
        {this.props.authenticated ?
          <Link className="btn btn-outline-primary float-right" to="/logout">Logout</Link>
          : <Link className="btn btn-outline-primary float-right" to="/login">Login</Link>
        }
        <Link className="btn btn-outline-dark float-left mr-5" to="/dashboard">Dashboard</Link>
        <div className="clearfix"></div>
      </div>

    )
  }
}

export default Header