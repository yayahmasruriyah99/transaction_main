const jwt = require('jsonwebtoken')
const userRespository = require('../repositories/user.repository')

const profileUser = (id, response) => {
    userRespository.getUserById(id, (err, existingUser) =>{
        if(err) {
            response(400, err, null)
            return
        }
        const{email, firstname, lastname, profile_image} = existingUser
        response(200, 'Sukses', {email, firstname, lastname, profile_image: `http://localhost:4000/${profile_image}`})
    })
}

const updateProfileUser = (data, id, response) => {
    userRespository,updateUser(data, id, (err, result) =>{
        if(err){
            response(400, err, null)
            return
        }
        userRespository.getUserById(ud, (err, updateUser) => {
            if(err) {
                response(err, null)
                return
            }
            const {email, firstname, lastname, profile_image} = updateUser
            response(200, "Sukses", {email, firstname, lastname, profile_image: `http://localhost:4000/${profile_image}`})
        })
    })
}



module.exports = { profileUser, updateProfileUser, updateProfileImage}