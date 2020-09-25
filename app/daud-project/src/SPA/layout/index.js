import React from 'react';

import Nav from './Nav';
import Footer from './Footer';

const Layout = (props) => {
    return (
        <div class="text-center p-10 h-screen">
            {props.children}
        </div>
    )
}

export { Layout, Nav, Footer };