import React from 'react'

const Header = (props) => (
    <nav className="header">
        <h1 onClick={props.onReload}>Cooper Hewitt</h1>
        {/* <h1 onClick={props.onReload}>Exhibitions</h1> */}
    </nav>
)

export default Header
