const mysql = require("mysql2");
const Sequelize = require("sequelize");
const config = require("./config");

const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
    host: config.db.host,
    dialect: config.db.dialect,
    port: config.db.port
});

module.exports = sequelize;