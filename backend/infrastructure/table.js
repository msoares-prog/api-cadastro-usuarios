class Tabelas {
  init(connect) {
    this.connect = connect;

    this.criarUsuario();
  }

  criarUsuario()  {
    const sql = 'CREATE TABLE IF NOT EXISTS Usuario (id int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, sobrenome varchar(50), cpf varchar(18)  NOT NULL, telefone varchar(20), PRIMARY KEY(id))'

    this.connect.query(sql, erro => {
      if (erro) {
        console.log(erro);
      } else {
        console.log('Tabela usuarios criada');
      }
    }) 
  }
}

module.exports = new Tabelas;