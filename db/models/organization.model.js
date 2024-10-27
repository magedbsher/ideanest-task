import mongoose from "mongoose";

const schema = new mongoose.Schema({ 
name:{
    type: String,
    required:true,
    minLength:[3,"title is too short"],
    trim:true,
    unique:true
},
description:{
    type: String,
    required:true,
    minLength:[3,"description is too short"],
    trim:true,
}
}, {
    timestamps:true
})




const organizationModel =  mongoose.model("Organization" , schema)


export default organizationModel