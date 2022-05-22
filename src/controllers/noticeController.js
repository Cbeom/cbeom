import Notice from "../models/notice";

//globalRouter 
export const home= async (req,res)=>{
    const notice=await Notice.find().sort({"meta.views":"desc"});
    return res.render("home",{pageTitle:"Home",notice}); //home.pug에 응답, notice를 보낸다.
};
//검색기능
export const search= async (req,res)=>{
    const {
        query:{title},
    }=req;
    let notice=[];
    if(title){
        notice=await Notice.find({
            title:{
                $regex:new RegExp(title,"i")
            },
        })
    }
    return res.render("search",{pageTitle:"Search Title",notice});
};

//Notice Router
export const getUpload=async (req,res)=>{
    return res.render("upload",{pageTitle:'Upload Notice'});
};

export const postUpload=async (req,res)=>{
    const {
        body:{title,content},
        file,
    }=req;
    await Notice.create({
        title,
        description:content,
        image:file.path,
    });
    return res.redirect("/");
};

export const see=async (req,res)=>{
    const {
        params:{id},
    }=req;
    try{
        const notice=await Notice.findById(id);
        await Notice.findByIdAndUpdate(id,{
            meta:{
                views:notice.meta.views+1,
            },
        });
        return res.render("see",{pageTitle:`${notice.title}`,notice});
    } catch(error){
        console.log(error);
    }
};

export const getEdit=async (req,res)=>{
    const{
        params:{id},
    }=req;
    const notice=await Notice.findById(id);
    return res.render("edit", { pageTitle: `Edit : ${notice.title}`, notice });
}

export const postEdit=async (req,res)=>{
    const{
        body:{title,description,image},
        params:{id},
    }=req;
    const exists=await Notice.exists({_id:id});
    if(!exists){
        return res.redirect("/");
    }
    await Notice.findByIdAndUpdate(id,{
        title,
        description,
        image,
    });
    return res.redirect("/");
};

export const deleteNotice=async (req,res)=>{
    const{
        params:{id},
    }=req;
    await Notice.findByIdAndDelete(id);
    return res.redirect("/");
};

export const getReport=async(req,res)=>{
    return res.render("report",{pageTitle:"Report Notice"});
};

export const postReport=async(req,res)=>{
    const{
        params:{id},
    }=req;
    await Notice.create({
    });
    const notice=await Notice.findById(id);
    await Notice.findByIdAndUpdate(id,{
        
    });
    return res.render("report",{pageTitle:`${notice.title}`,notice}); 
};

