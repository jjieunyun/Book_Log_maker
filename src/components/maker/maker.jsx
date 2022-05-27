import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/Preview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css'

const Maker = ({authService}) => {
    const [ cards, setCards ] = useState([
        {
            id : '1',
            name : '신동헌',
            company : '파라다이스 카지노부산',
            theme : 'light',
            title : 'Casino Dealer',
            email : 'donghun@gmail.com',
            message : '뚱뚱이',
            filteName : 'ddddd',
            fileURL : null,
        },
        {
            id : '2',
            name : '호두',
            company : '안양',
            theme : 'dark',
            title : '멍멍이1',
            email : 'hodu@gmail.com',
            message : '귀여움',
            filteName : 'ddddd',
            fileURL : null
        }
        ,
        {
            id : '3',
            name : '꾸꾸',
            company : '지원이집',
            theme : 'colorful',
            title : '멍멍이2',
            email : 'gguggu@gmail.com',
            message : '너무귀여움',
            filteName : 'ddddd',
            fileURL : null
        }
    ])
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
                    <Editor cards={cards}/>
                    <Preview  cards={cards}/>
                </div>
            <Footer/>
        </section>
    );
};

export default Maker;