import jsonServer from "json-server"; // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
import localIpAddress from "local-ip-address";
import Logger from "@ptkdev/logger";
const port = process.env.PORT || 3000; // you can use any port number here; i choose to use 3000
const logger = new Logger();
import cors from "cors";

server.use(cors());
server.use(middlewares);
server.use(router);

server.listen(port, () => {
  logger.info(
    `JSON Server is running - http://localhost:${port} - http://${localIpAddress()}:${port}`
  );
});