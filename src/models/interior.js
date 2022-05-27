import mongoose from "mongoose";

const interiorSchema=new mongoose.Schema({
    xposition:{type:Number,default:0},//x위치
    yposition:{type:Number,default:0},//y위치
    paints:[{
        plat:{type:Number},
        plon:{type:Number},
        pimage:{type:String},
    }],//그림
    resulturl:{type:String,trim:true},//완성 url
    fplan:{type:String},//도면
    fplanexists:{type:Boolean,default:false},//도면유무
    address:{type:String,trim:true},//도로명 주소
    lat:{type:Number},//위도
    lon:{type:Number},//경도
    color:{type:String},//색깔
});

const Interior=mongoose.model('Interior',interiorSchema);

export default Interior;