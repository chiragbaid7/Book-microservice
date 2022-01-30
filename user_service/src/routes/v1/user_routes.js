const router = require('express').Router();
const user = require('../../controller/v1/user_controller');
const { verifyToken } = require('../../utils/auth');

router.post('/register', user.registercontroller)
router.post('/login', user.logincontroller)
router.get('/listofusers', verifyToken,user.getlistofuserscontroller)
router.get('/:id',verifyToken, user.getusercontroller)
router.patch('/updatephone', verifyToken,user.updatephonecontroller)
router.patch('/updatepassword', verifyToken,user.updatepasswordcontroller)
router.patch('/updatename',verifyToken, user.updatenamecontroller)
router.delete('/', verifyToken, user.deleteusercontroller)

module.exports = router;