import express, { Request, Response } from "express";
import dotenv from "dotenv";
import Client from "./db";
import { verifyToken } from "./middlewares/auth.middlewares";
import routes from "./routes";

dotenv.config();

const app: express.Application = express();
const PORT = (process.env.PORT as string) || "";

app.use(express.json());

app.get("/test", async function (req: Request, res: Response) {
  try {
    const connect = await Client.connect();

    const result = await connect.query("SELECT * FROM users");

    if (result.rows[0]) {
      return res
        .status(200)
        .json({ users: result.rows[0], message: "users found" });
    }

    connect.release();

    return res.status(400).json({ message: "no users found" });
  } catch (err) {
    res.status(500).json({ message: String(err) });
  }
});

app.use("/api", routes);

app.listen(PORT, function () {
  console.log(`starting app on port: ${PORT}`);
});
