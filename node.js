
//=== this will READ the string from the file==================================================================

const fs=require("fs");

fs.readFile("./message.txt",'utf8',(err,data) => {
    if (err) throw err;
    console.log(data);
  }); 


//=== this will SAVE the file====================================================================================
const fs=require("fs");
  fs.writeFile("message.txt", "Hello from NodeJS", (err)=>{
    if (err) throw err;
  console.log('The file has been saved!');
}); 
