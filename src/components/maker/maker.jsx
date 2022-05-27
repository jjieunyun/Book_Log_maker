import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/Preview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css'

const Maker = ({authService}) => {
    //🍎useNavigation으로 전달받은 객체 ; state안에 들어있다!
    const navigation = useNavigate();
    const location = useLocation();
    const data = location.state;
    console.log(data.id)

    //🍎로그아웃함수
    const onLogout = () => {
        authService.logout();
    }

    //🍎로그아웃 버튼 클릭 후 로그인페이지 이동 : (사용자의 authState가 변경되면 이동)
    useEffect(()=> {
        authService.onAuthChange(user => {
            if(!user) {
                navigation('/')
            }
        })
    })

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
                <div className={styles.container}>
                    <Editor/>
                    <Preview/>
                </div>
            <Footer/>
        </section>
    );
};

export default Maker;