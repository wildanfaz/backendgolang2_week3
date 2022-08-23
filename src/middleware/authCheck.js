const jwt = require('jsonwebtoken')
const response = require('../helpers/response')

const auth_validate = (role = 'user') => {
    return (req, res, next) => {
        const { authtoken } = req.headers
        if (!authtoken) {
            return response(res, 401, 'login required', true)
        }

        jwt.verify(authtoken, process.env.JWT_KEYS, (err, decode) => {
            if (err) {
                return response(res, 401, err, true)
            } else if (decode.role === 'admin') {
                next()
            } else if (!role.includes(decode.role)) {
                return response(res, 401, 'user does not have access', true)
            } else {
                console.log(decode)
                next()
            }
        })
    }  
}

module.exports = auth_validate