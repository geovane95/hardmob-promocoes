module.exports = app => {
    const usuariosDB = app.data.usuarios;
    const controller = {};

    controller.login = (req, res) => {
        if(req.body.user){
            usuarios = usuariosDB.usuarios.data;
            usuarios.forEach(usuario => {
                if(usuario.usuario === req.body.user){
                    return res.status(200).json("Bem vindo: " + usuario.usuario);
                }
            });
            return res.status(401).json("Usuario: " + req.body.user + " não encontrado");
        }else{
            return res.status(401).json("Usuario não informado");
        }
    }

    return controller;
}