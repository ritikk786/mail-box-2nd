
import context from 'react-bootstrap/esm/AccordionContext';
import './App.css';
import AuthForm from './Components/Authentication/AuthForm';
import Header from './Components/Header/Header';
import { Fragment, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Context from './Store/Auth-ctx';
import Welcome from './Components/Welcome/Welcome';

function App() {
  const ctx = useContext(Context)
  return (
    <Fragment >
      <Header/>
      <Routes>
        <Route path='/login' element={ctx.isLogin ? <Welcome/> : <AuthForm/>}/>
        <Route path='/' element={ctx.isLogin ? <Welcome/> : <AuthForm/>}/>
      </Routes>
      
    </Fragment>
  );
}

export default App;
