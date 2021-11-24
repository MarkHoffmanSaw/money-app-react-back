import express, { json } from "express";
import fetch from "node-fetch";

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/currencies", async (req, res) => {
  try {
    const res = await fetch(
      "https://api.simpleswap.io/v1/get_all_currencies?api_key=1eb05f06-53ae-4e11-a34a-a66bc963d9fc"
    );

    console.log(res);

    const data = await res.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
