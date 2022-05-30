import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/Preview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css'

const Maker = ({FileInput , authService, cardRepository}) => {

    //⭐useNavigation으로 전달받은 객체 ; state안에 들어있다!
    const navigation = useNavigate();
    const location = useLocation();
    const locationData = location?.state;
    //console.log(locationData.id)

    //🍎Data를 Object형태로 관리
    //⭐배열을 저장하지 않고 object를 사용한다!! 기존의 project들과 다름 -> 배열로 작성한 코드 수정!
    const [ cards, setCards ] = useState({});
    const [userId, setUserId] = useState(locationData && locationData.id);

    //🍎로그아웃함수
    const onLogout = () => {
        authService.logout();
    }

    //🍎firebase에서 데이터를 불러주는 함수 (⭐useEffect는 로직별로 분리할 수있다.)
    useEffect(()=> {
        if(!userId) {
            return;
        }
        //cardRepository의 onUpdate함수 : 두번째 인자인 콜백함수로 전달
        /*
        ⭐⭐⭐⭐할당된 함수 주의하기❗❗❗❗
        const a = calculate; // 함수의 ref만 할당, 함수는 호출되지 않음 a는 calculate 함수를 가리킴
        const b = calculate(); // calculate 함수가 먼저 수행이 되고 그 리턴값인 5가 b에 할당
        
        */
        const stopSync =  cardRepository.syncCards(userId, cards => {
            setCards(cards);
        })
        //🍎useEffect의 return의 역할 : ㅕnmount되면 return을 알아서 호출
        //⭐resource정리 memory정리와 같은 일들을 return에 넣어주면된다.
        //stopSync는 unmount되었을 때 불필요한 네트워크사용을 차단한다. => cardRepository의 return부분
        //⭐⭐useEffect return에서는 항상 function을 리턴해 주어야 한다!
        //return stopSync()  이 줄의 코드가 실행되는 순간,stopSync가 실행이 되기 때문에 더이상 sync가 이뤄지지 않음 :)
        return () => stopSync();
    },[userId])


    //🍎로그아웃 버튼 클릭 후 로그인페이지 이동 : (사용자의 authState가 변경되면 이동)
    useEffect(()=> {
        authService.onAuthChange(user => {
            if(user) {
                setUserId(user.uid)
            }else {
                //⭐사용자의 정보가 변경될 떄마다, setUserId호출
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
        cardRepository.saveCard(userId, card);
    };

    //🍎카드삭제
    const deleteCard = card => {
        setCards(cards => {
            const updated = {...cards};
            delete updated[card.id];
            return updated;
        })
        cardRepository.removeCard(userId,card);
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