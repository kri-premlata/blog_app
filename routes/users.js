var express = require('express');
var router = express.Router();

const passport = require("passport");
const LocalStategy = require("passport-local");
const userSchema = require("../models/userModel");

passport.use(new LocalStategy(userSchema.authenticate()));



module.exports = router;
