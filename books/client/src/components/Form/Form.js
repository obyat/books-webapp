import React, {useState, useEffect} from 'react';
import {TextField, Button, Typography, Toolbar, Paper, AppBar} from '@material-ui/core';
import useStyles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {createBook, updateBook} from '../../actions/books';



const Form = ({currentId, setCurrentId }) => {



    const [bookData, setBookData] = useState({

      isbn: '', title: '', author: '', publication_year: '', publisher: ''
      ,image_url_s: '', image_url_m: '', image_url_l: '', copies: '', available: '' 
    });
    const classes = useStyles();
    
    
    
    const book = useSelector((state) => (currentId ? state.books.find((p) => p._id == currentId) : null));
    



    useEffect(() => {
      if(book) setBookData(book);
    }, [book])
    
    const handleSubmit = (e) =>   {
        e.preventDefault();

        if(currentId) {
          dispatch(updateBook(currentId, bookData));
        } else {
          dispatch(createBook(bookData));
        }
        clear();
  }


  const dispatch = useDispatch();

//
  const clear = () => {
      setCurrentId(null);
      setBookData({isbn: '', title: '', author: '', publication_year: '', publisher: ''
      ,image_url_s: '', image_url_m: '', image_url_l: '', copies: '', available: '' 
 });
    };

    return (
      <Paper  className={classes.paper}>
        <form autoComplete="off" color="red"  noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography variant="h6">{currentId ? `Editing "${book.title}"` : 'Add a Book'}</Typography>
          <TextField name="isbn" variant="outlined" label="isbn" fullWidth value={bookData.isbn} onChange={(e) => setBookData({ ...bookData, isbn: e.target.value })} />
          <TextField name="title" variant="outlined" label="title" fullWidth value={bookData.title} onChange={(e) => setBookData({ ...bookData, title: e.target.value })} />
          <TextField name="author" variant="outlined" label="author" fullWidth value={bookData.author} onChange={(e) => setBookData({ ...bookData, author: e.target.value })} />
          <TextField name="publication_year" variant="outlined" label="publication_year" fullWidth value={bookData.publication_year} onChange={(e) => setBookData({ ...bookData, publication_year: e.target.value })} />
          
          <TextField name="publisher" variant="outlined" label="publisher" fullWidth value={bookData.publisher} onChange={(e) => setBookData({ ...bookData, publisher: e.target.value })} />
          <TextField name="image_url_s" variant="outlined" label="image_url_s" fullWidth value={bookData.image_url_s} onChange={(e) => setBookData({ ...bookData, image_url_s: e.target.value })} />
          <TextField name="image_url_m" variant="outlined" label="image_url_m" fullWidth value={bookData.image_url_m} onChange={(e) => setBookData({ ...bookData, image_url_m: e.target.value })} />
          <TextField name="image_url_l" variant="outlined" label="image_url_l" fullWidth value={bookData.image_url_l} onChange={(e) => setBookData({ ...bookData, image_url_l: e.target.value })} />
          <TextField name="copies" variant="outlined" label="copies" fullWidth value={bookData.copies} onChange={(e) => setBookData({ ...bookData, copies: e.target.value })} />
          <TextField name="available" variant="outlined" label="available" fullWidth value={bookData.available} onChange={(e) => setBookData({ ...bookData, available: e.target.value })} />
          
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
          <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
  
       
        </form>
      </Paper>
    );
  };
export default Form;