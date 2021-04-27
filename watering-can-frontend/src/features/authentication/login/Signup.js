import React, { useState } from 'react'
import * as yup from 'yup';
import styled from 'styled-components'
//Login page can be put into the navbar if we agree to that.


const initialValues = {
  name: '',
  email:'',
  phone:'',
  //phone:[0], instead of a string it can be a number
  password:'',
};


const valueErrors = {
  name: '',
  email:'',
  phone:'',
  password:'',
};

//state and schema stuff


const formSchema = yup.object().shape({
  name: yup.string().required('Please enter your name').min(5, 'Name must be at least 5 characters long'),
  email: yup.string().required('Must be a valid email'),
  phone: yup.string().required('Must be a valid phone number'),
  password: yup.string().required('Please enter a valid password').min(6, 'Password must be atleast 6 characters long'),
});


const [signUpValues, setSignUpValues]=useState(initialValues);
const [signUpErrors, setSignUpErrors]=useState(valueErrors);
const [newUser, setNewUser]=useState(initialValues);

const postNewUser = (newUser) => {
  axios
  .post('https://water-my-plants-node.herokuapp.com/api/auth/register', newUser)
  .then((res) => {
  setNewUser(newUser)
  })
  .catch((err) => {
    console.log(err);
  });
}
const onSubmit = (e) => {
  e.preventDefault();
 postNewUser(signUpValues)



 const inputChange = (name, value) =>{
  yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
  setSignUpErrors({
          ...signUpErrors,
          [name]: "",
})})
        .catch((err) => {
  setSignUpErrors({
            ...signUpErrors,
            [name]: err.errors[0],
})});
  setSignUpValues({
      ...signUpValues,
      [name]: value, 
});

const onChange = (e) => {
  const { name, value, type, checked } = e.target;
  const valueToUse = type === "checkbox" ? checked : value;
  inputChange(name, valueToUse);
};};

};





//main form area 
return (<form onSubmit={onSubmit}>
  <div class="container">
    <h1>Sign Up</h1>
    <p>Please fill in to create an account.</p>

    <label for="email"><b>{signUpValues.email}</b></label>
    
    <input type="text" 
    placeholder="Enter Email" 
    name="email" required
    />

    <label for="psw"><b>{signUpValues.password}</b></label>
    
    <input type="password"
     placeholder="Enter Password" 
    name="psw" required/>

    <label for="psw-repeat"><b>{signUpValues.password}</b></label>
    
    <input 
    
    type="password" 
    placeholder="Repeat Password" 
    name="psw-repeat" required/>

<label for="phone-num"><b>{signUpValues.phone}</b></label>

<input type="tel" 
id="phone" 
pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>

    <label>
      <input type="checkbox" 
      checked="checked" 
      name="remember" 
      /> Remember my account
    </label>

    <p>By creating an account you agree to our <a href="#" style="color:green">Terms & Privacy</a>.</p>

    <div>
      <button type="button" 
      class="cancelbtn">Cancel</button>
      
      <button onClick={(evt)=> evt.preventDefault} type="submit" 
      class="signupbtn">Sign Up</button>
    </div>
  </div>
</form>)


//const FormStyle = styled.div ``
//styling can be figured out last.