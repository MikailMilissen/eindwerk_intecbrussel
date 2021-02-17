import React from 'react'
import {Link} from 'react-router-dom'
import './style/Navigationbar.css'

function Navigation() {
   
    return (
        <div>
            <nav>
                <Link to='/'><h3>Logo</h3></Link>
                <ul>
                    <Link to='/messageboard'><li>Messageboard</li></Link>
                    <Link to='/artistboard'><li>Artiesten</li></Link>
                    <Link to='/shop'><li>Shop</li></Link>
                    <Link to='/account'><li>Account</li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation

