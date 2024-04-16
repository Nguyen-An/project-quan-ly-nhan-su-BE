const Employee = require('../models/employee.model')

getListEmployeeBL = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let employee = await Employee.getList();
            resolve(employee)
        } catch (error) {
            reject(error)
        } 
     })
}

module.exports = {
    getListEmployeeBL
}