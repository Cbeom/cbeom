import express from "express";
import multer from "multer";
const upload=multer({dest:"uploads/"});
import {
  getUpload,
  postUpload,
  see,
  getEdit,
  postEdit,
  deleteNotice,
  getReport,
  postReport,
} from "../controllers/noticeController";
const noticeRouter = express.Router();

noticeRouter.route("/upload").get(getUpload).post(upload.single("avatar"),postUpload);
noticeRouter.get("/:id([a-z\\d+]{24})", see);
noticeRouter.route("/:id([a-z\\d+]{24})/edit").get(getEdit).post(postEdit);
noticeRouter.get("/:id([a-z\\d+]{24})/delete", deleteNotice);
noticeRouter.route("/:id([a-z\\d+]{24})/report").get(getReport).post(postReport);

export default noticeRouter;