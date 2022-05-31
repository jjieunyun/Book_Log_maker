import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';


function App({FileInput ,authService, cardRepository}) {
  return (
    <div className={styles.app}>
      <BrowserRouter basename={'https://jjieunyun.github.io/Book_Log_maker/'}>
        <Routes>
          <Route exact path='/' element={<Login authService={authService}/>} />
          <Route path='/maker' element={<Maker FileInput={FileInput} authService={authService} 
                cardRepository={cardRepository} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
