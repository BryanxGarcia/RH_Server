const express = require('express');
const eppUniformesController = require('../controllers/uniformesController');

const router = express.Router();

router.get("/", eppUniformesController.obtenerListaUniformes);
router.post("/", eppUniformesController.agregarRespuestaUniformes);
router.put("/:codigo", eppUniformesController.actualizarDatos);
router.delete("/:codigo", eppUniformesController.eliminarUniforme);

module.exports = router;