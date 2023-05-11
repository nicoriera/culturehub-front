import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
      <h1>HouseCo</h1>
      </Link>
      <div className="links">
        <a href="/">Home</a>
        <a href="/articles">Articles</a>
        <a href="/news">News</a>
        </div>
    </div>
  )
}

export default Navbar
