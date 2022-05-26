import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css'

const Login = ({authService}) => {
    const navigator = useNavigate();
    
    const goToMaker = (userId) => {
        //⭐사용자의 정보도 함께 전달~!!!
        navigator('/maker', {state : { id : userId}} );
    }

    const onLogin = (event) => {
        authService
            .login(event.currentTarget.textContent)
            //🍎🍎🍎🍎🍎🍎🍎🍎🍎다시보자!!!
            .then(data => goToMaker(data.user.uId))
    }

    return (
        <section className={styles.login}>
            <Header/>
            <section>
                <h1 className={styles.title}>Login</h1>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={onLogin}>Google</button>
                    </li>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={onLogin}>GitHub</button>
                    </li>
                </ul>
            </section>
            <Footer/>
        </section>
    );
};

export default Login;