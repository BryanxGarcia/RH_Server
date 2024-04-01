const connection = require('../config.db'); 


const obtenerListaUniformes = (req, res) => {
  connection.query('SELECT * FROM uniformes', (error, results) => {
    if (error) {
      console.error('Error al obtener la lista de respuestas', error);
      res.status(500).json({ error: 'Error al obtener las respuestas' });
    } else {
      res.json(results);
    }
  });
};

const agregarRespuestaUniformes = (req, res) => {
  const datosUniforme = req.body;
  connection.query('INSERT INTO uniformes SET ?', datosUniforme, (error, results) => {
    if (error) {
      console.error('Error al agregar las respuestas del usuario', error);
      res.status(500).json({ error: 'Error al agregar las respuestas' });
    } else {
      res.json({ message: 'Las respuestas fueron enviadas correctamente' });
    }
  });
};

const eliminarUniforme = (req, res) => {
  const codigoRespuesta = req.params.codigo;
  connection.query('DELETE FROM uniformes WHERE PKUniformes = ?', codigoRespuesta, (error, results) => {
    if (error) {
      console.error('Error al eliminar la respuesta', error);
      res.status(500).json({ error: 'Error al eliminar la respuesta' });
    } else {
      console.error('Eliminado correctamente');
      res.json({ message: 'Respuesta eliminado correctamente' });
    }
  });
}; 

const actualizarDatos = (req, res) => {
  const codigoRespuesta = req.params.codigo;
  const nuevaRespuesta = req.body;

  connection.query('UPDATE uniformes SET ? WHERE PKUniformes = ?', [nuevaRespuesta, codigoRespuesta], (error, results) => {
    if (error) {
      console.error('Error al actualizar el respuesta', error);
      res.status(500).json({ error: 'Error al actualizar la respuesta' });
    } else {
      res.json({ message: 'Respuesta actualizado correctamente' });
    }
  });
};

module.exports = {
  obtenerListaUniformes,
  agregarRespuestaUniformes,
  eliminarUniforme,
  actualizarDatos,
};