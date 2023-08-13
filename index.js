
import fs from "fs"
// import serverCURED rom "./httpsServer/serverCURED"

// import {sum} from "./callBack.js"
//   console.log(sum(process.argv[2],process.argv[3],process.argv[4]))



// fs.writeFile("text.txt.1", "my name is uska bhai", (err) => {
//     if (err){ console.log(ram)}
// })
fs.readFile("text.txt.1",(err,data)=>{  
    if(err)console.log("sita")  
    else{
        console.log(data.toString())
    } 
})
  

// fs.appendFile("text.txt","ram ka nam" ,(err)=>{
//     if(err)console.log(err)    
// })

// fs.readdir("./",{encoding:"utf-8"},(err,data)=>{
//     if(err) console.log(err)
//     else{
//         console.log(data)
//     }
// })
