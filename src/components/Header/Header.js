import React from 'react'

import './Header.css'

const Header = (props) => (
    <div className="navbar-fixed">
        <nav className="nav-wrapper cyan lighten-2">
            <div className="valign-wrapper">
                <p className="brand-logo right">Cooper Hewitt Exhibitions</p>
                <i className="material-icons" onClick={props.onReload}>arrow_back</i>
            </div>
        </nav>
    </div>
)

export default Header
