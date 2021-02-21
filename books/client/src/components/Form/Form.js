import React, {useState, useEffect} from 'react';
import {TextField, Button, Typography, Toolbar, Paper, AppBar} from '@material-ui/core';
import useStyles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {createPost, updatePost} from '../../actions/posts';



const Form = ({currentId, setCurrentId }) => {



    const [postData, setPostData] = useState({

      isbn: '', title: '', author: '', publication_year: '', publisher: ''
      ,image_url_s: '', image_url_m: '', image_url_l: '', copies: '', available: '' 
    });
    const classes = useStyles();
    
    
    
    const post = useSelector((state) => (currentId ? state.posts.find((p) => p._id == currentId) : null));
    



    useEffect(() => {
      if(post) setPostData(post);
    }, [post])
    
    const handleSubmit = (e) =>   {
        e.preventDefault();

        if(currentId) {
          dispatch(updatePost(currentId, postData));
        } else {
          dispatch(createPost(postData));
        }
        clear();
  }


  const dispatch = useDispatch();


  const clear = () => {
      setCurrentId(null);
      setPostData({isbn: '', title: '', author: '', publication_year: '', publisher: ''
      ,image_url_s: '', image_url_m: '', image_url_l: '', copies: '', available: '' 
 });
    };

    return (
      <Paper  className={classes.paper}>
        <form autoComplete="off" color="red"  noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Add a Book'}</Typography>
          <TextField name="isbn" variant="outlined" label="isbn" fullWidth value={postData.isbn} onChange={(e) => setPostData({ ...postData, isbn: e.target.value })} />
          <TextField name="title" variant="outlined" label="title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
          <TextField name="author" variant="outlined" label="author" fullWidth value={postData.author} onChange={(e) => setPostData({ ...postData, author: e.target.value })} />
          <TextField name="publication_year" variant="outlined" label="publication_year" fullWidth value={postData.publication_year} onChange={(e) => setPostData({ ...postData, publication_year: e.target.value })} />
          
          <TextField name="publisher" variant="outlined" label="publisher" fullWidth value={postData.publisher} onChange={(e) => setPostData({ ...postData, publisher: e.target.value })} />
          <TextField name="image_url_s" variant="outlined" label="image_url_s" fullWidth value={postData.image_url_s} onChange={(e) => setPostData({ ...postData, image_url_s: e.target.value })} />
          <TextField name="image_url_m" variant="outlined" label="image_url_m" fullWidth value={postData.image_url_m} onChange={(e) => setPostData({ ...postData, image_url_m: e.target.value })} />
          <TextField name="image_url_l" variant="outlined" label="image_url_l" fullWidth value={postData.image_url_l} onChange={(e) => setPostData({ ...postData, image_url_l: e.target.value })} />
          <TextField name="copies" variant="outlined" label="copies" fullWidth value={postData.copies} onChange={(e) => setPostData({ ...postData, copies: e.target.value })} />
          <TextField name="available" variant="outlined" label="available" fullWidth value={postData.available} onChange={(e) => setPostData({ ...postData, available: e.target.value })} />
          
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
          <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
  
       
        </form>
      </Paper>
    );
  };
export default Form;