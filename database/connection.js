require('dotenv').config()
const mongoose = require('mongoose');

const AtlasURl = process.env.DATABASE;

mongoose.connect(AtlasURl,{
        useNewUrlParser: true,
        useUnifiedTopology:true,
        // useCreateIndex: true,
        // useFindAndModify: false
}).then(()=>
{
    console.log("DataBase---->connected");
}).catch(()=>
{
    console.log("No-----/----->Connection")
})