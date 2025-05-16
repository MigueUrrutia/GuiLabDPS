const UsuarioModel = require('../models/usuario.model');
// Obtiene todos los usuarios de la base de datos
exports.findAll = (req, res) => {
    UsuarioModel.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido un error mientras se intentaba obtener los usuarios.",
            });
        } else res.send(data);
    });
};

// Busca un usuario por id
exports.findOne = (req, res) => {
    UsuarioModel.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `No se encontró el usuario con id ${req.params.id}.`,
                });
            } else {
                res.status(500).send({
                    message: "Error al obtener el usuario con id " + req.params.id,
                });
            }
        } else res.send(data);
    });
};

// Crear y guardar un nuevo usuario
exports.create = (req, res) => {
    // Validar la solicitud
    if (!req.body) {
        res.status(400).send({
            message: "El contenido no puede estar vacío.",
        });
    }

    // Crear un nuevo usuario
    const usuario = new UsuarioModel({
        id: 0,
        usuario: req.body.usuario,
        contrasena: req.body.contrasena,
    });

    // Guardar el usuario en la base de datos
    UsuarioModel.create(usuario, (err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido un error mientras se intentaba crear el usuario.",
            });
        } else res.send(data);
    });
};

// Actualiza un usuario identificado por el id en la solicitud
exports.update = (req, res) => {
    // Validar la solicitud
    if (!req.body) {
        res.status(400).send({
            message: "El contenido no puede estar vacío.",
        });
    }

    // Actualizar el usuario en la base de datos
    UsuarioModel.updateById(
        req.params.id,
        new UsuarioModel(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `No se encontró el usuario con id ${req.params.id}.`,
                    });
                } else {
                    res.status(500).send({
                        message: "Error al actualizar el usuario con id " + req.params.id,
                    });
                }
            } else res.send(data);
        }
    );
};

// Elimina un usuario identificado por el id en la solicitud
exports.delete = (req, res) => {
    UsuarioModel.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `No se encontró el usuario con id ${req.params.id}.`,
                });
            } else {
                res.status(500).send({
                    message: "No se pudo eliminar el usuario con id " + req.params.id,
                });
            }
        } else res.send({ message: `Usuario eliminado correctamente!` });
    });
};  