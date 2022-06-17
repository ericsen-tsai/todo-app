const jsonServer = require("json-server")
const server = jsonServer.create()
const router = jsonServer.router("data.json")
const middlewares = jsonServer.defaults({ static: "../client/dist" })
const port = process.env.PORT || 3000

server.use(middlewares)
server.use(router)

server.listen(port)
