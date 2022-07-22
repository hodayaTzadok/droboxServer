const express=require("express"),
app=express();

const multer=require('multer');
upload=multer({dest:'./upload/'});

 const router=require('./fileRouter');

app.use(express.json()) 
// app.use(require('cors')())


app.use("/api", router); //IS EQUIVALENT TO app.use("/api", require('./Routes'));

app.listen(process.env.PORT||3500,()=>{console.log("server up :port 3500");});







// const express = require('express');
// const app = express();
// const multer = require('multer');
// const upload = multer({dest:'./upload/'});

// app.use(express.json());
// app.use('/',require('./fileRouter'))

// app.listen(process.env.PORT || 3500, ()=>{console.log(("Server Up: port 3500"));})

