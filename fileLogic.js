// const http = require("http");
const fs = require("fs");

async function getAllUsers() {
  const users = fs.readFileSync("./data/users.json", "utf-8");
  return users;
}
function saveFile(file){
  fs.writeFileSync('./upload/'+file.originalname,file.buffer);
}
async function createFile({ fileName }) {//we added here try catch since the function is void: we don't know if it was created or not...
  try{
   fs.createWriteStream(`./${fileName}.txt`);
   console.log(`Created ${fileName}.txt`);
   return true;
  }
  catch(err){

  }
}

async function appendFile(fileName, content) {
    try{
   fs.appendFileSync(fileName, content);
    }
    catch(err){
        console.log("error ",err);
    }
}

async function readFile({fileName}){
    console.log(fileName);
    const data = fs.readFileSync(`./${fileName}.txt`, "utf-8");
    console.log("data: ",data);
  return data;
}
async function deleteFile({fileName}){
  if(!isExists(fileName)) throw{code:475, message: "File does not exist"};
  console.log("valid delete file logic")
  const data=fs.unlinkSync(`./${fileName}.txt`);
  console.log("data: ",data);
}


function isExists(fileName){
  return fs.existsSync('./data/'+fileName);
}

function isValidName(fileName=""){
 return ["/","\\",":","*","<",">",'"',"|"].find(char=>fileName.includes(char))?false:true;
}
function isValidExtension(fileName){
  // let splited=fileName.split(".")
  // let ext=splited[splited.length-1];

  let ext=fileName.slice(fileName.lastIndexOf("."));
  return ["pdf","pdf","png","jpg","html","css",'jsx',"ts"].find(char=>ext==char)?true:false;
 }

 function isValid(req, res, next){//middleware
  const fileName=req.body;
  const sol= isValidExtension(fileName) && isValidName(fileName);
  if(sol){
    next();
  }else{
    res.status(450).json("blablabal")
  }
 }
module.exports = { getAllUsers, createFile, deleteFile, appendFile,readFile , isValid, saveFile};


// const fs = require('fs');
// const http = require("http");

// async function saveFaile (file){
//     fs.writeFileSync('',file.buffer)

// }
// async function getUsers (){
//     //read from file data/user.json
//     const res = fs.readFileSync('./data/users.json','utf8')
//     return res;

// }

// async function createFile( fileName,content) {
//   return fs.createWriteStream(`./${fileName}.txt`);
// }

// async function updateFile(fileName, content) {
//     try{
        
//     }
//     catch(err){
//         console.log("error ",err);
//     }
// }

// async function appendFile(fileName, data) {
//     try{
//     console.log("append logic:  fileName ",fileName, "data ", data);
//    fs.appendFileSync(fileName, data);
//     }
//     catch(err){
//         console.log("error ",err);
//     }
// }

// async function readFile({fileName}){
//     console.log(fileName);
//     const data = fs.readFileSync(`./${fileName}.txt`, "utf-8");
//     console.log("data: ",data);
//   return data;
// }
// async function deleteFile({fileName}){
//     if(!isExist(filename)) throw {code : 475, message: "is not exits"}
//     fs.unlinkSync("./data/" + filename);
//     // const data=fs.unlinkSync(`./${fileName}.txt`);
//     // console.log("data: ",data);
// }
// async function isValide(res,req,next){
//     const {fileName}= req.body;
//     if( isValidName(filename) && isValidExtantions(filename))next()

//     res.status(450).json("bla bla")
// }

// async function isExist(filename){
//    return fs.existsSync('.data/'+filename);
// }

// async function isValidName(filename){
//    return ["/","\\","*",":","|","?","<",">",'"'].find(char=>filename.includes(char))? false: true;
//  }

//  async function isValidExtantions(filename){
//     let ext = filename.slice(filename.lastIndexOf("."))
//     return ["pdf","txt","png","jpg"].find(char=>ext == char)? true: false;
//   }

// module.exports = {getUsers,createFile,appendFile,readFile,deleteFile,isValide};

// fs.readFileSync()
// fs.unlinkSync() //remove

// exports.getUsers()






