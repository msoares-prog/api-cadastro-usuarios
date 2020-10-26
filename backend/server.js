const customExpress = require('./config/customExpress.js');
const connect = require('./infrastructure/connect');
const Tabelas = require('./infrastructure/table.js');

connect.connect(erro => {
  if (erro) {
    console.log(erro);
  } else {
    console.log("conectado com sucesso")

    Tabelas.init(connect)
    const app = customExpress();

    app.listen(3006, () => 
    console.log("servidor rodando na porta 3006"));
  }
})


