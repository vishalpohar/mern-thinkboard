import cors from "cors";
import express from "express";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json()); // this middleware will parse JSON bodies: req.body


// our simple custom middleware
// app.use((req, res, next) => {
//   console.log(`Requested method is ${req.method} & req URL is ${req.url}`);
//   next();
// });

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT: ", PORT);
  });
});
