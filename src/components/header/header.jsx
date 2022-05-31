import React, { memo } from 'react';
import styles from './header.module.css'
import logo from '../../imgs/Logo_ink.png'


const Header = memo(({ onLogout }) => {
    return (
        <header className={styles.header}>
            {/*⭐로그인이 되었다면 로그아웃이 가능한 버튼을 보여줌*/}
            {true && (
            <button 
                className={styles.logout}
                onClick={onLogout}>Logout</button>)}
            <img className={styles.logo} src={logo} alt="logo" />
            <h1 className={styles.title}>Reading Log</h1>
        </header>
    );
})
export default Header;