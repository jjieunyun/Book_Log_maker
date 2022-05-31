import React, { useRef } from 'react';
import Button from '../button/button';
//🍎전역으로 선언하고 props로 받아오기 때문에 직접적으로 연결해주지 않아도 된다.
//import ImageFileInput from '../image_file_input/img_file_input';
import styles from './card_edit.module.css'

const CardEdit = ({FileInput,card, updateCard, deleteCard}) => {
    const titleRef = useRef();
    const authorRef = useRef();
    const themeRef = useRef();
    const startDateRef = useRef();
    const endDateRef = useRef();
    const commentRef = useRef();
    const ratingRef = useRef();

    const {title, author, startDate, endDate, comment, theme, fileName, rating} = card;

    //🍎사진 파일이 바뀌면 updateCard함수를 호출해서 로직을 실행
    const onFileChange = file => {
        updateCard({
            ...card,
            fileName : file.name,
            fileURL : file.url
        })
    }

    const onChange = event => {
        if(event.currentTarget == null) {
            return;
        }
        event.preventDefault();
        updateCard( {
            //⭐기존의 카드를 모두 가져오기  + key : value로 데이터 넣기
            ...card,
            [event.currentTarget.name] : event.currentTarget.value
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if(window.confirm("Log를 정말 삭제 하시겠습니까?")){
            console.log('bb')
            deleteCard(card);
            alert('Log를 삭제했습니다.');
        }
    };


    // const onSubmit = () => {
    //     deleteCard(card);
    // };

    return (
        <form className={styles.form}>
            <input 
                className={styles.input} 
                type="text" 
                name='title' 
                ref={titleRef} 
                value={title}
                onChange={onChange}
            />
            <input className={styles.input} 
                type="text" 
                name='author' 
                ref={authorRef} 
                value={author}
                onChange={onChange}
            />
            <select className={styles.select} 
                name="theme" 
                ref={themeRef} 
                vlaue={theme}
                onChange={onChange}
            >
                <option value="light">light</option>
                <option value="dark">dark</option>
                <option value="colorful">colorful</option>
            </select>
            <input className={styles.input} 
                type="text" 
                name='startDate' 
                ref={startDateRef} 
                value={startDate}
                onChange={onChange}
            />
            <input className={styles.input} 
                type="text" 
                name='endDate' 
                ref={endDateRef} 
                value={endDate}
                onChange={onChange}
            />

            <select className={styles.select} 
                name="rating" 
                ref={ratingRef} 
                vlaue={rating}
                onChange={onChange}
            >
                <option value="5">⭐⭐⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="2">⭐⭐</option>
                <option value="1">⭐</option>
            </select>

            <textarea className={styles.textarea} 
                name="comment" 
                ref={commentRef} 
                value={comment}
                onChange={onChange}
            ></textarea>

            <div className={styles.fileInput}>
                <FileInput name={fileName} onFileChange={onFileChange}/>
            </div>
            <Button name='Delete' onClick={onSubmit}/>
        </form>
    );
};

export default CardEdit;

