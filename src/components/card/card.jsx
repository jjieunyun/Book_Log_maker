import React, { memo, useEffect, useState } from 'react';
import styles from './card.module.css'
import DEFAULT_IMAGE from '../../imgs/default_logo.png'


const Card = memo(
    ({name, company, title, email, message, theme, fileURL, rating})  => {
    //⭐fileURL이 없다면? DEFAULT_IMAGE가 출력된다! 
    const url = fileURL || DEFAULT_IMAGE;
    const [emoji, setEmoji] = useState(rating);
    
    useEffect(()=>{
        setEmoji(emojiRating(rating))
    },[rating])

    return (
        <li className={`${styles.card} ${getStyles(theme)}`}>
            <img className={styles.avatar} src={ url } alt="profile" />
            <div className={styles.info}>
                <div className={styles.titleBox}>
                    <h1 className={styles.name}>" {name} "</h1>
                    <p className={styles.rating}>{emoji}</p>
                </div>
                    <p className={styles.company}>{company}</p>
                <div className={styles.date}>
                    <p className={styles.title}>( {title}&nbsp;~&nbsp;</p>
                    <p className={styles.email}> {email} )</p>
                </div>
                
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

function emojiRating (rating) {
    switch(rating) {
        case '5' : 
            return '⭐⭐⭐⭐⭐';
        case '4' :
            return '⭐⭐⭐⭐';
        case '3' : 
            return '⭐⭐⭐';
        case '2' : 
            return '⭐⭐';
        case '1' : 
            return '⭐';
        default:
            throw new Error(`unknown rating !!!!: ${rating}`);
    }
}



export default Card;