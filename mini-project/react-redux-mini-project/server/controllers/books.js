
import BookEntry from "../models/bookEntry.js";

/*
HTTP STATUS CODES
https://www.restapitutorial.com/httpstatuscodes.html
*/

export const getBooks = async (req, res) => { 
  try {
      const bookEntries = await BookEntry.find();
              
      res.status(200).json(bookEntries);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
}

export const createBook = async (req, res) => {
  const book = req.body;
  const newBook = new BookEntry(book);

  try {
    await newBook.save();

    res.status(201).json(newBook);
  } catch (error) {
  res.status(409).json({ message: error.message });
  }
}
