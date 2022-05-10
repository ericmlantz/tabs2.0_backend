const router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

router.post('/register', controller.Register)
router.post('/login', controller.Login)

router.put(
  '/profile',
  middleware.stripToken,
  middleware.verifyToken,
)

module.exports = router