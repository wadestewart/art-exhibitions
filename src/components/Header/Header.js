import React from 'react'

import './Header.css'

const Header = (props) => (
    <div className="navbar-fixed">
        <nav className="nav-wrapper cyan lighten-2">
            <div className="container">
                <div className="valign-wrapper">
                    <p className="brand-logo right" onClick={props.onReload}>Cooper Hewitt</p>
                </div>
            </div>
        </nav>
    </div>
)

export default Header
