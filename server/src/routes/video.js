import express from "express";
import * as videoController from '../controllers/video';

const router = express.Router();

router.get('/limit', videoController.getVideoLimit)

export default router