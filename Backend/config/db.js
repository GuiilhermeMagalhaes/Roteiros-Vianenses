const sequelize = require(sequelize);

const dbInstance = new sequelize({
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "roteiosvianenses",
    dialect: "mysql",
})


export default dbInstance;