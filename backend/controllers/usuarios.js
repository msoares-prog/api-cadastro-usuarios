const Usuarios = require('../models/usuarios')

module.exports = app => {
  app.get('/usuarios', (req, res) => {

    Usuarios.lista(res);
  });

  app.get('/usuarios/:id', (req, res) =>  {
    const id = parseInt(req.params.id);

    Usuarios.buscaPorId(id, res);
  });

  app.post('/usuarios', (req, res) => {
    const usuarios = req.body

    Usuarios.adiciona(usuarios, res);
  });

  app.patch('/usuarios/:id', (req, res) =>  {
    const id = parseInt(req.params.id);
    const valores = req.body

    Usuarios.altera(id, valores, res);
  });

  app.delete('/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id);

    Usuarios.delete(id, res);
  });
}