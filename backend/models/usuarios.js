const moment = require('moment');
const connect = require('../infrastructure/connect');
const { info } = require('winston');

class Usuarios {
  adiciona(usuarios, res)  {
    const usuarioValido = usuarios.nome.length > 1;

    const validacoes = [{
      nome: 'nome',
      valido: usuarioValido,
      mensagem: 'Nome do usuário tem que ter mais de uma letra'
    }]

    const erros = validacoes.filter(campo => !campo.valido)
    const quantidadeErros = erros.length

    if (quantidadeErros > 0)  {
      res.status(400).json(erros)
    } else {
      const sql = 'INSERT INTO Usuario SET ?'

      connect.query(sql, usuarios, (erro, resultados) => {
        if (erro) {
          res.status(400).json(erro)
        } else  {
          res.status(201).json(usuarios);
        }
      })
    }
  }

  lista(res) {
    const sql = 'SELECT * FROM Usuario'

    connect.query(sql, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json(resultados)
      }
    })
  }

  buscaPorId(id, res) {
    const sql = `SELECT * FROM Usuario WHERE id=${id}`;

    connect.query(sql, (erro, resultado) => {
      const usuario = resultado[0];
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(usuario);
      }
    })
  }

  altera(id, valores, res)  {
    const sql = 'UPDATE Usuario SET ? WHERE id=?'
    
    connect.query(sql, [valores, id], (erro, resultado) =>  {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json({...valores, id});
      }
    })
  }

  delete(id, res)  {
    const sql = 'DELETE FROM Usuario WHERE id=?'

    connect.query(sql, id, (erro, resultado) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json({id});
      }
    })
  }
}

module.exports = new Usuarios