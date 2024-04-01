const express = require('express');
const eppPostesController = require('../controllers/eppPostesController');

const router = express.Router();

router.get("/", eppPostesController.obtenerListaPostes);
router.post("/", eppPostesController.agregarRespuestaPostes);
router.put("/:codigo", eppPostesController.actualizarRespuesta);
router.delete("/:codigo", eppPostesController.eliminarRespuesta);

module.exports = router;