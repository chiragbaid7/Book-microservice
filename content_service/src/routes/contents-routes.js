const router = require('express').Router();
const contents = require('../controller/contents_controller');
const { verifyToken } = require('../utils/auth');

router.post('/', verifyToken,contents.createcontentcontroller)
router.get('/new', verifyToken,contents.getnewcontentscontroller)
router.get('/top/liked', verifyToken,contents.gettoplikedcontents)
router.get('/top/reads', verifyToken,contents.gettopreadcontents)
router.get('/:content_id', verifyToken,contents.getcontentcontroller)
router.patch('/:content_id/update-story', verifyToken,contents.updatestory)
router.patch('/:content_id/update-title', verifyToken,contents.updatetitle)
router.delete('/', verifyToken,contents.deletecontent)

module.exports = router