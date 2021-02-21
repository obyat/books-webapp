import express from 'express';
import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';
const router = express.Router();


export const getBooks = async (req, res) => { 
   // res.send('WROKED from controllers');
    try {
        const postMessages = await PostMessage.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getBook = async (req, res) => { 
    const { id } = req.params;

    try {
        const book = await PostMessage.findById(id);
        
        res.status(200).json(book);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createBook = async (req, res) => {
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


export const updateBook = async (req, res) => {
    const { id } = req.params;
    const { isbn, title, author, publication_year, publisher,
        image_url_s, image_url_m, image_url_l, copies, available} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No book with id: ${id}`);

    const updatedBook = { isbn, title, author, publication_year, publisher,
        image_url_s, image_url_m, image_url_l, copies, available, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedBook, { new: true });

    res.json(updatedBook);
}

export const deleteBook = async (req, res) => {
    const {id} = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No book with id: ${id}`);
        await PostMessage.findByIdAndRemove(id);
        res.json({message: 'book deleted successfully'});
        
    } catch (error) {
        console.log('REACHED THE DELETE LINE INSIDE OF CONTROLLERS BOOKS DELETE');
        
    }
}


export const likeBook = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No book with id: ${id}`);
    
    const book = await PostMessage.findById(id);
    if (book.available > 0) {
    
    console.log('There are: ' + book.available + ' books available');
    const updatedBook = await PostMessage.findByIdAndUpdate(id, {available: book.available - 1}, {new : true});
    res.json(updatedBook);

} else{

    console.log("There are no available copies of that book! - catch clause console");
    }
}
export const returnBook = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No book with id: ${id}`);
    
    const book = await PostMessage.findById(id);
    const updatedBook = await PostMessage.findByIdAndUpdate(id, { available: book.available + 1}, {new: true});
    res.json(updatedBook);

    console.long('Reached the returned line from return book in controllers')
    
}