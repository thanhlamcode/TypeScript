import express, { Express } from "express";
import dotenv from "dotenv";
import * as database from "./config/database";
import router from "./api/v1/routes/index.route";

dotenv.config();
database.connect();

const app: Express = express();
const port: number | string = process.env.PORT || 3000;

router(app);

app.listen(port, () => {
  console.log("App listening at port: ", port);
});
