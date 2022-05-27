import React from 'react';
import Card from '../card/card';
import styles from './Preview.module.css'

const Preview = ({cards}) => {
    return (
        <section className={styles.preview}>
            <h1 className={styles.title}>Card Preview</h1>
            <ul className={styles.cards}>
                {
                    cards.map(card => {
                        return <Card key={card.id} card={card}/>
                    })
                }
            </ul>
        </section>
    );
};

export default Preview;