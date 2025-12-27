import http from 'node:http';
import fs from "node:fs";

const html = fs.readFileSync("../index.html", "utf-8");
console.log(html);


http
.createServer((req, res) => {

//  if (req.url == "/styles.css")
  res.writeHead(200, { 'Content-Type': 'text/plain'});
  res.end('Hello\n');
})
.listen(3000, () => {
  console.log("http://localhost:3000");
});
