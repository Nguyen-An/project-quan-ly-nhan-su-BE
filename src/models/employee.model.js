const db = require('../config/connect')

const Emnployee = (emnployee) => {

}

Emnployee.getList = async (keywords) => {
    if(!keywords) keywords = "";
    keywords = keywords.trim();
    keywords = `%${keywords}%`
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM employee WHERE userName like ? or userCode like ?;", [keywords, keywords], (err, result) => {
            if (err) reject(null)
            resolve(result)
        })
    })
}

Emnployee.postEmployee = (emp) => {
    return new Promise((resolve, reject) => { 
        // Query to get the maximum id
        db.query("SELECT MAX(employeeId) AS maxId FROM employee", (err, rows) => {
            if (err) {
                console.log('err: ', err);
                reject(null);
            } else {
                // Step 2: Generate new employee code
                let idMax = rows[0].maxId || 0;
                let newEmployeeCode = "NV" + (idMax + 1);
                db.query("INSERT INTO employee(userName, userCode, gender, dateOfBirth, phone, address, email, identityCard, status, position, laborContract, salary, dateEnd, dateStart) VALUES (?, ?, ?, ?, ?, ? , ? , ? , ? , ? , ? , ? , ? , ?);",
                    [emp.userName, newEmployeeCode, emp.gender, emp.dateOfBirth, emp.phone, emp.address, emp.email, emp.identityCard, emp.status, emp.position, emp.laborContract, emp.salary, emp.dateEnd, emp.dateStart], (err, result) => {
                    if (err) {
                        console.log('err: ', err);
                        reject(null)
                    }
                    resolve(result)
                })
            }
        })
    })
}

Emnployee.updateEmployee = (employeeId, emp) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE employee e
        SET e.userName = ?, e.gender = ?, e.dateOfBirth = ?, e.phone = ?, e.address = ?, e.email = ?, e.identityCard = ?, e.status = ?, e.position = ?, e.laborContract = ?, e.salary = ?, e.dateEnd = ?, e.dateStart = ?
        WHERE e.employeeId = ?;`,
            [emp.userName, emp.gender, emp.dateOfBirth, emp.phone, emp.address, emp.email, emp.identityCard, emp.status, emp.position, emp.laborContract, emp.salary, emp.dateEnd, emp.dateStart, employeeId], (err, result) => {
                if (err) {
                    console.log('err: ', err);
                    reject(null)
                }
                resolve(result)
            })
    })
}

Emnployee.deleteEmployee = (employeeId) => {
    return new Promise((resolve, reject) => {
        db.query(`DELETE FROM employee e WHERE e.employeeId = ?;`,
            [employeeId], (err, result) => {
                if (err) {
                    console.log('err: ', err);
                    reject(null)
                }
                resolve(result)
            })
    })
}

module.exports = Emnployee;