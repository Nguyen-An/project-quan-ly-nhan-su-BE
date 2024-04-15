const express = require('express');
const router = express.Router();
const JobController = require('../controllers/job.controller')
const auth = require('../middleware/AuthMiddleWare')

router.get('/job/:id', JobController.getDetailController)

router.use(auth.isAuth)

router.get('/job', JobController.getListController)


module.exports = router