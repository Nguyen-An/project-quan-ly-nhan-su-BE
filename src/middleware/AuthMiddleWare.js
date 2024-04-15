var _JWT = require("../config/_JWT")
let isAuth = async (req, res, next) => {
    let _token = req.headers.authorization;
    if (_token) {
        try {
            var decoded = await _JWT.check(_token)

            req.user = decoded;
            next()
        } catch (error) {
            return res.status(403).json({ message: 'Ma token khong hop le' });
        }
    } else {
        return res.status(401).json({ message: 'Bạn chưa gửi mã token' });
    }
}

module.exports = {
    isAuth
}