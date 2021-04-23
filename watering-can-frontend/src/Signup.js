import React, { useState } from 'react'
import * as yup from 'yup';
import styled from 'styled-components'
//Login page can be put into the navbar if we agree to that.


const initialValues = {
  name: '',
  email:'',
  phone:'',
};


const valueErrors = {
  name: '',
  email:'',
  phone:'',
};

//state and schema stuff


const formSchema = yup.object().shape({
  name: yup.string().required('Please enter your name').min(5, 'Name must be at least 5 characters long'),
  email: yup.string().required('Must be a valid email'),
  phone: yup.string().required('Must be a valid phone number'),
});


const [signUpValues, setSignUpValues]=useState(initialValues)
const [signUpErrors, setOrderErrors]=useState(valueErrors);









//main form area 
<form action="" >
  <div class="container">
    <h1>Sign Up</h1>
    <p>Please fill in to create an account.</p>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>

<label for="phone-num"><b>Phone Number</b></label>
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
      
      <button type="submit" 
      class="signupbtn">Sign Up</button>
    </div>
  </div>
</form>


//const FormStyle = styled.div ``
//styling can be figured out last.