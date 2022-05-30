import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './App';

import {firebaseApp} from './service/firebase'

import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image_file_input/img_file_input';

const authService =  new AuthService(firebaseApp);
//🍎최하위에서 사용할 데이터를 가지는 컴포넌트를 전달
//props를 계속 이용해서 전달해주어야 하기 때문에 따로 , 외부컴포넌트로 만들고 index로 전달
// 장점 : 쓸데없이 많은 서비스를 전달하지 않아도 된다, dependency injection을 심플하게 할 수있다.
const imageUploader = new ImageUploader();
const FileInput = props => (<ImageFileInput {...props} imageUploader={imageUploader} />)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput}/>
  </React.StrictMode>
);

