const router = require('express').Router();
const userRoutes = require('./user-routes');
const hikeRoutes = require('./hike-routes');

router.use('/hikes', hikeRoutes);
router.use('/user', userRoutes);

module.exports = router;