import React from 'react';
import styles from './button.module.css'

const Button = ({name, onClick}) => {
    return (
        <div>
            <button className={styles.button} onClick={onClick}>{name}</button>
        </div>
    );
};

export default Button;