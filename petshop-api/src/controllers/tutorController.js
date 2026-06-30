const prisma = require("../prisma");

exports.criarTutor = async (req, res) => {

    const { nome, telefone } = req.body;

    const tutor = await prisma.tutor.create({

        data: {

            nome,

            telefone

        }

    });

    res.json(tutor);

};

exports.agendarConsulta = async (req, res) => {

    const { data, tutorId } = req.body;

    const consulta = await prisma.consulta.create({

        data: {

            data,

            tutorId

        }

    });

    res.json(consulta);

};

exports.cancelarConsulta = async (req, res) => {

    const { id } = req.params;

    const consulta = await prisma.consulta.update({

        where: {

            id: Number(id)

        },

        data: {

            status: "Cancelada"

        }

    });

    res.json(consulta);

};