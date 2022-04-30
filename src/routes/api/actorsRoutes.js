const express = require('express');
const router = express.Router();
const actorsController = require('../../controllers/api/actorsController');

router.get('/api/actors', actorsController.list);
router.get('/api/actors/detail/:id', actorsController.detail);
router.post('/api/actors/create', actorsController.create);
router.delete('/api/actors/delete/:id', actorsController.destroy);

module.exports = router;