const express = require('express');

// attach route files to paths
const router = express.Router();

router.use('/presidents', require('./presidents'));

module.exports = router;
