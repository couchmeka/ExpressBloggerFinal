const Blog = require('../model/Blogs');

async function getAllBlogs(req, res) {

    //query blogs 
    try {
      const allBlogs = await Blog.find({});
      res.json({blogs: allBlogs });
    }catch(e){
      console.log(e);
    }
}

async function createOneBlog(req, res, next) {
    try {
      //parse out fields from POST request
      const title  = req.body.title 
      const text = req.body.text 
      const author = req.body.author
      const categories = req.body.category
      const year =  req.body.year;
  
      //pass fields to new Blog model 
      //notice how it's way more organized and does the type checking for us
      const newBlog = new Blog({
          title,
          text,
          author,
          categories,
          year
      });
  
      //save our new entry to the database 
      const savedData =  await newBlog.save();
      
      //return the successful request to the user 
      res.json({
          success: true,
          blogs: savedData
      });
  
    } catch (e) {
      console.log(typeof e);
      console.log(e);
      res.json({
        error: e.toString(),
      });
    }
  }


  //getOneBlog
  async function getOneBlog(req, res) {

    //query blogs 
    try {
      const allBlogs = await Blog.find({id: req.params.id});
      res.json({blogs: allBlogs });
    }catch(e){
      console.log(e);
    }
}

async function getOneBlogTitle(req, res) {

    //query blogs 
    try {
      const allBlogs = await Blog.find({title: req.params.title});
      res.json({blogs: allBlogs });
    }catch(e){
      console.log(e);
    }
}
module.exports = {
    getAllBlogs,
    createOneBlog,
    getOneBlog,
    getOneBlogTitle
};