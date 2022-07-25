import { Router } from "express";
import { methods as elementsController} from "./../../../controllers/elementsController";

const router = Router();

router.get("/", elementsController.getElements);

export default router;