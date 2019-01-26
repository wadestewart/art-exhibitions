import React from 'react'

import './Header.css'

const Header = (props) => (
    <div className="navbar-fixed">
        <nav className="nav-wrapper cyan lighten-2">
            <div className="valign-wrapper">
                <p className="brand-logo right">Cooper Hewitt Exhibitions</p>
                <ul className="left">
                    <li><h6 onClick={props.onReload}>Back To Exhibitions List</h6></li>
                </ul>
            </div>
        </nav>
    </div>
)

export default Header
