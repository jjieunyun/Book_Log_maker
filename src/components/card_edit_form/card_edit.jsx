import React from 'react';
import styles from './card_edit.module.css'

const CardEdit = ({card}) => {
    return (
        <section className={styles.card}>
            <h1>{card.id}</h1>
        </section>
    );
};

export default CardEdit;