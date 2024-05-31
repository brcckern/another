const {DataTypes} = require("sequelize");
const sequelize = require("../data/sequelize");

const Lessons = sequelize.define("lessons", {
    name:
    {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {timestamps: false});

module.exports = Lessons;