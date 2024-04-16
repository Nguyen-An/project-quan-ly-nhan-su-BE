const accountRoutes = require("./account.route")
const jobRoutes = require('./job.route')
const employeeRoutes = require("./employee.route")
module.exports = (app) => {
    app.use('/api/account-service', accountRoutes);
    app.use('/api/employee-service', jobRoutes);
    app.use('/api/job-service', employeeRoutes);
}