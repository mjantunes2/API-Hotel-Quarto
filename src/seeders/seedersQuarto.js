const quartoModel = require("../models/quartoModels.js");

async function seed() {
  const quartos = await quartoModel.bulkCreate([
    {
      tipoDoQuarto: "luxo",
      numQuarto: 1,
      idCliente: 1,
      valorDiario: 300,
      andar: 1,
      tamanho: 35,
      qntCamas: 4,
    },
    {
      tipoDoQuarto: "solteiro",
      numQuarto: 3,
      idCliente: 4,
      valorDiario: 100,
      andar: 3,
      tamanho: 20,
      qntCamas: 1,
    },
    {
      tipoDoQuarto: "casal",
      numQuarto: 4,
      idCliente: 5,
      valorDiario: 180,
      andar: 2,
      tamanho: 30,
      qntCamas: 2,
    },
  ]);
}

module.exports = seed;
