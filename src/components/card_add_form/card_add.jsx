import React, { memo, useRef, useState } from 'react';
import Button from '../button/button';
import styles from './card_add.module.css'

const CardAdd = memo(({FileInput, onAdd }) => {
    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const ratingRef = useRef();

    const [file, setFile] = useState({fileName: null, fileURL : null});

    const onFileChange = (file) => {
        setFile({
            fileName : file.name,
            fileURL : file.url,
        })
    }

    const onSubmit = event => {
        // console.log(event);
        event.preventDefault();

    const card = {
        id: Date.now(), //uuid
        name: nameRef.current.value || '',
        company: companyRef.current.value || '',
        theme: themeRef.current.value,
        title: titleRef.current.value || '',
        email: emailRef.current.value || '',
        rating: ratingRef.current.value || '',
        message: messageRef.current.value || '',
        fileName: file.fileName || '',
        fileURL: file.fileURL || '',
        };
        
        formRef.current.reset();
        // console.log(card);
        setFile({fileName: null, fileURL : null});
        onAdd(card);
    };

    return (
        <form ref={formRef} className={styles.form}>
        <input
            ref={nameRef}
            className={styles.input}
            type="text"
            name="name"
            placeholder="TITLE"
        />
        <input
            ref={companyRef}
            className={styles.input}
            type="text"
            name="company"
            placeholder="AUTHOR"
        />
        <select
            ref={themeRef}
            className={styles.select}
            name="theme"
            placeholder="THENE"
        >
            <option placeholder="light">light</option>
            <option placeholder="dark">dark</option>
            <option placeholder="colorful">colorful</option>
        </select>
        <input
            ref={titleRef}
            className={styles.input}
            type="text"
            name="title"
            placeholder="START DATE"
        />
        <input
            ref={emailRef}
            className={styles.input}
            type="text"
            name="email"
            placeholder="END DATE"
        />

            <select className={styles.select} 
                name="rating" 
                ref={ratingRef} 
                placeholder="RATING"
            >
                <option value="5">⭐⭐⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="2">⭐⭐</option>
                <option value="1">⭐</option>
            </select>

        <textarea
            ref={messageRef}
            className={styles.textarea}
            name="message"
            placeholder="COMMENT"
        />
        <div className={styles.fileInput}>
            <FileInput name={file.fileName} onFileChange={onFileChange} />
        </div>
        <Button name="Add" onClick={onSubmit} />
        </form>
    );
})
export default CardAdd;