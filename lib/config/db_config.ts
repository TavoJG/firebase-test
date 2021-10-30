import { envConfig } from "./env_reader";
import { Firestore } from "@google-cloud/firestore";

const db = new Firestore({
  projectId: envConfig.projectName,
  keyFilename: envConfig.keyFile,
});

export default db;
