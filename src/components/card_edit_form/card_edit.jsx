import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/img_file_input';
import styles from './card_edit.module.css'

const CardEdit = ({card}) => {
    const {name, company, title, email, message, theme, fileName, fileURL} = card;
    const onSubmit = () => {}

    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" name='name' value={name}/>
            <input className={styles.input} type="text" name='company' value={company}/>
            <select className={styles.select} name="theme" vlaue={theme}>
                <option value="light">light</option>
                <option value="dark">dark</option>
                <option value="colorful">colorful</option>
            </select>
            <input className={styles.input} type="text" name='title' value={title}/>
            <input className={styles.input} type="text" name='email' value={email}/>
            <textarea className={styles.textarea} name="message" value={message}></textarea>
            <div className={styles.fileInput}>
                <ImageFileInput/>
            </div>
            <Button name='Delete' onClick={onSubmit}/>
        </form>
    );
};

export default CardEdit;