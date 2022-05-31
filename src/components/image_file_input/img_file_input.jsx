import React, { memo, useRef, useState } from 'react';
import styles from './img_file_input.module.css';

//🍎fileInput CSS
//file input을 꾸밀 수 있는 방법이 많이 없기 때문에 , 파일은 수동으로 업데이트! ->
//파일input은 보여주지 말고, file의 이름을 보여주는 button을 ui에 출력.

const ImageFileInput = memo(({imageUploader, name, onFileChange}) => {
    //⭐button이 클릭이되면 input이 클릭된것처럼 해주기
    const inputRef = useRef();

    //🍎로딩스피너 state
    const [loading, setLoading] = useState(false);


    //🍎버튼을 클릭하면 input이 클릭되게 만들어주는 함수
    const onButtonClick = (event) =>{
        event.preventDefault();
        inputRef.current.click();
    };

    //🍎file이 변경되면 저장하는 함수
    const onChange = async event => {
        setLoading(true);

        //console.log(event.target.files[0]);
        const uploaded = await imageUploader.upload(event.target.files[0]);
        //console.log(uploaded);
        setLoading(false);
        onFileChange({
            name: uploaded.original_filename,
            url: uploaded.url,
        });
      };

    return <div className={styles.container}>
        <input 
            ref={inputRef}
            className={styles.input}
            type="file" 
            accept='image/*' 
            name='file'
            onChange={onChange}
        />
        {/*로딩이 아니면 1번보여주고 , 로딩이면 2번 스피너를 보여준다*/}
        { !loading && (
            <button className={`${styles.button} ${name? styles.lightGreen : styles.grey}`} onClick={onButtonClick}>
                {name || 'No file'}
            </button>)}
        { loading && <div className={styles.loading}></div> }
    </div>
});

export default ImageFileInput;