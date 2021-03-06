import React, { memo } from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './App';

import {firebaseApp} from './service/firebase'

import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image_file_input/img_file_input';
import CardRepository from './service/card_repository'

const authService =  new AuthService(firebaseApp);
//๐์ตํ์์์ ์ฌ์ฉํ  ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ง๋ ์ปดํฌ๋ํธ๋ฅผ ์ ๋ฌ
//props๋ฅผ ๊ณ์ ์ด์ฉํด์ ์ ๋ฌํด์ฃผ์ด์ผ ํ๊ธฐ ๋๋ฌธ์ ๋ฐ๋ก , ์ธ๋ถ์ปดํฌ๋ํธ๋ก ๋ง๋ค๊ณ  index๋ก ์ ๋ฌ
// ์ฅ์  : ์ธ๋ฐ์์ด ๋ง์ ์๋น์ค๋ฅผ ์ ๋ฌํ์ง ์์๋ ๋๋ค, dependency injection์ ์ฌํํ๊ฒ ํ  ์์๋ค.
const imageUploader = new ImageUploader();
const cardRepository = new CardRepository();
const FileInput = memo(props => (<ImageFileInput {...props} imageUploader={imageUploader} />));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} cardRepository={cardRepository}/>
  </React.StrictMode>
);

