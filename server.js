const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// ✅ Enable CORS for any frontend origin (customize if needed)
server.use(
  cors({
    origin: "*", // Change this to your frontend URL in production!
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Optional custom route rewrites
server.use(
  jsonServer.rewriter({
    "/*": "/$1",
  })
);

server.use(middlewares);
server.use(router);

// ✅ Let Vercel handle the listening — don’t use server.listen()
module.exports = server;
