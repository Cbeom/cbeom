'use strict';

//db.js 임포트
import "./db";
import "./models/note";
//모듈
import express from "express";
// import { route } from "express/lib/application";
import morgan from "morgan";
//라우터
import router from "./Routers/router";

const app=express(); //express
const logger=morgan('dev'); //morgan
const port=3000;//포트번호

// 앱 세팅
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine','pug');
app.set('views',process.cwd()+'/views');
app.use(logger);

// import를 받은 router를 
app.use('/',router); // use=>미들웨어를 등록해주는 메서드.

//서버 응답
app.listen(port, ()=>{console.log(`http://localhost:${port}`)});