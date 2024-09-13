import express from "express";
import userController from "./src/controlers/users.controler.js";

const server = express();

const port = 8000;

const ready = () => console.log("server ready on port" + port);

server.listen(port, ready);

server.use(express.urlencoded({ extended: true }));

server.use(express.json());

server.get("/api/users", userController.readUsers);

server.post("/api/users", userController.createUser);
