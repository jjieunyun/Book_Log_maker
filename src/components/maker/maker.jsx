import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/Preview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css'

const Maker = ({FileInput , authService}) => {

    //🍎Data를 Object형태로 관리
    //⭐배열을 저장하지 않고 object를 사용한다!! 기존의 project들과 다름 -> 배열로 작성한 코드 수정!
    const [ cards, setCards ] = useState({
        1 : {
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
        2 : {
            id : '2',
            name : '호두',
            company : '안양',
            theme : 'dark',
            title : '멍멍이1',
            email : 'hodu@gmail.com',
            message : '귀여움',
            filteName : 'ddddd',
            fileURL : null
        },
        3 : {
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
    });



    //⭐useNavigation으로 전달받은 객체 ; state안에 들어있다!
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


    /*
    🍎카드내용 추가 & 업데이트
    🍎자바스크립트에서 배열의 데이터를 가져오는 방식
            elli {
                id : 1,
                text: 'ellie'
            }라는 객체가 있다면?
    (1)ellie.id
    (2)ellid['id']형태로  value를 가져올 수있다.

    🍎(2)를 참고해서, 데이터를 배열에 저장하지 않고 가져오는 방식
    🌳우리가 원하는 카드에 있는 id를 key로 이용하고 & card자체 object를 value로 가져온다.
    =>  updated[card.id] = card;
    */
    const creatOrUpdateCard = card => {
        /*
        🍎{...data}를 선언해서 미리 받아온 데이터가 오래되었다면(받아온 이후에 값이 변경되었다면?)❓
        🌳컴포넌트에 의존해서 setState를 업데이트 해주면 동기적으로 동작 ❌
        🌳⭐setStateAction함수에서 콜백함수를 전달 할 수있다 : 
        */
        setCards(cards => {
            //setCards를 불러올 시점의 cards내용을 그대로 복사
            const updated = {...cards};
            updated[card.id] = card;
            return updated;
        });
    };

    //🍎카드삭제
    const deleteCard = card => {
        setCards(cards => {
            const updated = {...cards};
            delete updated[card.id];
            return updated;
        })
    };

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
                <div className={styles.container}>
                    <Editor
                        FileInput={FileInput}
                        cards={cards} 
                        addCard={creatOrUpdateCard} 
                        updateCard={creatOrUpdateCard} 
                        deleteCard={deleteCard}/>
                    <Preview  cards={cards}/>
                </div>
            <Footer/>
        </section>
    );
};

export default Maker;