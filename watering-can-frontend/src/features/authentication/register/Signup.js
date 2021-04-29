import React, {useState} from 'react';
import {Box, TextField, Button} from '@material-ui/core';
import './Signup.css';

export const Signup = (props) => {
    const [changes, setChanges] = useState()

    const handleChanges = ev => {

    }
    return (
        <Box>
            <form className="signup-form">
                <TextField  id="standard-basic" margin="normal" value="username"/>
                <TextField  id="standard-basic" margin="normal" value="password"/>
                <TextField  id="standard-basic" margin="normal" value="phone number"/>
                <Button color="secondary" variant="contained" disabledElevation>Create User</Button>
            </form>
        </Box>
    )
}