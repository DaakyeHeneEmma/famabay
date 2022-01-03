const express = require('express')
const router = express.Router();
const cors = require('cors')
const app = express()

app.use(cors());
const corsOptions = {
    origin: 'http://famabay.com',
    optionsSuccessStatus: 200
  }

router.use(express.json())
router.use(express.urlencoded({ extended: true }))
const UserSchema = require('../model/userModel')
    
module.exports = { router,corsOptions, UserSchema }