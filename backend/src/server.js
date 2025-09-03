import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import path from "path";

import notesRoutes from "./routes/notesRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
<<<<<<< HEAD
const __dirname = path.resolve();
=======
>>>>>>> 1c00eb91c18fa94691b11200bacaddd5109a515c

// middleware
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}
app.use(express.json()); // this middleware will parse JSON bodies: req.body

// our simple custom middleware
// app.use((req, res, next) => {
//   console.log(`Requested method is ${req.method} & req URL is ${req.url}`);
//   next();
// });

app.use("/api/notes", notesRoutes);

<<<<<<< HEAD
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

=======
>>>>>>> 1c00eb91c18fa94691b11200bacaddd5109a515c
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT: ", PORT);
  });
});
