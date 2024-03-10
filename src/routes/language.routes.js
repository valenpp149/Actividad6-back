import {Router} from "express";
import {methods} from "../controllers/language.controller";

const router = Router();
router.get("/", methods.getBooks);
router.get("/:id", methods.getBookById);
router.post("/", methods.newBook);
router.delete("/:id", methods.deleteBook);
router.put("/:id", methods.updateBook);

export default router;