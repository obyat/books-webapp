import {FETCH_ALL, CREATE, UPDATE,  DELETE, LIKE, RETURN } from '../constants/actionTypes'
export default (books=[], action) => {
switch (action.type) {
    case DELETE:
        return books.filter((book) => (book._id !== action.payload));
    case LIKE:
    case RETURN:
    case UPDATE:
        return books.map((book) => (book._id === action.payload._id ? action.payload : book));
    case FETCH_ALL:
        return action.payload;
    case CREATE:
        return [...books, action.payload]; 
    default:
        return books;
    }
}