import mongoose from "mongoose"


const Connection=async(URL) =>{
   
    try{
       await  mongoose.connect(URL)
       console.log("Database connected ");
       
    }catch(error){
    console.log("error ",error);
    
    }
}
export default Connection
