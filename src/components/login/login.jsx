import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css'

const Login = ({authService}) => {
    const navigator = useNavigate();
    
    const goToMaker = (userId) => {
        //⭐사용자의 정보도 함께 전달~!!!
        navigator('/Book_Log_maker/maker', {state : { id : userId}} );
    }

    const onLogin = (event) => {
        authService
            .login(event.currentTarget.textContent)
            //⭐goToMaker를이용해서 uid값을 전달
            .then(data => goToMaker(data.user.uid))
            
    };

    //🍎컴포넌트가 업데이트되거나 mount될때 사용자가 로그인 되어있다면?
    //useEffect로 자동으로 로그인정보를 가져올수 있게 한다 : 서비스 로직을 분리했기 때문에 service login에가서 !!
    useEffect(()=> {
        authService
            .onAuthChange(user => {
                //⭐user가 있다면 goToMaker()로 이동한다!(인자를 가지고~!!)
                user && goToMaker(user.uid);
            })
    })

    return (
        <section className={styles.login}>
            <Header/>
            <section className={styles.loginBox}>
                <h1 className={styles.title}>LogIn</h1>
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