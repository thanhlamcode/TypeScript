import { Request, Response } from "express";
import Task from "../models/task.model";

export const index = async (req: Request, res: Response): Promise<void> => {
  const task = await Task.find({
    deleted: false,
  });
  res.json(task);
};

export const detail = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;

  const task = await Task.find({
    _id: id,
    deleted: false,
  });
  res.json(task);
};
