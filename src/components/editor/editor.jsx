import React from 'react';
import CardAdd from '../card_add_form/card_add';
import CardEdit from '../card_edit_form/card_edit';
import styles from './editor.module.css'


const Editor = ({cards, addCard, updateCard, deleteCard}) => {
    return (
        <section className={styles.editor}>
            <h1 className={styles.title}>Card Maker</h1>
            {
                cards.map(card => {
                    return <CardEdit key={card.id} card={card} updateCard={updateCard} deleteCard={deleteCard}/>
                })
            }
            <CardAdd onAdd={addCard}/>
        </section>
    );
};

export default Editor;