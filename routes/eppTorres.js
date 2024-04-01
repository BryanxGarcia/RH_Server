const express = require('express');
const eppTorresController = require('../controllers/eppTorresController');

const router = express.Router();

router.get("/", eppTorresController.obtenerListaTorres);
router.post("/", eppTorresController.agregarRespuestaTorres);
router.put("/:codigo", eppTorresController.actualizarRespuesta);
router.delete("/:codigo", eppTorresController.eliminarRespuesta);

module.exports = router;