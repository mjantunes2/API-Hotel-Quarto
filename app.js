const express = require("express");

const app = express();
app.use(express.json());

//Conexão com o banco
const sequelize = require("./src/database/connection.js");

//Models
const Models = require('./src/models/QuartoModels.js');

//Router
const QuartoRoutes = require('./src/routes/QuartoRotas.js');

//Rotas
app.use('/quartos', QuartoRoutes);

const port = 3000;

//Teste para ver se o servidor está sendo criado
//app.get("/teste", (req, res) => {
  //res.status(200).json({ mensagem: "Servidor Funcionou" });
//});

async function sincronizar() {
  try {
    await sequelize.sync();
    //await seeder();
    app.listen(port, () =>
      console.log(`Servidor rodando em http://localhost:${port}`)
    );
  } catch (error) {
    console.log("Erro ao sincronizar com o Banco", error);
  }
}

sincronizar();
