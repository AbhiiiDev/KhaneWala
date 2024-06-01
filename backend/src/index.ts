import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", (req, res) => {
  res.json({
    message: "test server working fine",
  });
});

app.listen(8000, () => {
  console.log("server working fine on PORT: 8000");
});
