const express = require("express");
const LoginController = require("../controllers/LoginController");
const jwt = require("jsonwebtoken");
require('dotenv').config();


const LoginRotas = express.Router();


LoginRotas.post('/login', LoginController);
    
module.exports = LoginRotas;