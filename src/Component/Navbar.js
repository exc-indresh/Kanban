import React from 'react'
import "../CSS/navbar.css"
const Navbar = () => {
  

    return (
        <div class="dropdown">
        <button class="dropbtn">Display</button>
        <div class="dropdown-content">
          <a href="/">Status</a>
          <a href="/user">User</a>
          <a href="/priority">Priority</a>
        </div>
      </div>
    )
}

export default Navbar
