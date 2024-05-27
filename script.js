"use strict";
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.end(
      "<h1>Главная страница</h1> <a href='/about'>Переход на страницу About</a>"
    );
  } else if (req.url === "/about") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.end('<h1>About</h1><a href="/">Переход на страницу Main</a>');
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.end("<h1>Page not found!</h1>");
  }
});
server.listen(3030);
