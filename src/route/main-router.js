import {Router} from "express";
import {getRate} from "../controller/rate-controller.js";
import {subscribe} from "../controller/subscribe-controller.js";
import multer from "multer";

const router = Router();

router.get('/rate', getRate);
router.post('/subscribe', multer().none(), subscribe);

export default router;
