import React from 'react'
import { Router } from '@reach/router'
import { Link } from 'gatsby'

const Home = () => <p>Home</p>
const Settings = () => <p>Settings</p>

export default function Account() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/account">My Account</Link>
        <Link to="/account/settings">Settings</Link>
      </nav>
      <Router>
        <Home path="/account" />
        <Settings path="/account/settings" />
      </Router>
    </>
  )
}
