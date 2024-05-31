const {DataTypes} = require("sequelize");
const sequelize = require("../data/sequelize");

const Contacts = sequelize.define("contacts", {
    fullName:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    email:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    message:
    {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {timestamps: false});

module.exports = Contacts;