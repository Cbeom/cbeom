'use strict';

import Note from "../models/note";

// let notes=[
//     {
//         id:1,
//         title:'babo',
//         content:'babo king...',
//         meta: {
//             rating: 0,
//             view: 0,
//           },
//     },
//     {
//         id:2,
//         title:'mun chung',
//         content: 'mun chung king...',
//         meta: {
//             rating: 0,
//             view: 0,
//           },
//     },
//     {
//         id:3,
//         title:'kmm',
//         content: 'kmm king...',
//         meta: {
//             rating: 0,
//             view: 0,
//           },
//     },
// ];

export const home= async (req,res)=>{
  const note=await Note.find({});
  return res.render('home',{note}); //home.pug에 응답, notes를 보낸다.
};

export const search = (req, res) => {
  const {
    query: { title },
  } = req;
  return res.render("search");
};

export const getCreate = (req, res) => {
    return res.render("create");
  };
  
  export const postCreate = async (req, res) => {
    const {
      body: { title, content },
    } = req;
    await Note.create({
      title,
      content: content,
    });
      return res.redirect("/");
  };

export const see= async (req,res)=>{
    const {
        params: {id},
    }=req;
    try{
      const note=await Note.findById(id);
      await Note.findByIdAndUpdate(id,{
        meta:{
          view: note.meta.view+1,
        },
      });
      return res.render('see',{note});
    } catch(error){
      console.log(error);
    }
};



export const getEdit = async (req, res) => {
    const {
      params: { id },
    } = req;
    const note=await Note.findById(id);
    return res.render("edit",{note});
  };
  
  export const postEdit = async (req, res) => {
    const {
      body: { title, content },
      params: { id },
    } = req;
    const exists=await Note.exists({_id:id});
    if(!exists){
      return res.redirect('/');
    }
    await Note.findByIdAndUpdate(id,{
      title,
      content,
    });
    return res.redirect('/');
  };
  
  export const hdelete = async (req, res) => {
    const {
      params: { id },
    } = req;
    await Note.findByIdAndDelete(id);
    return res.redirect("/");
  };