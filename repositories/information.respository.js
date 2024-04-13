const { response } = require('express')
const db = require('../configs/dbConfig')

const getAllBanner = (response) => {
    db.query('SELECT * FROM banners', (err, result) =>{
        if (err) {
            response(err, null)
            return
        }
        response(null, result)
    })
}

const getAllService = (response) => {
    db.query('SELECT * FROM service', (err, result) => {
        if(err) {
            response(err, null)
            return
        }
        response(null, result)
    })
}
module.exports = {getAllBanner, getAllService}