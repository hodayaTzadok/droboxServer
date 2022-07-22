const express = require('express');
router=express.Router();
const fileLogic = require('./fileLogic');
const multer=require('multer'),upload=multer();


router.get('/users', fileLogic.isValid, async (req, res) => {
    try {
        const users = await fileLogic.getAllUsers();
        res.send(users);
    }
    catch (err) {
      res.send(err)
    }
  })

router.put('/append', async(req, res) => {
   console.log("append-route", req.body);
  try{
    fileLogic.appendFile(req.body.fileName, req.body.data);
res.status(200).send("ok");
 }
  catch(err){
    res.status(500).send(err);
  }
})


router.post('/create/:fileName', async (req, res) => {
  try{
console.log("create a new file -route ",req.params.fileName);

const f=await fileLogic.createFile(req.params);
res.send(f);
  }
  catch(err){
    res.send(err);
  }
})

router.get('/read/:fileName', async (req, res) => {
  try{
console.log("read file-route ",req.params.fileName);

const f=await fileLogic.readFile(req.params);
res.send(f);
  }
  catch(err){
    res.send(err);
  }
})

router.delete('/delete/:fileName', async (req, res) => {
  console.log("delete-route", req.params);
 try{
   fileLogic.deleteFile(req.params);
res.status(200).send("ok");
}
 catch(err){
   res.status(500).send(err);
 }
})

router.post('/upload', upload.single('MyFile'), async (req, res) => {
  try{
  fileLogic.saveFile(req.file);
  console.log(req.file.buffer);
  res.send("ok");
  }
  catch(err){
    res.status(505).send(err);
  }
})

module.exports=router;



// const express = require('express');
// const router = express.Router();
// const multer = require('multer'),
// upload = multer();
// const userLogic = require('./fileLogic')

// router.get('/users', async (req,res)=>{
//     try {
       
//         res.status(await userLogic.getUsers())
        
//     } catch (err) {
      
//     }
// })

// router.put('/append', async(req, res) => {
//    console.log("append-route", req.body);
//   try{
//     userLogic.appendFile(req.body.fileName, req.body.data);
// res.status(200).send("ok");
//  }
//   catch(err){
//     res.status(500).send(err);
//   }
// })

// router.post('/create/:fileName', async (req, res) => {
//   try{
// console.log("create a new file -route ",req.params.fileName);

// const f=await userLogic.createFile(req.params);
// res.send(f);
//   }
//   catch(err){
//     res.send(err);
//   }
// })

// router.delete('/delete/:fileName', async (req, res) => {
//   console.log("delete-route", req.params);
//  try{
//    userLogic.deleteFile(req.params);
// res.status(200).send("ok");
// }
//  catch(err){
//    res.status(500).send(err);
//  }
// })

// router.post('/upload',upload.single('MyFile'), async (req, res) => {
    
//     try{
//         userLogic.saveFaile();
//         console.log(req.body);
//     res.send('ok');}
//     catch{
//         res.status(400).json("error")
//     }
// })

// module.exports = router








// router.get('/read/:fileName', async (req, res) => {
//   try{
// console.log("read file-route ",req.params.fileName);

// const f=await userLogic.readFile(req.params);
// res.send(f);
//   }
//   catch(err){
//     res.send(err);
//   }
// })

