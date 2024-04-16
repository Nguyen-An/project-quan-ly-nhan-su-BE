const db = require('../config/connect')

const Emnployee = (emnployee) => {

}

Emnployee.getList = () => {
    return new Promise((resolve, reject) => { 
        db.query("SELECT * FROM employee;", (err, result) => { 
            if (err) reject(null)
            resolve(result)
        })
    })
}

module.exports = Emnployee;