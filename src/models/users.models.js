import mongoose from "mongoose";


const postSchema = new mongoose.Schema([
    {
        username:{
            type:String,
            required:true
        },
        email:{
            type:true,
            unique:true,
            required:true
        },
        password:{
            type:String,
            required:true
        }

    },
    {
        timestamps: true
    }
])


export default mongoose.model("User", postSchema);