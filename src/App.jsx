import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';


function App({FileInput ,authService, cardRepository}) {
  return (
    <div className={styles.app} basename={process.env.PUBLIC_URL}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/Book_Log_maker' element={<Login authService={authService}/>} />
          <Route path='/Book_Log_maker/maker' element={<Maker FileInput={FileInput} authService={authService} 
                cardRepository={cardRepository} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
