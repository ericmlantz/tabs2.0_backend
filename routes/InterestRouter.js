const router = require('express').Router()
const controller = require('../controllers/InterestController')

router.post('/create', controller.CreateInterest)  //CREATE INTEREST
router.get('/all', controller.GetAllInterests)    //GET ALL INTERESTS
router.get('/:pk', controller.GetInterestByPk)        //Get INTEREST BY PK
router.put('/update/:pk', controller.UpdateInterest)     //UPDATE A INTEREST
router.delete('/delete/:pk', controller.DeleteInterest) //DELETE A INTEREST

module.exports = router