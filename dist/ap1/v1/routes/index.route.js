"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_route_1 = require("./task.route");
const router = (app) => {
    app.use("/task", task_route_1.taskRoutes);
};
exports.default = router;
