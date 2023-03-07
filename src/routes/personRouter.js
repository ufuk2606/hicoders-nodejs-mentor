import express from "express";
import {
  getUsersList,
  getHighestSalary,
  getLowestSalary,
  getSelectedCountry,
  addUsers
} from "../repositories/personRepository.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Wellcome to Home Page");
});

router.get("/users", (req, res) => {
  res.json(getUsersList());
});

router.get('/users/highest-salary', (req, res)=>{
    res.json(getHighestSalary())
});

router.get('/users/lowest-salary', (req, res)=>{
    res.json(getLowestSalary())
});

router.get('/users/:id', (req,res)=>{
  res.json(getSelectedCountry(req.params.id))
});


router.post('/users', (req, res) => {
  res.json(addUsers(req.body));
});



export default router;
