import React, { memo, useRef, useState } from 'react';
import Button from '../button/button';
import styles from './card_add.module.css'

const CardAdd = memo(({FileInput, onAdd }) => {
    const formRef = useRef();
    const titleRef = useRef();
    const authorRef = useRef();
    const themeRef = useRef();
    const startDateRef = useRef();
    const endDateRef = useRef();
    const commentRef = useRef();
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
        title: titleRef.current.value || '',
        author: authorRef.current.value || '',
        theme: themeRef.current.value,
        startDate: startDateRef.current.value || '',
        endDate: endDateRef.current.value || '',
        rating: ratingRef.current.value || '',
        comment: commentRef.current.value || '',
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
            ref={titleRef}
            className={styles.input}
            type="title"
            name="name"
            placeholder="TITLE"
        />
        <input
            ref={authorRef}
            className={styles.input}
            type="text"
            name="author"
            placeholder="AUTHOR"
        />
        <select
            ref={themeRef}
            className={styles.select}
            name="theme"
            placeholder="THEME"
        >
            <option placeholder="light">light</option>
            <option placeholder="dark">dark</option>
            <option placeholder="colorful">colorful</option>
        </select>
        <input
            ref={startDateRef}
            className={styles.input}
            type="text"
            name="startDate"
            placeholder="START DATE"
        />
        <input
            ref={endDateRef}
            className={styles.input}
            type="text"
            name="endDate"
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
            ref={commentRef}
            className={styles.textarea}
            name="comment"
            placeholder="COMMENT"
        />
        <div className={styles.fileInput}>
            <FileInput name={file.fileName} onFileChange={onFileChange} />
        </div>
            <Button   name="Add" onClick={onSubmit} />
        </form>
    );
})
export default CardAdd;