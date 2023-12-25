import {Router} from "express";
import {createUser} from "../controller/userController"
import validator from "../utils/validator";
import { registerValidator } from "../utils/userValidator";

const router: Router = Router();
router.route("/register-user").post(validator(registerValidator), createUser)


export default router;