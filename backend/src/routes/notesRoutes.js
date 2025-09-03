import express from "express";
import {
  CreateNote,
  DeleteNote,
  GetAllNotes,
  GetNoteById,
  UpdateNote,
} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", GetAllNotes);
router.get("/:id", GetNoteById);
router.post("/", CreateNote);
router.put("/:id", UpdateNote);
router.delete("/:id", DeleteNote);

export default router;
