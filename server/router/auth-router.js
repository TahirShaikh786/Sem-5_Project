const express = require("express");
const router = express.Router();
const controllers = require("../controllers/auth-controller");

const {signupSchema, loginSchema} = require("../validators/auth-validator");
const validate = require("../middleware/validate-middleware");

const authMiddleware = require("../middleware/auth-midddleware");

router.route("/").get(controllers.home);
router.route("/register").post(validate(signupSchema), controllers.register);
router.route("/login").post(validate(loginSchema), controllers.login);

router.route('/user').get(authMiddleware, controllers.user);

module.exports = router;
