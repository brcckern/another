const express = require("express");

const router = express.Router();

const userController = require("../controllers/user");

router.get("/sinavlar/:examId/sonuc", userController.exam_result_screen);
router.get("/sinavlar/:examId/soru=:questionId", userController.get_exam_screen);
router.post("/sinavlar/:examId/soru=:questionId", userController.post_exam_screen);
router.get("/sinavlar/:examId", userController.exam_start_screen);
router.get("/dersler/:lessonId", userController.lessons_by_id);
router.get("/", userController.home);

module.exports = router;