module.exports = app => {
    const promocoesDB = app.data.promocoes;
    const controller = {};

    controller.listPromocoes = (req, res) => res.status(200).json(promocoesDB);

    return controller;
}