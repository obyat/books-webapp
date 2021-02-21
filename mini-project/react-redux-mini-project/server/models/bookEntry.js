import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  authors: { type: [String], default: "Unknown" },
  title: String,
  isbn: [String],
  num_of_copies: Number,
  genres: [String],
  year_of_pub: { type: Number, default: "n.d." },
  likeCount: { type: Number, default: 0 },
  createdAt: {
    type:Date,
    default: new Date()
  },
  });

const BookEntry = mongoose.model("Book Entry", bookSchema);

export default BookEntry;
