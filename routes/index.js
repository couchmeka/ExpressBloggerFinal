var express = require('express');
var router = express.Router();

const Blog = require('./model/Blogs');

/* GET home page. */
router.get('/', async function(req, res) {

  try{
const allBlogs = await Blog.find({});
res.json({blogs: allBlogs});

  } catch(e){

console.log(e);

  }
  
});

router.post("/create-one", async (req, res) =>{


})

module.exports = router;
