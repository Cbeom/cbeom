'use strict';

import express from "express";
import {
    home,
    search,
    postCreate,
    getCreate,
    getEdit,
    postEdit,
    see,
    hdelete
 } from "../controllers/control"; //control.js에서 import

const router=express.Router();

//요청을 받아서 home pug출력
router.get('/', home);
router.get("/search", search);


router.route("/create").get(getCreate).post(postCreate);
router.get("/:id([a-z\\d+]{24})", see);
router.route("/:id([a-z\\d+]{24})/edit").get(getEdit).post(postEdit);
router.get("/:id([a-z\\d+]{24})/delete", hdelete);

export default router;