const mysql = require('mysql2')
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})

db.connect((error) => {
    if(error){
        console.log("Erorr connecting to database", error)
        return
    }
    console.log("Connected to database")
})

module.exports = db