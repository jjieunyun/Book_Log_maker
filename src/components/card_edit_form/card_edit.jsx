import React, { useRef } from 'react';
import Button from '../button/button';
//🍎전역으로 선언하고 props로 받아오기 때문에 직접적으로 연결해주지 않아도 된다.
//import ImageFileInput from '../image_file_input/img_file_input';
import styles from './card_edit.module.css'

const CardEdit = ({FileInput,card, updateCard, deleteCard}) => {
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const {name, company, title, email, message, theme, fileName} = card;

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

    const onSubmit = () => {
        deleteCard(card);
    };

    return (
        <form className={styles.form}>
            <input 
                className={styles.input} 
                type="text" 
                name='name' 
                ref={nameRef} 
                value={name}
                onChange={onChange}
            />
            <input className={styles.input} 
                type="text" 
                name='company' 
                ref={companyRef} 
                value={company}
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
                name='title' 
                ref={titleRef} 
                value={title}
                onChange={onChange}
            />
            <input className={styles.input} 
                type="text" 
                name='email' 
                ref={emailRef} 
                value={email}
                onChange={onChange}
            />
            <textarea className={styles.textarea} 
                name="message" 
                ref={messageRef} 
                value={message}
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

