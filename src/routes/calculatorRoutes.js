const express = require('express');
const router = express.Router();
const calculatorController = require('../controllers/calculatorController');

router.post('/add', calculatorController.add);
router.post('/subtract', calculatorController.subtract);

module.exports = router;