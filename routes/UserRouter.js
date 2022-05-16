const router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

router.post('/register', controller.RegisterUser)  //CREATE USER
router.post('/login', controller.Login)     //LOGIN USER

router.get('/all', controller.GetAllUsers)    //GET ALL USERS

router.put('/update/:pk', controller.UpdateUser)     //UPDATE A USER
router.delete('/delete/:pk', controller.DeleteUser) //DELETE A USER

router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession,
)

router.get('/:pk', controller.GetUserByPk)        //GET USER BY PK

module.exports = router