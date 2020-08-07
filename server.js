const http = require("http");
// data sample
const todos = [
  { id: 1, text: "todo1" },
  { id: 2, text: "todo2" },
  { id: 3, text: "todo3" },
];

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "application/json");
  res.setHeader("X-Powered-By", "Nodejs");
  res.write("Hello world");
  res.end(
    JSON.stringify({
      success: true,
      data: todos,
    })
  );
});

const PORT = 5080;

server.listen(PORT, () => console.log(`Serve running at port ${PORT} `));

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Process terminated");
  });
});
