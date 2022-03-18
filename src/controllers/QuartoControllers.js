const QuartoModels = require("../models/QuartoModels.js");

class QuartoController {
  static async showAll(req, res) {
    try {
      const quartos = await QuartoModels.findAll({
        attributes: { exclude: ["createdAt", "updateAt"] },
      });

      return res.status(200).json({ resultado: quartos });
    } catch (error) {
      return res.status(401).json({ status: 401, message: error.message });
    }
  }

  static async showById(req, res) {
    const { id } = req.params;

    try {
      const quartos = await QuartoModels.findByPk(id, {
        attributes: { exclude: ["createAt", "updateAt"] },
      });

      if (!quartos) {
        return res.status(401).json({
          status: 401,
          message: "Quarto não encontrado",
        });
      }
      return res.status(200).json({ quarto: quartos });
    } catch (error) {
      return res.status(401).json({ status: 401, message: error.message });
    }
  }

  static async create(req, res) {
    const {
      tipoDoQuarto,
      numQuarto,
      idCliente,
      valorDiario,
      andar,
      tamanho,
      qntCamas,
    } = req.body;

    if (
      !tipoDoQuarto ||
      !numQuarto ||
      !idCliente ||
      !valorDiario ||
      !andar ||
      !tamanho ||
      !qntCamas
    ) {
      return res.status(401).json({
        status: 401,
        message: "Todos os Campos precisam ser preenchidos",
      });
    }

    const quartoExistente = await QuartoModels.findOne({
      where: { numQuarto: numQuarto },
    });

    if (quartoExistente) {
      return res.status(401).json({
        status: 401,
        message: "Número de Quarto já Cadastrado",
      });
    }

    const novoQuarto = {
      tipoDoQuarto,
      numQuarto,
      idCliente,
      valorDiario,
      andar,
      tamanho,
      qntCamas,
    };

    try {
      await QuartoModels.create(novoQuarto);
      res
        .status(201)
        .json({ status: 201, message: "Quarto criado com Sucesso" });
    } catch (error) {
      return res.status(401).json({ status: 401, message: error.message });
    }
  }

  static async deleteById(req, res) {
    const id = req.params.id;

    const quarto = await QuartoModels.findOne({ where: { id: id }, raw: true });

    if (!quarto) {
      return res.status(401).json({
        status: 401,
        message: "Quarto não encontrado",
      });
    }

    try {
      await quartoModels.destroy({ where: quarto });
      return res
        .status(200)
        .json({ status: 200, message: "Quarto apagado com sucesso!" });
    } catch (error) {
      return res
        .status(401)
        .json({ status: 401, message: `Algo deu errado: ${error}` });
    }
  }

  static async updateById(req, res) {
    const { id } = req.params;
    const {
      tipoDoQuarto,
      numQuarto,
      idCliente,
      valorDiario,
      andar,
      tamanho,
      qntCamas,
    } = req.body;

    const quarto = await QuartoModels.findOne({ where: { id: id }, raw: true });

    if (!quarto) {
      return res.status(401).json({
        status: 401,
        message: "Quarto não encontrado",
      });
    }

    const novosDados = {
      tipoDoQuarto,
      numQuarto,
      idCliente,
      valorDiario,
      andar,
      tamanho,
      qntCamas,
    };

    try {
      await quartoModels.update(novosDados, { where: quarto });
      return res
        .status(200)
        .json({ status: 200, message: "Quarto atualizado com sucesso!" });
    } catch (error) {
      return res
        .status(401)
        .json({ status: 401, message: `Algo deu errado: ${error}` });
    }
  }
}

module.exports = QuartoController;
