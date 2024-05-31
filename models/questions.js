const {DataTypes} = require("sequelize");
const sequelize = require("../data/sequelize");

const Questions = sequelize.define("questions", {
    questionNumber:
    {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    questionContent:
    {
        type: DataTypes.TEXT,
        allowNull: false
    },
    question:
    {
        type: DataTypes.TEXT,
        allowNull: false
    },
    firstOption:
    {
        type: DataTypes.TEXT,
        allowNull: false
    },
    secondOption:
    {
        type: DataTypes.TEXT,
        allowNull: false
    },
    thirdOption:
    {
        type: DataTypes.TEXT,
        allowNull: false
    },
    fourthOption:
    {
        type: DataTypes.TEXT,
        allowNull: false
    },
    fifthOption:
    {
        type: DataTypes.TEXT,
        allowNull: false
    },
    correctAnswer:
    {
        type: DataTypes.TEXT,
        allowNull: false
    },
}, {timestamps: false});

module.exports = Questions;