const express = require('express');
const router = express.Router();
const EmnployeeController = require('../controllers/employee.controller')
const auth = require('../middleware/AuthMiddleWare')

router.get('/employee', EmnployeeController.getListController)

router.use(auth.isAuth)

module.exports = router