import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const {
  ENV,
  POSTGRES_DB,
  POSTGRES_HOST,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB_DEV,
  POSTGRES_HOST_DEV,
  POSTGRES_USER_DEV,
  POSTGRES_PASSWORD_DEV,
} = <
  {
    ENV: string;
    POSTGRES_DB: string;
    POSTGRES_HOST: string;
    POSTGRES_USER: string;
    POSTGRES_PASSWORD: string;
    POSTGRES_DB_DEV: string;
    POSTGRES_HOST_DEV: string;
    POSTGRES_USER_DEV: string;
    POSTGRES_PASSWORD_DEV: string;
  }
>process.env || { ENV: "", POSTGRES_DB: "", POSTGRES_HOST: "", POSTGRES_USER: "", POSTGRES_PASSWORD: "", POSTGRES_DB_DEV: "", POSTGRES_HOST_DEV: "", POSTGRES_USER_DEV: "", POSTGRES_PASSWORD_DEV: "" };

const Client = new Pool({
  host: ENV === "dev" ? POSTGRES_HOST_DEV : POSTGRES_HOST,
  port: 5432,
  database: ENV === "dev" ? POSTGRES_DB_DEV : POSTGRES_DB,
  user: ENV === "dev" ? POSTGRES_USER_DEV : POSTGRES_USER,
  password: ENV === "dev" ? POSTGRES_PASSWORD_DEV : POSTGRES_PASSWORD,
});

Client.once("connect", () => {
  console.log("Connected to database.");
});

export default Client;
