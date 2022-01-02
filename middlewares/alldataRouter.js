const express = require('express')
const router = express.Router();
router.use(express.json())
router.use(express.urlencoded({ extended: true }))
const UserSchema = require('../model/userModel')
    
module.exports = { router, UserSchema }