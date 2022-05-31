import React, { memo, useEffect, useState } from 'react';
import styles from './card.module.css'
import DEFAULT_IMAGE from '../../imgs/default_logo.png'


const Card = memo(
    ({title, author, theme, startDate, endDate, rating, fileURL, comment})  => {
    //⭐fileURL이 없다면? DEFAULT_IMAGE가 출력된다! 
    const url = fileURL || DEFAULT_IMAGE;
    const [emoji, setEmoji] = useState(rating);
    
    useEffect(()=>{
        setEmoji(emojiRating(rating))
    },[rating])

    return (
        <li className={`${styles.card} ${getStyles(theme)}`}>
            <img className={styles.avatar} src={ url } alt="book" />
            <div className={styles.info}>
                <div className={styles.titleBox}>
                    <h1 className={styles.title}>" {title} "</h1>
                    <p className={styles.rating}>{emoji}</p>
                </div>
                    <p className={styles.author}>{author}</p>
                <div className={styles.date}>
                    <p className={styles.startDate}>( {startDate}&nbsp;~&nbsp;</p>
                    <p className={styles.endDate}> {endDate} )</p>
                </div>
                
                <p className={styles.comment}>{comment}</p>
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