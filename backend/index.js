import express from "express";
import cors from "cors";
import todosRouter from "./routes/todos.js";
import notesRouter from "./routes/notes.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/todos", todosRouter);
app.use("/notes", notesRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
