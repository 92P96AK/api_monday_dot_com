import express, { Application, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import * as swaggerUi from "swagger-ui-express";
import * as fs from "fs";
import * as path from "path";
import mongoose, { ConnectOptions } from "mongoose";
import { ApiMethods, RequestQueryTransformer } from "./middlewares";
import { config } from "@infrastructure";
import { IServerEnv } from "@interfaces";
import { corsOptions, RESOURCE_NOT_FOUND, ROUTE_NOT_FOUND } from "@constants";
import { Routes as V1_Routes } from "./v1/routes";
import { Log } from "@helper";

export class Server {
  private app: Application;
  private v1_routes: V1_Routes;
  private env: Partial<IServerEnv>;
  private swaggerFile: string = path.resolve(
    __dirname + "/../swagger/swagger.json",
  );
  private swaggerData: string = fs.readFileSync(this.swaggerFile, "utf8");
  private swaggerDocument: swaggerUi.JsonObject = JSON.parse(this.swaggerData);
  private corsOptions: cors.CorsOptions;

  constructor() {
    this.env = { port: config.port, databaseUrl: config.databaseUrl };
    this.corsOptions = corsOptions;

    this.app = express();
    this.v1_routes = new V1_Routes();
    this.use();
    this.connectDB();
    this.configuration();
  }

  private use() {
    this.app.use(cors(this.corsOptions));
    this.app.use(morgan("combined"));
    this.app.use(express.json());
    this.app.use(bodyParser.json({ limit: "150mb" }));
    this.app.use(
      bodyParser.urlencoded({
        limit: "150mb",
        extended: true,
      }),
    );
    this.app.use(RequestQueryTransformer, ApiMethods);
    this.app.use(RequestQueryTransformer);
    this.app.get("/health", (_, res: Response) => {
      res.status(200).send("API is up 🚀🚀🚀🚀🚀 and running 🏃🏼‍♂️🏃🏼‍♂️🏃🏼‍♂️");
    });
    this.app.use(
      "/swagger",
      swaggerUi.serve,
      swaggerUi.setup(this.swaggerDocument),
    );
    this.app.use("/api/v1/", this.v1_routes.router);
    this.app.use((_, __, next: NextFunction) => {
      next({
        message: RESOURCE_NOT_FOUND,
        status: {
          code: 404,
          success: false,
        },
        error: {
          message: ROUTE_NOT_FOUND,
        },
      });
    });
    this.app.use((error: any, _: any, res: Response, __: any) => {
      res.status(error?.status?.code || 400).json(error);
    });
  }
  private connectDB() {
    mongoose
      .connect(this.env.databaseUrl!, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions)
      .then(() => {
        Log.info({
          message: "Successfully connected to MongoDB",
        });
      })
      .catch((err) => {
        Log.error({
          message: `Connection error , ${err}`,
        });
      });
  }
  private configuration() {
    this.app.set("port", this.env.port);
  }
  public getApp() {
    return this.app;
  }
  public run() {
    this.app.listen(this.app.get("port"), () => {
      Log.info({
        message: `.............. server is running at port ${this.app.get(
          "port",
        )}  .........`,
      });
    });
  }
}
