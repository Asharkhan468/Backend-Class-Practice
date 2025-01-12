import mongoose from "mongoose";


const postSchema = new mongoose.Schema([
    {
        title:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        },
        like:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            default:0


        }],
        comment:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment",
            
        }],
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        }


    },
    {
        timestamps: true
    }
])