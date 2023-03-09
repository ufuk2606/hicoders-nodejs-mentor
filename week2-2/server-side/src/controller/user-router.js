import express from "express";
import {
    getUserList,
    getUserById,
} from "../repositories/usersRepository.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(getUserList());
});

router.get("/:id", (req, res) => {
  res.json(getUserById(req.params.id));
}); 


export default router;