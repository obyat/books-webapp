import express from 'express';
import { getPosts, createPost} from "../controllers/posts.js";

const router = express.Router();

//Now that there is a route to this file, it will reach this file with 
//localhost:5000/posts 
router.get('/', getPosts);
router.get('/', createPost);

export default router;