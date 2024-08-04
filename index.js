let fs = require('fs');
let path= require('path');
let dirPath=path.join(__dirname,'crud');
let filePath=`${dirPath}/myfile.text`;
// fs.writeFileSync(filePath,'simple file');                    //  readdir()  and readfile()

// fs.readFile(filePath,'utf8',(error,files)=>{
//    console.log(files)
// })


// fs.appendFile(filePath,"and file name is myfile.text",(err)=>{
//     if(!err) console.log(" file is updated successfully")
// })


// fs.rename(filePath,`${dirPath}/detailsFile.text`,(err)=>{
//     if(!err) console.log(" file is name updated successfully")  
// })

fs.unlinkSync(`${dirPath}/detailsFile.text`)