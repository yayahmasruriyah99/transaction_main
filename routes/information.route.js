const express = require("express")
const router = express.Router()
const informationController = require('../controllers/information.controller')

router.get('/api/banners', informationController.getBanner)
router.get('/api/service', informationController.getService)


module.exports = router