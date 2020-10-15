import React from 'react'

import Nav from './Nav';

const Layout = (props) => {
    return (
        <div className="main-wrapper">
            {props.children}
        </div>
    )
}

export { Layout, Nav };