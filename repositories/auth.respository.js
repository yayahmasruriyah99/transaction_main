const { response } = require('express')
const db = require('../configs/dbConfig')

const register = (newUser, response) => {
    const {email, firstname, lastname, password} = newUser
    db.query(
        'INSERT INTO user (email, firtname, lastname, password) VALUES (?, ?, ?, ?)',
        [email, firstname, lastname, password],
        (err, results) => {
            if (err) {
                response(err.sqlMessage, null)
                return
            }
            response(null, results.insertId)
        }
    )
}

module.exports = {register}