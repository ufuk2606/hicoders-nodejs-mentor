import postsRepository from "../repositories/postsRepository.js";
import express from 'express'

const router = express.Router()


router.get("/", async(req,res)=>{
    const postsList = await postsRepository.findPost(req.query.status)
    res.status(200).send(postsList)
})

router.get("/:id", async(req,res)=>{
    const post = await postsRepository.findPostById(req.params.id)
    res.status(200).send(post)
})

router.post("/", async(req,res)=>{
    const addedPost = await postsRepository.createPost(req.body)
    res.status(201).send(addedPost)
})



export default router