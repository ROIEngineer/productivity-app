import express from "express";
import cors from "cors";


const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/todos", (req, res) => {
  res.json([]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
