const { response } = require('express')
const informationRespository = require('../repositories/information.respository')


const getAllBannerService = (response) => {
    informationRespository.getAllBanner((err, result) => {
        if (err) {
            response(400, err.sqlMessage, null)
            return
        }
        response(200, "Success", result)
    })
}

const getAllServiceSercive = (response) => {
    informationRespository.getAllService((err, result) => {
        if(err) {
            response(400, err.sqlMessage, null)
            return
        }
        response(200, "Succses", result)
    })
}

module.exports = {getAllBannerService, getAllServiceSercive}