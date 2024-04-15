const AccountObj = require('../models/account.models')

let getListAcountBL = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let accountObj = await AccountObj.account_getlist()
            resolve(accountObj)
        } catch (error) {
            reject(error)
        }
    })
}

let checkAccountBL = (user) => {
    return new Promise(async (resolve, reject) => { 
        try {
            let _user = await AccountObj.account_getdetail(user)
            resolve(_user)
        } catch (error) {
            console.log(2);
            reject(null)
        }
    })
}

module.exports = {
    getListAcountBL,
    checkAccountBL
}