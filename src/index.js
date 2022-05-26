import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './App';

import {firebaseApp} from './service/firebase'

import AuthService from './service/auth_service';

const authService =  new AuthService(firebaseApp);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>
);

