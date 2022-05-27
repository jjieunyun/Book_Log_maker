import React from 'react';
import styles from './card.module.css'

const DEFAULT_IMAGE = '../../imgs/default_logo.png'

const Card = ({card}) => {
    const {name, company, title, email, message, theme, fileName, fileURL} = card;
    const url = fileURL || DEFAULT_IMAGE;

    return (
        <li>
            <img src="" alt="" />
        </li>
    );
};

export default Card;