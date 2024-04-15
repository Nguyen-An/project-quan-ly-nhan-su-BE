const db = require('../config/connect')

const Account = (account) => {

}

Account.account_getlist = async () => {
    return new Promise((resolve, reject) => { 
        db.query("select * from Account;", (err, result) => {
            if (err) reject(null)
            resolve(result)
        })
    })
}

Account.account_getdetail = async (user) => { 
    return new Promise((resolve, reject) => { 
        db.query("select * from Account acc where acc.username = ? and acc.password = ?;", [user.email, user.password], (err, result) => {
            if (err) reject(null)
            resolve(result)
        })
    })
}

module.exports = Account