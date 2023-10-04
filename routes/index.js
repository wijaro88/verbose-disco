const express = require('express');

const router = express.Router();

const TaskRoutes = require('./TaskRoutes');
const UserRoutes = require('./UserRoutes')

router.use('/tasks', TaskRoutes);
router.use('/users',UserRoutes);

module.exports = router;