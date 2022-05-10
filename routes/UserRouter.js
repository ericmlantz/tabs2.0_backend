const router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

router.post('/register', controller.RegisterUser)  //CREATE USER
router.post('/login', controller.Login)

router.get('/allusers', controller.GetAllUsers)    //GET ALL USERS
router.get('/:pk', controller.GetUserByPk)        //Get USER BY PK
router.put('update/:pk', controller.UpdateUser)     //UPDATE A USER
router.delete('/delete/:pk', controller.DeleteUser) //DELETE A USER

router.put(
  '/profile',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession,
)

module.exports = router