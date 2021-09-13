const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const app = express(); 
const port = process.env.PORT || 3001;
const Blogs = require('./database/blogShema');
const bodyParser = require('body-parser');


app.use(cors());
  app.use(bodyParser.json({limit:'50mb'}));
  app.use(bodyParser.urlencoded({
    extended: true
  }));

require('./database/connection');

app.get('/upload-blogs', (req,res)=>
{
    Blogs.find().then((data)=>
    {
        res.send(data)
    })
})

app.post('/upload-blogs', async(req,res)=>
{
    try {
        const imageData  = req.body.image;
        
        const blogsItems = new Blogs({
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            mdesc: req.body.mdesc,
            desc: req.body.desc
        })
        blogsItems.image.data = imageData;
        await blogsItems.save();
        
    } catch (error) {
        console.log(error.message);
    }
})

if(process.env.NODE_ENV == "production"){
    app.use(express.static('react-blog/build'))
}

app.listen(port, () =>{
    console.log(`Server is running at port no ${port}`)
})
