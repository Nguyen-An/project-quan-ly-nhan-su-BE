const accountRoutes = require("./account.route")
const jobRoutes = require('./job.route')
module.exports = (app) => {
    app.use('/api/account-service', accountRoutes);
    app.use('/api/job-service', jobRoutes);
}