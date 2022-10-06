const express = require('express')
const router = express.Router();
const app= express()

// app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const UserSchema = require('../model/userModel')

module.exports = { router, UserSchema }