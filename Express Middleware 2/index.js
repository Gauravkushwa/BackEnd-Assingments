const http = require("http");
const fs = require("fs");
const POST = 8080;
const path = require("path");

let folder = fs.readdirSync(__dirname, "utf-8");
console.log(folder);

const server = http.createServer((req, res) =>{
     if(req.url == "/"){
        folder.forEach((ele) =>{
            // res.write(`<h2>${ele}</h2>`)
            if(fs.statSync(path.join(__dirname, ele)).isDirectory()) {
                res.write(`<a href = ${ele}><li>&#128193 ${ele}</li></a>`)
            }
            else{
                res.write(`<a href = ${ele}><li>&#128462 ${ele}</li></a>`)
            }
        })
        res.end()
     }
     else{
        const resPath = req.url;
        res.write(resPath);
        res.end()
     }
});

server.listen(POST)