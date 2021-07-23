const express = require('express')
const router = express.Router()
const taskController = require('../controllers/tasks.controller');
// Retrieve all employees
router.get('/', taskController.findAll);
// Create a new employee
router.post('/', taskController.create);
// Retrieve a single employee with id
router.get('/:id', taskController.findById);
// Update a employee with id
router.put('/:id', taskController.update);
// Delete a employee with id
router.delete('/:id', taskController.delete);
module.exports = router