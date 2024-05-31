const {DataTypes} = require("sequelize");
const sequelize = require("../data/sequelize");

const Exams = sequelize.define("exams", {
    title:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    description:
    {
        type: DataTypes.TEXT,
        allowNull: false
    },
    image:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    questionAmount:
    {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    examFinishedNumber:
    {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {timestamps: false});

module.exports = Exams;