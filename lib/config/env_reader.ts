import { EnvConfig } from "./interfaces";

export const envConfig: EnvConfig = {
  projectName: process.env.PROJECT_NAME as string,
  keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS as string,
};

export const serverPort = process.env.PORT ? process.env.PORT : 3000;
