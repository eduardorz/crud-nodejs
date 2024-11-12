import { Router } from "express";
import { getUsersController } from "./usersController";

const usersRouter = Router();

usersRouter.get('/', getUsersController);

export default usersRouter;