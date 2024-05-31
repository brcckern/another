const express = require("express");
const bodyParser = require('body-parser');

const sequelize = require("./data/sequelize");
const dummyData = require("./data/dummy-data");

const Exams = require("./models/exams");
const Lessons = require("./models/lessons");
const Questions = require("./models/questions");

const app = express();
const port = process.env.PORT || 3306;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static("./node_modules"));
app.use(express.static("./public"));

const userRouter = require("./routes/user");
app.use(userRouter);

Exams.belongsTo(Lessons);
Lessons.hasMany(Exams, {
    foreignKey: {
        name: "lessonId",
        allowNull: false
    },
    onDelete: "SET NULL",
    onUpdate: "SET NULL"
});
Questions.belongsTo(Exams);
Exams.hasMany(Questions, {
    foreignKey: {
        name: "examId",
        allowNull: false
    },
    onDelete: "SET NULL",
    onUpdate: "SET NULL"
});

(async () => {
    await sequelize.sync({force: true});
    await dummyData();
})();

app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı.`);
});