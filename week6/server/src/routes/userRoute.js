import express from "express";

import {
  createUser,
  deleteUser,
  getAllUsers,
} from "../repositories/userRepository.js";

import mailRepository from "../repositories/mailRepository.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await getAllUsers());
});

router.post("/", async (req, res) => {
  await createUser(req.body);
  res.send("User created successfully and a welcoming mail has been sent!");
  let { email } = req.body;
  await mailRepository.sendMailOfUser(email);
});

router.delete("/:id", async (req, res) => {
  const users = await getAllUsers();
  const user = users.find((user) => user.id === Number(req.params.id));
  if (!user) {
    return res.status(404).json({
      status: 404,
      message: `User with id ${req.params.id} does not exist!`,
    });
  }
  await deleteUser(req.params.id);
  res.send(`User with the id ${req.params.id} deleted!`);
});

export default router;
