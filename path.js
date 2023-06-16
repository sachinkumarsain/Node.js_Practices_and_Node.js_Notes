import path, { resolve } from "path";
// console.log(path)

function promiseMe (time,data){
    return new Promise((resolve,reject)=>{
          setTimeout(()=>{
            return  resolve(data)
          },time)
    })
}
function callBackfirst (time,){

}
console.log(await promiseMe(1000,"ram ka name"))