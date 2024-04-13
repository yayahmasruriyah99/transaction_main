const { status } = require('express/lib/response')
const userService = require('../services/user.service')

const profileUser = (req, res) => {
    const token = req.jwt
    userService.profileUser(token.id, (code, message, data) =>{
        res.status(code).json({
            status:code, 
            message,
            data
        })
    })
}

const updateProfileUser = (req, res) => {
    const token = req.jwt
    userService.updateProfileUser(req.body, token.id, (code, message, data) => {
        res.status(code).json({
            status: code,
            message,
            data,
        })
    })
}

const updateProfileImage = (req, res) => {
    const token = req.jwt
    const fotoPath = req.file.path
    userService.updateProfileImage(fotoPath, token.id, (code, message) => {
        res.status(code).json({
            status: code,
            message
        })
    })
}

module.exports = {profileUser, updateProfileUser, updateProfileImage}