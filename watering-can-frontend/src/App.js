import './App.css';
import {useEffect} from 'react';
import {fetchAPI} from './features/authentication/util/fetchAPI';
import {Login} from './features/authentication/login/Login'
import {Signup} from './features/authentication/register/Signup'
import {Paper} from '@material-ui/core';


function App() {

    //mock endpoints
    const register = '/api/auth/register'
    const login = '/api/auth/login'

    useEffect(() => {
        fetchAPI(login)
    }, [])

    return (
        <div>
            <Paper elevation={15}>
                <header className="App-header">
                <span>
                    <h1>Watering Can</h1>
                    </span>
                    <span>
                <h3>Login: </h3>
                <Login/>
                </span>
                </header>
            </Paper>
            <Signup/>
        </div>
    );
}

export default App;
