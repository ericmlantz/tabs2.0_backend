const router = require('express').Router()
const controller = require('../controllers/PageController')

router.post('/create', controller.CreatePage)  //CREATE PAGE
router.get('/all', controller.GetAllPages)    //GET ALL PAGES
router.get('/:pk', controller.GetPageByPk)        //GET PAGE BY PK
router.put('/update/:pk', controller.UpdatePage)     //UPDATE A PAGE
router.delete('/delete/:pk', controller.DeletePage) //DELETE A PAGE

module.exports = router