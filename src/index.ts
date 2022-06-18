// Import the express in typescript file
import express from "express";
import { Server } from "./server";

// Initialize the express engine
const app: express.Application = express();

// Take port 8000 for running server.
const port: number = 8000;

//To do create Server and init
const server = new Server(app, port);

// load global middleware
server.loadGlobalMiddleware([
    express.json(),
    express.urlencoded({
        extended: true,
    }),
]);

// load controllers
//server.loadControllers([])

// run server
server.run();
