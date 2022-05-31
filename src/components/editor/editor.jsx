import React from 'react';
import CardAdd from '../card_add_form/card_add';
import CardEdit from '../card_edit_form/card_edit';
import styles from './editor.module.css'


const Editor = ({FileInput,cards, addCard, updateCard, deleteCard}) => {
    return (
        <section className={styles.editor}>
            <h1 className={styles.title}>Log Maker</h1>
            {/*
            ⭐cards는 배열이 아니기 때문에 map할 수 있는 상태로 변환시켜야한다 => cards안의 key를 map한다!
            Object안에 keys라는 함수를 이용해서 cards의 key를 받아옴 ->*/}
            {Object.keys(cards).map(key => (
                <CardEdit 
                    key={key} 
                    FileInput={FileInput}
                    card={cards[key]} 
                    updateCard={updateCard} 
                    deleteCard={deleteCard}
                />
            ))}
            <CardAdd FileInput={FileInput} onAdd={addCard}/>
        </section>
    );
};

export default Editor;