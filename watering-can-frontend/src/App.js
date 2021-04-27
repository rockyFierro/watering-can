import './App.css';
import { useEffect } from 'react';
import { fetchAPI } from './features/authentication/fetchAPI';

// import axios from 'axios';


function App() {

  //mock endpoints
  const register = '/api/auth/register'
  const login = '/api/auth/login'

  useEffect(() => {
    fetchAPI()
  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
