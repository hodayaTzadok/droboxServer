const express = require('express');
router=express.Router();
const folderLogic = require('./folderLogic');
const multer=require('multer'),upload=multer();

router.post('/create/:folderName', async (req, res) => {
    try{
  console.log("create a new folder -route ",req.params.folderPath);
  
  const f=await folderLogic.createFolder(req.params);
  res.send(f);
    }
    catch(err){
      res.send(err);
    }
  })

  module.exports= router;