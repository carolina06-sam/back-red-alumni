// profile controller
const Like = require('../models/post.model');
const router = require('express').Router();



router.route('/').get((req, res) => {
  Like.find()
    .then(allLikes => res.json(allLikes))
    .catch(err => res.status(400).json('Error! ' + err))
})
router.route('/:likeId').get((req, res) => {
  Post.findById(req.params.likeId)
    .then(like => res.json(like))
    .catch(err => res.status(400).json('Error! ' + err))
})
router.route('/').post((req, res) => {
  const newLike = new Post(req.body)

  newLike.save()
    .then(like => res.json(like))
    .catch(err => res.status(400).json("Error! " + err))
})
router.route('/:likeId').delete((req, res) => {
  Post.deleteOne({ _id: req.params.likeId })
    .then(like => res.json('Success! like deleted.'))
    .catch(err => res.status(400).json('Error! ' + err))
})

router.route('/:likeId').put((req, res) => {
  Post.findByIdAndUpdate(req.params.likeId, req.body)
    .then(like => res.json('Success! like updated.'))
    .catch(err => res.status(400).json('Error! ' + err))
})

module.exports = router