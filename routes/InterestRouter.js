const router = require('express').Router()
const controller = require('../controllers/InterestController')
const middleware = require('../middleware')

router.get('/', controller.GetAllInterests)
router.post('/interests/')
module.exports = router