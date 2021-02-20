import express from 'express';

import { getPosts, getPost, createPost, updatePost, deletePost, likePost, returnBook} from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);
router.patch('/:id/returnBook', returnBook);

export default router;