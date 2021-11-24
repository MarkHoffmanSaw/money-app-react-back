import express, { json } from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(json());

app.get("/currencies", async (req, res) => {
  try {
    const result = await fetch(
      "https://api.simpleswap.io/v1/get_all_currencies?api_key=1eb05f06-53ae-4e11-a34a-a66bc963d9fc"
    );

    const data = await result.json();

    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
