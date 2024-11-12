import { Router } from "express";
import usersRouter from "./users/usersRoutes";


const router: Router = Router();

router.use('/users', usersRouter);

export default router;