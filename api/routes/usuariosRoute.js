module.exports = app => {
    const controller = app.controllers.usuariosController;

    app.route('/api/v1/usuarios')
        .get(controller.login);
}