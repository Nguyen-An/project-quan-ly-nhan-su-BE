const express = require('express');
const router = express.Router();
const EmnployeeController = require('../controllers/employee.controller')
const auth = require('../middleware/AuthMiddleWare')

router.get('/employee', EmnployeeController.getListController);
router.post('/employee', EmnployeeController.postEmployeeController);
router.put('/employee/:id', EmnployeeController.updateEmployeeController);
router.delete('/employee/:id', EmnployeeController.deleteEmployeeController);

// router.use(auth.isAuth)

module.exports = router