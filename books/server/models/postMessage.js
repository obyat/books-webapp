import mongoose from 'mongoose';


const postSchema = mongoose.Schema({
    isbn: String,
    title: String,
    author: String,
    publication_year: Number,
    publisher: String,
    image_url_s: String,
    image_url_m: String,
    image_url_l: String,
    copies: {
        type: Number,
        default: 0
    },
    available: {
        type: Number,
        default: 0
    }
});

const postMessage = mongoose.model('PostMessage', postSchema);
export default postMessage;