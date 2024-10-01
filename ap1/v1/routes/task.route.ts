import { Router } from "express";
import * as controller from "../controller/task.controller";
const router: Router = Router();

router.get("/", controller.index);

router.get("/:id", controller.detail);

export const taskRoutes: Router = router;
