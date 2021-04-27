import React, { useState } from 'react'

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
      <fieldset>
        <label htmlFor="name">
          <input type="text"
            name="name"
            onChange={handleChanges}
            value={changes.name}
            placeholder="username"
          />
        </label>
        <label htmlFor="password">
          <input type="text"
            name="password"
            value={changes.password}
            onChange={handleChanges}
            placeholder="password"
          />
        </label>
      </fieldset>
    </form>
  )
}