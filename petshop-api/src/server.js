const express = require("express");
const cors = require("cors");

const tutorRoutes = require("./routes/tutorRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(tutorRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});