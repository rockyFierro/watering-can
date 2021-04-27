import './App.css';
import { useEffect } from 'react';
import { fetchAPI } from './features/authentication/useFetch';
// import axios from 'axios';


function App() {

  useEffect(() => {
    fetchAPI()
  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
