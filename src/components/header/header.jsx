import React from 'react';
import styles from './header.module.css'
import logo from '../imgs/logo.png'


const Header = () => {
    return (
        <header>
            <img className={styles.header_logo} src={logo} alt="logo" />
        </header>
    );
};

export default Header;