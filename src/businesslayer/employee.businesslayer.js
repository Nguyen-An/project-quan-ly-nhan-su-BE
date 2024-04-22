const Employee = require('../models/employee.model')

getListEmployeeBL = async (keywords) => {
    return new Promise(async (resolve, reject) => {
        try {
            let employee = await Employee.getList(keywords);
            resolve(employee)
        } catch (error) {
            reject(error)
        } 
     })
}

postEmployeeBL = async (emp) => {
    return new Promise(async (resolve, reject) => {
        try {
            let employee = await Employee.postEmployee(emp);
            resolve(employee)
        } catch (error) {
            reject(error)
        } 
     })
}

updateEmployeeBL = async (employeeId, emp) => {
    return new Promise(async (resolve, reject) => {
        try {
            let employee = await Employee.updateEmployee(employeeId, emp);
            resolve(employee)
        } catch (error) {
            reject(error)
        } 
     })
}

deleteEmployeeBL = async (employeeId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let employee = await Employee.deleteEmployee(employeeId);
            resolve(employee)
        } catch (error) {
            reject(error)
        } 
     })
}

module.exports = {
    getListEmployeeBL,
    postEmployeeBL,
    updateEmployeeBL,
    deleteEmployeeBL
}