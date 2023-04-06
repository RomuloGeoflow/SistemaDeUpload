const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "Olá mundo!" });
});

app.listen(port, () => {
  console.log(`Servidor está rodando na porta http://localhost:${port}`);
});
