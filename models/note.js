import mongoose from "mongoose";

const noteSchema=new mongoose.Schema({
    title:{type:String},
    content:{type:String},
    meta:{
        rating:{type:Number,default:0},
        view:{type:Number,default:0},
    }
});

const Note=mongoose.model('Note',noteSchema);

export default Note;