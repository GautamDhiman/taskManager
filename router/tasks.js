const express = require('express');
const router = express.Router();
const { seeAll,
    getSingle,
    updateTask,
    deleteTask,
    addTask } = require('../controllers/tasks');

router.route('/').get(seeAll).post(addTask)
router.route('/:id').get(getSingle).patch(updateTask).delete(deleteTask);

module.exports = router;