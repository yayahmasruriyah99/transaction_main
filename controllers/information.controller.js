const { status } = require("express/lib/response")
const db = require("../configs/dbConfig")
const informationServices = require('../services/information.service')

const getBanner = (req, res) => {
   informationServices.getAllBannerService((status, massage, result) => {
    res.status(status).json({status: status, massage: massage, data: result})
   })
}

const getService = (req, res) => {
   informationServices.getAllServiceSercive((status, massage, result) => {
      res.status(status).json({status: status, massage: massage, data: result})
   })
}



module.exports = { getBanner, getService }