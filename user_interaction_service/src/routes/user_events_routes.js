const router = require('express').Router();
const events_controller = require('../controllers/v1/user_events_controller');
const { verifyToken } = require('../utils/auth');

router.put('/like',verifyToken, events_controller.likecontentcontroller)
router.put('/read',verifyToken, events_controller.readcontentcontroller)
router.get('/top/liked', events_controller.toplikedcontents)
router.get('/top/reads',events_controller.topreadcontents)
router.get('/:content_id/likes',verifyToken, events_controller.getcontentlikes)
router.get('/:content_id/reads',verifyToken, events_controller.getcontentreads)
//router.get('/popular')

module.exports = router