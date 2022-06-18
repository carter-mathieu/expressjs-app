import { Application, NextFunction, Request, RequestHandler, Response } from "express";
import http from "http";

export class Server {
    constructor(private app: Application, private readonly port: number) {}

    public run(): http.Server {
        return this.app.listen(this.port, () => {
            console.log("I Have the High Ground!");
        });
    }

    public loadGlobalMiddleware(middleware: Array<RequestHandler>): void {
        middleware.forEach(mw => {
            this.app.use(mw);
        });

        this.app.use(this.errorHandler);
    }

    errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
        console.log(err.message, req.body);
        res.status(500).send("Internal Server Error");
    }
}
