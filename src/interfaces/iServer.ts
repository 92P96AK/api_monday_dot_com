export interface IServerEnv {
  port: number;
  devMode: boolean;
  databaseUserName: string;
  databasePassword: string;
  databaseName: string;
  databaseHost: string;
  databasePort: number;
  databaseUrl: string;
  monday: {
    apiEndPoint: string;
    token: string;
  };
  slack: {
    token: string;
    channelId: string;
  };
}
