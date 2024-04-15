const Job = require('../models/job.models')

getListJobBL = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let jobObj = await Job.getList()
            resolve(jobObj)
        } catch (error) {
            reject(error)
        }
    })
}

getDetailJobBL = (id) => { 
    return new Promise(async (resolve, reject) => {
        try {
            let jobObj = await Job.getDetail(id)
            resolve(jobObj)
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    getListJobBL,
    getDetailJobBL
}