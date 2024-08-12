import mondaySdk from "monday-sdk-js";
import { config } from "@infrastructure";

const MondaySdk = mondaySdk();
MondaySdk.setApiVersion("2023-10");
MondaySdk.setToken(config.mondayToken);

export { MondaySdk };
