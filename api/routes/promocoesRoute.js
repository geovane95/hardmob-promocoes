module.exports = app => {
    const controller = app.controllers.promocoesController;

    app.route('/api/v1/promocoes')
        .get(controller.listPromocoes);
}