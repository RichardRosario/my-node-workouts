const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  res.end();
});

const PORT = 5080;

server.listen(PORT, () => console.log(`Serve running at port ${PORT} `));
