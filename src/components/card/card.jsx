import React, { memo } from 'react';
import styles from './card.module.css'
import DEFAULT_IMAGE from '../../imgs/default_logo.png'


const Card = memo(
    ({name, company, title, email, message, theme, fileURL})  => {
    //⭐fileURL이 없다면? DEFAULT_IMAGE가 출력된다! 
    const url = fileURL || DEFAULT_IMAGE;

    return (
        <li className={`${styles.card} ${getStyles(theme)}`}>
            <img className={styles.avatar} src={ url } alt="profile" />
            <div className={styles.info}>
                <h1 className={styles.name}>{name}</h1>
                <p className={styles.company}>{company}</p>
                <p className={styles.title}>{title}</p>
                <p className={styles.email}>{email}</p>
                <p className={styles.message}>{message}</p>
            </div>
        </li>
    );

    
});

function getStyles(theme) {
    switch(theme) {
        case 'dark' : 
            return styles.dark;
        case 'light' :
            return styles.light;
        case 'colorful' : 
            return styles.colorful;
            default:
            throw new Error(`unknown theme : ${theme}`);
    }
}



export default Card;