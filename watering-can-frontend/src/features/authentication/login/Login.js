import React, { useState } from 'react'
import {TextField, Button} from '@material-ui/core';

export const Login = (props) => {
  const [changes, setChanges] = useState({
    name: '', password: ''
  })

  const handleChanges = (ev) => {
    ev.preventDefault()
    setChanges({
      ...changes,
      [ev.target.name]: ev.target.value
    })
  }

  return (
    <form>
        <TextField id="standard-outlined" label="name" size="small">
          <input type="text"
            name="name"
            onChange={handleChanges}
            value={changes.name}
            placeholder="username"
          />
        </TextField>
        <TextField id="standard-outlined" label="password" size="small">
          <input type="text"
            name="password"
            value={changes.password}
            onChange={handleChanges}
            placeholder="password"
          />
        </TextField>
          <Button color="primary" variant="contained">login</Button>
    </form>
  )
}