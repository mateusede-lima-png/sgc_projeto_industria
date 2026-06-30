const express = require("express");

const router = express.Router();

const controller = require("../controllers/tutorController");

router.post("/tutores", controller.criarTutor);

router.post("/consultas", controller.agendarConsulta);

router.put("/consultas/:id", controller.cancelarConsulta);

module.exports = router;

module.exports = router;