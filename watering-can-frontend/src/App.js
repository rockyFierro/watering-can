import './App.css';
import { useEffect } from 'react';
import { fetchAPI } from './features/authentication/util/fetchAPI';
import { Login } from './features/authentication/login/Login.js'
// import axios from 'axios';


function App() {

  //mock endpoints
  const register = '/api/auth/register'
  const login = '/api/auth/login'

  useEffect(() => {
    fetchAPI(login)
  }, [])

  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
