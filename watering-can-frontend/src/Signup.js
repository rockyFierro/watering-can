


<form action="" style="border:1px solid #ccc">
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
<input type="tel" id="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>

    <label>
      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"/> Remember my account
    </label>

    <p>By creating an account you agree to our <a href="#" style="color:green">Terms & Privacy</a>.</p>

    <div class="clearfix">
      <button type="button" class="cancelbtn">Cancel</button>
      <button type="submit" class="signupbtn">Sign Up</button>
    </div>
  </div>
</form>
