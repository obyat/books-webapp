import express from 'express';
import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';
const router = express.Router();

export const getPosts = async (req, res) => { 
   // res.send('WROKED from controllers');
    try {
        const postMessages = await PostMessage.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostMessage.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const {isbn, title, author, publication_year, publisher,
        image_url_s, image_url_m, image_url_l, copies, available} = req.body;

    const newPostMessage = new PostMessage({ isbn, title, author, publication_year, publisher,
        image_url_s, image_url_m, image_url_l, copies, available})

    try {
//        res.send('WROKED from controllers');

        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { isbn, title, author, publication_year, publisher,
        image_url_s, image_url_m, image_url_l, copies, available} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { isbn, title, author, publication_year, publisher,
        image_url_s, image_url_m, image_url_l, copies, available, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const {id} = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
        await PostMessage.findByIdAndRemove(id);
        res.json({message: 'posted deleted successfully'});
        
    } catch (error) {
        console.log('REACHED THE DELETE LINE INSIDE OF CONTROLLERS POSTS DELETE');
        
    }
}


export const likePost = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await PostMessage.findById(id);
    if (post.available > 0) {
    
    console.log('There are: ' + post.available + ' books available');
    const updatedPost = await PostMessage.findByIdAndUpdate(id, {available: post.available - 1}, {new : true});
    res.json(updatedPost);

} else{

    console.log("There are no available copies of that book! - catch clause console");
    }
}
export const returnBook = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { available: post.available + 1}, {new: true});
    res.json(updatedPost);

    console.long('Reached the returned line from return book in controllers')
    
}