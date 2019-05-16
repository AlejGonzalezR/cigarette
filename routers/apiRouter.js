
var express = require('express'),
router = express(),
api = require('../controllers/apiController')
;

router.get('/', api.index);

module.exports = router;
