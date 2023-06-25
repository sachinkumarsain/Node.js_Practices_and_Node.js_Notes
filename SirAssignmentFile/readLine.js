console.log("hello")
import readline from "readline"
const question1 = readline.createInterface(process.stdin, process.stdout);
question1.question("write number : ", (item) => {
    let number = item.split("  ")
    let squ = number.map((num) => num * num)
    question1.write("square : "+squ.join(" "))
    question1.close()
  
})
