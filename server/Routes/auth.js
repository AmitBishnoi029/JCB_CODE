import express  from "express";
import { Register, login } from "../controller/auth.js";

const router = express.Router()

router.route("/register").post(Register);
router.route("/login").post(login);

export default router
