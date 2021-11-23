import express, { json } from "express";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(json());

app.get("/currencies");

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
