import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Gomu gomu no...");
});

app.listen(process.env.PORT, () => console.log(`Online na porta ${process.env.PORT}`));
