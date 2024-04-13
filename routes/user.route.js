const express = require('express')
const authenticateToken = require('../middleware/authenticateToken.middleware')
const upload = require('../middleware/multer.middleware')
const userController = require('../controllers/user.controller')
const router = express.Router()

router.get('/profile', authenticateToken, userController.profileUser)
router.put('/profile/update', authenticateToken, userController.updateProfileUser)
router.put('/profile/image', authenticateToken, upload.single('profile_image'), userController.updateProfileImage)

module.exports = router