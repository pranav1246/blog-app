
import User from "../model/user.js";
import jwt from "jsonwebtoken"
import Token from '../model/token.js';
export const signupUser=async (req,res)=>{
     try{
          const user=req.body;

          const newUser= new User(user);
          await newUser.save();
          return res.status(200).json({msg:'signup successfull'})

     }catch(error){
        return res.status(500).json({msg:'Error while signup'})
     }

}

export const loginUser=async(req,res)=>{
     let user=await User.findOne({username:req.body.username});
     if(!user){
          return res.status(400).json({msg:"user name does not macth"})

     }
     try{
     if(user.password===req.body.password){
    const accessToken=jwt.sign(user.toJSON(),'and1sa655tndsdmand',{expiresIn:'15m'})
    const refreshToken=jwt.sign(user.toJSON(),'naullofnoew4trtw34' )
      
    const newToken=new Token({token:refreshToken})
    await newToken.save();

    return res.status(200).json({accessToken:accessToken,refreshToken:refreshToken,name:user.name,username:user.username})

     }else{
         return  res.status(400).json({msg:'Password does not match'})
     }
}catch(error){
     return res.status(500).json({msg:'error while login user'})
}
     
}