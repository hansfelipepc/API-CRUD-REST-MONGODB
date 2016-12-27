'use strict';

const TeamController = require('../controllers/team-controller'),
	express = require('express'),
	router = express.Router(),
	tc = new TeamController();

router
	.get('/', tc.getAll)
	.get('/agregar', tc.addForm)
	.post('/', tc.save)
	.get('/editar/:_id', tc.getOne)
	.put('/actualizar/:_id', tc.save)
	.delete('/eliminar/:_id', tc.delete)
	.use(tc.error404);
	
module.exports = router;