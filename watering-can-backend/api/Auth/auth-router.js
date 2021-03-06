const route = require("express").Router();
const bcrypt = require("bcryptjs");
const users = require("../Users/users-model");

route.post("/register", async (req, res, next) => {
  console.log('inside of /register')
  try {
    console.log('inside of try')
    
    const newUser = req.body;
    const hash = bcrypt.hashSync(newUser.password, 10);
    newUser.password = hash;
    
    const added = await users.add(newUser);
    
    if (added) {
      res
      .status(201)
      .json({ message: "user successfully create", user: added });
    } else {
      res.status(400).json({ message: "failed to create new User" });
    }
  } catch (err) {
    console.log('catch')
    res.status(500).json({message: 'something is UP'})
    // next(err); //!
  }
});

route.post("/login", async (req, res, next) => {
  console.log(req.body)
  try {
    let { username, password } = req.body;
    const user = await users.findByUsername(username).first();
    
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({ message: `Welcome ${username}` });
    } else {
      res.status(400).json({ message: "invalid" });
    }
  } catch (error) {
    res.status(500).json({message: 'something is UP'})
    console.log("catch of /login in users-model.js", error);
  }
});

module.exports = route;
