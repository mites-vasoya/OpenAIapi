const express = require('express');
const {genImage} = require('../controllers/openaicontrollers');
const router = express.Router();

router.post('/generateimage', genImage);

module.exports = router;