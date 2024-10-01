import { Express } from "express";
import { taskRoutes } from "./task.route";

const router = (app: Express): void => {
  app.use("/task", taskRoutes);
};

export default router;
