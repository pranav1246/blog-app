import mongoose from "mongoose"


const Connection=async(username,password) =>{
    const URL=`mongodb+srv://${username}:${password}@cluster0.xvgosz2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    try{
       await  mongoose.connect(URL)
       console.log("Database connected ");
       
    }catch(error){
    console.log("error ",error);
    
    }
}
export default Connection
