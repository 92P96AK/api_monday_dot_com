import { IServerEnv } from "../interfaces";

require("dotenv").config();

const LoadFromEnv = (key: string) => {
  if (typeof process.env[key] !== "undefined") {
    return process.env[key];
  }
  throw new Error(`process.env doesn't have the key ${key}`);
};

export const config: IServerEnv = {
  port: parseInt(LoadFromEnv("PORT") || "9000"),
  devMode: LoadFromEnv("NODE_ENV") === "development",
  databaseUrl: LoadFromEnv("DATABASE_URL"),
  databaseUserName: LoadFromEnv("DATABASE_USERNAME"),
  databasePassword: LoadFromEnv("DATABASE_PASSWORD"),
  databaseName: LoadFromEnv("DATABASE_NAME"),
  databaseHost: LoadFromEnv("DATABASE_HOST"),
  databasePort: parseInt(LoadFromEnv("DATABASE_PORT") || "27017"),
  monday: {
    apiEndPoint: LoadFromEnv("MONDAY_API_END_POINT"),
    token: LoadFromEnv("MONDAY_TOKEN"),
  },
  slack: {
    token: LoadFromEnv("SLACK_TOKEN") || "",
    channelId: LoadFromEnv("SLACK_CHANNEL_ID") || "",
  },
};
