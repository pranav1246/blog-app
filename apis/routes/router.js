import express from 'express'
import { signupUser ,loginUser } from '../controller/user-controll.js';
import { getAllPosts, getPostById, createPost, updatePost, deletePost,uploadImage } from '../controller/post-controller.js';

const router =express.Router();

router.post('/signup',signupUser);
router.post('/login',loginUser);

router.get('/posts', getAllPosts);
router.get('/posts/:id', getPostById);
router.post('/posts', uploadImage, createPost);
router.put('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);


export default router;


