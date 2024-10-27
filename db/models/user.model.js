import mongoose from "mongoose";

const schema = new mongoose.Schema({ 
name:{
    type: String,
    required:true,
    trim:true,
},
email:{
    type: String,
    required:true,
    unique:true
},
password:{
    type: String,
    required:true,
}
}, {
    timestamps:true
})




const userModel =  mongoose.model("User" , schema)


export default userModel