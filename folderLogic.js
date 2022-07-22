const fs = require("fs");


async function createFolder(folderPath){
    console.log(folderPath)
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, {
            recursive: true
        });
    }
    return true;
}

module.exports = {createFolder};