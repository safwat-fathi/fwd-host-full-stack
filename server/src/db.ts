import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const { RDS_DB, RDS_HOST, RDS_USER, RDS_PASSWORD } = (process.env as {
  RDS_DB: string;
  RDS_HOST: string;
  // RDS_PORT: number;
  RDS_USER: string;
  RDS_PASSWORD: string;
}) || {
  RDS_DB: "",
  RDS_HOST: "",
  // RDS_PORT: "",
  RDS_USER: "",
  RDS_PASSWORD: "",
};

const Client = new Pool({
  host: RDS_HOST,
  port: 5432,
  database: RDS_DB,
  user: RDS_USER,
  password: RDS_PASSWORD,
});

Client.on("connect", () => {
  console.log("Connected to database.");
});

Client.on("error", () => {
  console.log("Error connecting to database.");
  throw new Error(`Error closing DB connection`);
});

export default Client;
