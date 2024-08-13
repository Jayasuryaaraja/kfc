import React from 'react'
import './Navbar.css'
import Kfclogo from '../images/Kfclogo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div class ="location">
        <p> Allow location access for local store menu and promos </p>
        <button>Set loaction</button>
    </div>
    <hr/>
    <div class="log">
        <img src={Kfclogo}/>
        <ul>
            <li><Link to="/menu" className='lin'>MENU</Link></li>
            <li><Link to="deals" className='lin'>DEALS</Link></li>
        </ul>
        <i class='bx bxs-user-account'></i>
       <h4>Sign in</h4>
       </div>
       <hr/>
       <div class="order">
        <p>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</p>
        <button>Start Order</button>
       </div>
       <hr/>
    </div>
  )
}

export default Navbar