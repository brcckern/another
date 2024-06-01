const config = {
    db: {
        host: process.env.MYSQLHOST || "localhost",
        user: process.env.MYSQLUSER || "root",
        password: process.env.MYSQLPASSWORD || "erenbircicek",
        database: process.env.MYSQLDATABASE || "esinav",
        port: process.env.MYSQLPORT || 3306,
        dialect: "mysql"
    }
};

module.exports = config;