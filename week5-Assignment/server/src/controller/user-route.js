import express from "express";
import userRepository from "../repository/user-repository.js";

const router = express.Router();

// Get all users
router.get("/", async (req, res, next) => {
  try {
    let users = await userRepository.getAllUsers();
    return res.status(200).send(users);
  } catch (error) {
    return next({ status: 404, message: error });
  }
});

// Create a new user
router.post("/", async (req, res, next) => {
  try {
    const { body } = req;
    const newUser = await userRepository.createUser(body);
    return res.send(newUser);
  } catch (error) {
    return next({ status: 500, message: error });
  }
});

// Delete a user by id
router.delete("/:id", async (req, res, next) => {
  const userId = req.params.id;
  try {
    const selectedUser = await userRepository.deleteUser(userId);
    if (selectedUser === 0) {
      res.status(404).json({ message: `Record with id ${userId} not found` });
    } else {
      res.send( `Deleted with id ${userId} `);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message:  `Record with id ${userId} not found` });
  }
});

export default router;
