import React from 'react';
import Card from '../card/card';
import styles from './Preview.module.css'

const Preview = ({cards}) => {
    return (
        <section className={styles.preview}>
            <h1 className={styles.title}>Card Preview</h1>
            <ul className={styles.cards}>
                {Object.keys(cards).map(key => {
                    //* , value에는 cards가 들어있다.*
                        return <Card key={key} card={cards[key]}/>
                    })
                }
            </ul>
        </section>
    );
};

export default Preview;