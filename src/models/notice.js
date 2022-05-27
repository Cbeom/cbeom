import mongoose from "mongoose";

const noticeSchema=new mongoose.Schema({
    title: { type: String,trim: true, maxlength: 20 },
    description: { type: String, trim: true },
    createAt: { type: Date, default:Date.now, trim: true },
    image:{type:String},
    meta: {
        rating: { type: Number, default: 0 },
        views: { type: Number, default: 0 },
    },
    //신고 스키마
    report:{
        rtile:{type:String, trim:true},
        rcontent:{type:String,trim:true},
        rcount:{type:Number,default:0},
    },
    //댓글 스키마
    comment:[{
        parentid:{type:String},
        parentcomment:{type:String,trim:true},
        childid:[{type:String}],
        childcomment:[{type:String,trim:true,maxlength:200}],
    }],
    
});

const Notice=mongoose.model('Notice',noticeSchema);

export default Notice;