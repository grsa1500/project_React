import React, { Component } from 'react'
import header from '../images/header1.svg';
import mobileheader from '../images/mobileheader.svg';

export class Header extends Component {
    render() {
        return <header> <img className="desktopheader" src={header} alt=""/> <img className="mobileheader" src={mobileheader} alt=""/>
</header>

    }
}

export default Header
