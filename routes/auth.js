const express = require("express");
const { signup, signin, signout, forgotPassword, resetPassword, socialLogin }= require("../controllers/auth");
const { userSignupValidator, userSigninValidator, passwordResetValidator } = require("../validator");
const { userById } = require("../controllers/user");

const router = express.Router();

router.post("/signup", userSignupValidator, signup);
router.post("/signin", userSigninValidator, signin);

router.put("/forgot-password", forgotPassword);
router.put("/reset-password", passwordResetValidator, resetPassword);

router.post("/social-login", socialLogin);
//signout 
router.get("/signout", signout);

//any route containing: userId, our app will first execute userByID()
router.param("userId", userById);

module.exports = router;