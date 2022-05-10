const router = require('express').Router()
const controller = require('../controllers/InterestController')
const middleware = require('../middleware')

router.get('/interests', controller.GetAllInterest)
router.get('/interests/')
module.exports = router