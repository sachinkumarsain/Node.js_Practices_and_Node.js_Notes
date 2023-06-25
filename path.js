
// console.log(path)

// function promiseMe (time,data){
//     return new Promise((resolve,reject)=>{
//           setTimeout(()=>{
//             return  resolve(data)
//           },time)
//     })
// }
// function callBackfirst (time,){

// }
// console.log(await promiseMe(1000,"ram ka name"))
import path from "path";
 // sir Hamne phle path import kiya
const obj = {
  root: "C:\\",
  dir: "C:\\xampp\\htdocs\\NODE",
  base: "node",
  ext: "",
  name: "node",
};
// ek obj name ke object ki sbhi ki value put ki
 const formatPath= path.format(obj)
 // fir mene path.format type use me liya or usme obj object pas kiya 
 // or use ek varible formatPath me dal diya

 console.log(formatPath)
 //and last me hamne use console me pas kerke teminal me output dekh liya