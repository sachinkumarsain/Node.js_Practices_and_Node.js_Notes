import { resolve } from "dns"
import http, { request } from "http"
let names = [
    { "id": 1, "name": "Sachin" },
    { "id": 2, "name": "nikky" },
    { "id": 3, "name": "mahi" }
]
const server = http.createServer((request, response) => {
    if (request.method === "GET") {
        response.writeHead(200, { "Content-Type": "application/json" })
        response.end(JSON.stringify(names))
    }
    else if (request.method === "POST") {
        let body = ""
        request.on("data", (data) => {
            body += data.toString()
        })
        request.on("end", () => {
            response.writeHead(200, { "Content-Type": "application/json" })
            names.push(JSON.parse(body))
            response.end(JSON.stringify(names))
        })
    }
    else if (request.method === "DELETE") {
        let idFromURL = Number(request.url.split("/")[1])
        names = names.filter((car) => { return car.id !== idFromURL })
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(names));
    }
    else if (request.method === "PUT") {
        let body = ''
        request.on("data", (data) => {
            body += data
        })
        request.on("end", () => {
            let idFromURL = Number(request.url.split("/")[1])
            names[idFromURL] = JSON.parse(body)
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify(names));
        })
    }
})
server.listen(3000,() => {
    console.log("Server has stared on port 8080")
})