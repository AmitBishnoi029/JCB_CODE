import Auth from "../Modals/auth.js";
import bcrypt from "bcrypt"

export const Register = async(req,resp)=>{
   try {
    
    const {name , email , password , contact} = req.body
    const existUser = await Auth.findOne({email})
    if(existUser){
        resp.status(401).send({success:false,message:"Email already exist"})
    } else {

        const salt = 10;
        const hashedPassword = await bcrypt.hash(password,salt);
        const user = new Auth({name,email,password:hashedPassword,contact});
        await user.save();
    
        resp.status(200).send({success:true,user,message:"Data saved successfuly"})
    }

    // const {id} = req.params

   } catch (error) {
    console.log("Error occures in Register",error);
   }
}
export const login = async(req,resp)=>{
    try {
        const {email,password} = req.body;
        const user = await auth.find({email:email});
        const oldpassword = user.passsword
        if(password === oldpassword )
        if(user){

        }
    } catch (error) {
        console.log("Error occures in login",error);  
    }
}
