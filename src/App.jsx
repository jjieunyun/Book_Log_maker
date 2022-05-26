import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';


function App({authService}) {
  return (
    <div className={styles.app}>
      <BrowserRouter >
        <Routes>
          <Route exact path='/' element={<Login authService={authService}/>} />
          <Route path='/maker' element={<Maker/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
