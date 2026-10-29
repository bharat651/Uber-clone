const express = require('express');
const router = express.Router();
const{body} = require("express-validator");
const userController = require("../controller/user.controller");
const authMiddleware = require("../midileware/auth.midileware");

router.post("/register",[
    body("email").isEmail().withMessage("INVALID email"),
    body('fullName.firstName').isLength({ min: 3}).withMessage("First name is required"),
    body("password").isLength({min:6}).withMessage("Password must be at least 6 characters")
],
    userController.registerUser
)

router.post("/login",[
    body("email").isEmail().withMessage("INVALID email"),
    body("password").isLength({min:6}).withMessage("Password is required"),
],
    userController.loginUser
    )
router.get('/profile',authMiddleware.authUser,userController.getUserprofile)


module.exports = router;