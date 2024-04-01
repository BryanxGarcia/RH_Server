const connection = require('../config.db'); 


const obtenerListaPostes = (req, res) => {
  connection.query('SELECT * FROM epppostes', (error, results) => {
    if (error) {
      console.error('Error al obtener la lista de respuestas', error);
      res.status(500).json({ error: 'Error al obtener los fabricantes' });
    } else {
      res.json(results);
    }
  });
};

const agregarRespuestaPostes = (req, res) => {
  const respuestaPostes = req.body;
  connection.query('INSERT INTO epppostes SET ?', respuestaPostes, (error, results) => {
    if (error) {
      console.error('Error al agregar las respuestas del usuario', error);
      res.status(500).json({ error: 'Error al agregar las respuestas' });
    } else {
      res.json({ message: 'Las respuestas fueron enviadas correctamente' });
    }
  });
};

const eliminarRespuesta = (req, res) => {
  const codigoRespuesta = req.params.codigo;
  connection.query('DELETE FROM epppostes WHERE PKEPPPostes = ?', codigoRespuesta, (error, results) => {
    if (error) {
      console.error('Error al eliminar la respuesta', error);
      res.status(500).json({ error: 'Error al eliminar la respuesta' });
    } else {
      console.error('Eliminado correctamente');
      res.json({ message: 'Respuesta eliminado correctamente' });
    }
  });
}; 

const actualizarRespuesta = (req, res) => {
  const codigoRespuesta = req.params.codigo;
  const nuevaRespuesta = req.body;

  connection.query('UPDATE epppostes SET ? WHERE PKEPPPostes = ?', [nuevaRespuesta, codigoRespuesta], (error, results) => {
    if (error) {
      console.error('Error al actualizar el respuesta', error);
      res.status(500).json({ error: 'Error al actualizar la respuesta' });
    } else {
      res.json({ message: 'Respuesta actualizado correctamente' });
    }
  });
};

module.exports = {
  obtenerListaPostes,
  agregarRespuestaPostes,
  eliminarRespuesta,
  actualizarRespuesta,
};