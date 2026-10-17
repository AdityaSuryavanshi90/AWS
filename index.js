import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  return res
    .status(200)
    .json({
      message: "hello bro mene aws ka ci/cd sikh liya bro ekdhm badiya yaar",
      PORT,
    });
});

app.get("/health", (req, res) => {
  return res.status(200).json({ message: "hello i am good bro how are you!!" });
});

app.listen(PORT, () => {
  console.log(`server running ${PORT}`);
});
