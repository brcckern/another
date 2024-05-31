const Contacts = require("../models/contacts");
const Lessons = require("../models/lessons");
const Exams = require("../models/exams");
const Questions = require("../models/questions");

let correctAnswers = 0;
let wrongAnswers = 0;
let finishedExamId;
let examStarted = false;

exports.get_contact = async (req, res) => {
    try
    {
        const lessons = await Lessons.findAll();
        res.render("user/contact", {title: "İletişim", lessons: lessons, selectedIndex: null, durum: req.query.durum});
    }
    catch(err)
    {
        console.log(err);
    }
};

exports.post_contact = async (req, res) => {
    const fullName = req.body.fullName;
    const email = req.body.email;
    const message = req.body.message;
    try
    {
        await Contacts.create({fullName: fullName, email: email, message: message});
        res.redirect("/iletisim?durum=gonderildi");
    }
    catch(err)
    {
        console.log(err);
    }
};

exports.faq = async (req, res) => {
    try
    {
        const lessons = await Lessons.findAll();
        res.render("user/faq", {title: "Sıkça Sorulan Sorular", lessons: lessons, selectedIndex: null});
    }
    catch(err)
    {
        console.log(err);
    }
};

exports.popular_exams = async (req, res) => {
    try
    {
        const exams = await Exams.findAll({
            order:
            [
                ["examFinishedNumber", "DESC"]
            ]
        });
        const lessons = await Lessons.findAll();
        res.render("user/index", {title: "Popüler Sınavlar", exams: exams, lessons: lessons, selectedIndex: null});
    }
    catch(err)
    {
        console.log(err);
    }
};

exports.exam_result_screen = (req, res) => {
    const examId = req.params.examId;

    if(finishedExamId == examId)
    {
        res.render("user/exam-result", {title: "Sınav Sonucu", correctAnswers: correctAnswers, wrongAnswers: wrongAnswers});
        correctAnswers = 0;
        wrongAnswers = 0;
        finishedExamId = 0;
        examStarted = false;
    }
    else
    {
        res.redirect("/");
    }
};


exports.get_exam_screen = async (req, res) => {
    const examId =  parseInt(req.params.examId);
    const questionId = parseInt(req.params.questionId);
    const questionNumber = questionId;
    if(questionId != 1 && examStarted == false) return res.redirect("/");
    try
    {
        const exam = await Exams.findAll({
            where:
            {
                id: req.params.examId
            }
        });
        if(!exam[0]) return res.redirect("/");
        const questions = await Questions.findAll({
            where:
            {
                examId: req.params.examId
            },
            raw: true
        });
        if(!questions[0]) return res.redirect("/");

        let questionAmount = exam[0].questionAmount;
        let lastQuestion = exam[0].questionAmount;

        if(questionId <= questionAmount)
        {
            return res.render("user/exam-screen", {title: "Sınav Ekranı", exam: exam[0], questions: questions[questionNumber - 1], questionAmount: questionAmount, questionNumber: questionNumber});
        }

        if(questionId + 1 > lastQuestion)
        {
            const exam = await Exams.findByPk(examId);
            if(exam)
            {
                exam.examFinishedNumber++;
                exam.save();
            }
            finishedExamId = parseInt(req.params.examId);
            return res.redirect(`/sinavlar/${examId}/sonuc`);
        }
        res.redirect("/");
    }
    catch(err)
    {
        console.log(err);
    }
};

exports.post_exam_screen = async (req, res) => {
    const questionId = parseInt(req.params.questionId);
    const examId =  parseInt(req.params.examId);
    const answer = req.body.answer;
    const nextQuestionNumber = questionId + 1;

    try
    {
        const question = await Questions.findAll({
            where:
            {
                questionNumber: questionId,
                examId: examId
            }
        });

        if(answer == question[0].correctAnswer) correctAnswers++;
        else wrongAnswers++;

        examStarted = true;
        res.redirect(`/sinavlar/${examId}/soru=${nextQuestionNumber}`);
    }
    catch(err)
    {
        console.log(err);
    }
};

exports.exam_start_screen = async (req, res) => {
    try
    {
        const exam = await Exams.findByPk(req.params.examId);
        if(exam)
        {
            return res.render("user/exam-start-screen", {title: exam.title, exam: exam});
        }
        res.redirect("/");
    }
    catch(err)
    {
        console.log(err);
    }
};

exports.lessons_by_id = async (req, res) => {
    try
    {
        const exams = await Exams.findAll({
            where:
            {
                lessonId: req.params.lessonId
            },
            raw: true
        });

        const lessonsCount = await Lessons.count();
        const lessons = await Lessons.findAll();

        if(req.params.lessonId <= lessonsCount)
        {
            return res.render("user/exams", {title: lessons[req.params.lessonId - 1].name, exams: exams, lessons: lessons, selectedIndex: req.params.lessonId});
        }
        res.redirect("/");
    }
    catch(err)
    {
        console.log(err);
    }
};

exports.home = async (req, res) => {
    try
    {

        const exams = await Exams.findAll();
        const lessons = await Lessons.findAll();

        res.render("user/index", {title: "Ana Sayfa", exams: exams, lessons: lessons, selectedIndex: null});
    }
    catch(err)
    {
        console.log(err);
    }
};