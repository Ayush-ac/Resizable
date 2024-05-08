// const { Create } = require( '../controller/UserController');

const express = require ('express');
const User = require('../Models/User');
const app = express();
const router = express.Router();

router.post('/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
});


module.exports = router;