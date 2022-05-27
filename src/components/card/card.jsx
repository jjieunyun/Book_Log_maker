import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import styles from './card.module.css'

const DEFAULT_IMAGE = '../../imgs/default_logo.png'

const Card = ({card}) => {
    const {name, company, title, email, message, theme, fileName, fileURL} = card;
    const url = fileURL || DEFAULT_IMAGE;

    return (
        <li>
            <img src={process.env.PUBLIC_URL + {url}} alt="profile photo" />
            <div>
                <h1>{name}</h1>
                <p>{company}</p>
                <p>{title}</p>
                <p>{email}</p>
                <p>{message}</p>
            </div>
        </li>
    );
};

export default Card;