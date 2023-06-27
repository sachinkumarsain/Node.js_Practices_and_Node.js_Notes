import http from "http"
const server = http.createServer((request, response) => {
    console.log("Connection Established")

    response.writeHead(200, { "Content-type": "text/html" })
    response.end("<h1>Wellcome to server programing</h1>")
    if (request.method === "POST") {
        let body = ""   

        request.on("data", (data) => {
            body += data.toString()
            response.end(body);
            console.log(body)
        })
    }
})
server.listen(3000, () => {
    console.log("Server has started")
})
