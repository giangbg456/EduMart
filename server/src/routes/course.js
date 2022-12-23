import express from "express";
import * as courseController from '../controllers/course';

const router = express.Router();

router.get('/all', courseController.getCourses)
router.get('/limit', courseController.getCourseLimit)

export default router