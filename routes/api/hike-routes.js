const router = require('express').Router();

const { getSavedHikes, savedHike, removeHike, getHikeById} = require ('../../controllers/hike-controller.js');

// Get and Post at api/hikes
router 
  .route('/')
  .get(getSavedHikes)
  .post(savedHike);

  // Delete at /api/books/:id
  router 
    .route("/id")
    .get(getHikeById)
    .delete(removeHike);

    module.exports = router;
