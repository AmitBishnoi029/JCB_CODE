import express from "express";
import { connect } from "./Database/db.js";
import authRouter from "./Routes/auth.js";

const app = express()
app.use(express.json())

//defining router
app.use("/auth",authRouter)

// CALL DATABASE FUNCTION
connect();
const PORT = "8080";
app.listen(()=>{
    console.log(`server running on PORT ${PORT}`);
})