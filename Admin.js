import React from 'react'
import './Admin.css';
import './Login';
import './Createac';
import {Link} from 'react-router-dom';
function logins() {
  return (
    <div>
      <header class="headersd">
        <a href="#" class="logo">Recruito</a>
        <nav class="nav-items">
      <Link to="/AdminLogin"> <a>LOGIN</a></Link>
        </nav>
      </header>
      <main>
        <div class="intro">
        </div>
      </main>
      <footer class="footer">
        <div class="copy">&copy; 2022 Employees</div>
        <div class="iconss">

      </div>
    </footer>
      </div>
  )
}

export default logins