const router = require('express').Router();
const friendsService = require('../../services/friends');

router.get('/:id', (req, res, next)=>{
    friendsService.findFriends(Number(req.params.id), (data)=>{
			res.data = data;
			res.json(res.data);
    });
});

module.exports = router;