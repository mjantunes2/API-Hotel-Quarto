const sequelize = require("../database/connection.js");
const { DataTypes } = require("sequelize");

const Quartos = sequelize.define("Quartos", {
  tipoDoQuarto: {
    type: DataTypes.STRING,
    allowNull: false,
    isInt: {
      args: [["luxo", "premium", "solteiro", "casal", "família"]],
      msg: "Escolha entre luxo, premium, solteiro, casal ou família",
    },
  },

  numQuarto: {
    type: DataTypes.NUMBER,
    allowNull: false,
    validate: {
      isAlphanumeric: {
        msg: "Ensira um número válido",
      },
    },
  },

  idCliente: {
    type: DataTypes.NUMBER,
    allowNull: false,
    foreignKey: true,
    validate: {
      isAlphanumeric: {
        msg: "Ensira um ID válido",
      },
    },
  },

  valorDiario: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      isAlphanumeric: {
        msg: "Ensira o valor em números",
      },
    },
  },

  andar: {
    type: DataTypes.NUMBER,
    allowNull: false,
    isInt: {
      msg: "Ensira um andar válido",
    },
  },

  tamanho: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: {
        args: 15,
        msg: "Escolha um tamanho entre 15 e 35 metros",
      },
      max: {
        args: 35,
        msg: "Escolha um tamanho entre 15 e 35 metros",
      },
    },
  },

  qntCamas: {
    type: DataTypes.NUMBER,
    allowNull: false,
    validate: {
      min: {
        args: 1,
        msg: "Escolha a quantidade de camas entre 1 e 4",
      },
      max: {
        args: 4,
        msg: "Escolha a quantidade de camas entre 1 e 4",
      },
    },
  },
});

module.exports = Quartos;
