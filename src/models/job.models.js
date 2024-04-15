const db = require('../config/connect')

const Job = (job) => {

}

Job.getList = () => {
    return new Promise((resolve, reject) => {
        db.query("select * from Job;", (err, result) => {
            if (err) reject(null)
            resolve(result)
        })
    })
}

Job.getDetail = (id) => {
    return new Promise((resolve, reject) => {
        db.query("select * from Job where id = ?;",id, (err, result) => {
            if (err) reject(null)
            resolve(result)
        })
    })
}

module.exports = Job