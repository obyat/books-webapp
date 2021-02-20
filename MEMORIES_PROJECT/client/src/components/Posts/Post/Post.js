<<<<<<< HEAD
import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import BookIcon from "@material-ui/icons/Book";
import AssignmentReturnedIcon from "@material-ui/icons/AssignmentReturned";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import {
  likePost,
  deletePost,
  updatePost,
  returnBook,
} from "../../../actions/posts";
import useStyles from "./styles";
=======
import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';import BookIcon from '@material-ui/icons/Book';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';
import { likePost, deletePost, updatePost, returnBook } from '../../../actions/posts';
import useStyles from './styles';

import 'react-toastify/dist/ReactToastify.css';
//importing bear image

import {toast} from 'react-toastify';

toast.configure()


>>>>>>> 72ab7d088f0a4f46ab3d2e978294787513d1f0f8
const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const notify = () => {
    toast.error('There are no available copies of that book!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000});
}
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.image_url_l}
        title={post.title}
      />
      <div className={classes.overlay}>
<<<<<<< HEAD
        <Typography className={classes.posttitle} variant="p">{post.title}</Typography>
        <Typography variant="body2">
          {/* {moment(post.createdAt).fromNow()} */}
        </Typography>
=======
        <Typography variant="h6">{post.title}</Typography>
        <Typography variant="body2"> published on: {post.publication_year}</Typography>
>>>>>>> 72ab7d088f0a4f46ab3d2e978294787513d1f0f8
      </div>

      <div className={classes.overlay2}>
        <Button
          style={{color: "white" }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>

      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.available} copies available
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
        By: {post.author}
      </Typography>
      <CardContent>
        <Typography className={classes.publish} variant="body2" color="textSecondary" component="p">
          Publisher: {post.publisher}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
<<<<<<< HEAD
        <Button  
        class="cardbutton"
          size="small"
          color="primary"
          onClick={() => dispatch(likePost(post._id))}
        >
          <PhotoLibraryIcon fontSize="small" /><br></br>
          Borrow
        </Button>
        <Button 
        class="cardbutton"
          size="small"
          color="primary"
          onClick={() => dispatch(returnBook(post._id))}
        >
          <AssignmentReturnedIcon fontSize="small" /><br></br>Return</Button>
        <Button 
        class="cardbutton"
          size="small"
          color="primary"
          onClick={() => {}}
        >
          <DeleteForeverIcon fontSize="small" /><br></br>
          Delete
=======
        <Button size="small" color="primary" onClick={()=>{post.available > 0 ? dispatch(likePost(post._id)) : notify()}}>
        <PhotoLibraryIcon fontSize="small"/>
         Borrow 
        
            [{post.available}]
        </Button>
        <Button size="small" color="primary" onClick={() => dispatch(returnBook(post._id))}>
        <AssignmentReturnedIcon fontSize="small"/> 
        Return &nbsp;
        </Button>
        <Button size="small" color="primary" onClick={() => dispatch(returnBook(post._id))}>
        <DeleteForeverIcon fontSize="small"/> 
        Delete
>>>>>>> 72ab7d088f0a4f46ab3d2e978294787513d1f0f8
        </Button>
      </CardActions>
    </Card>
  );
};
<<<<<<< HEAD
export default Post;
=======
//        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>

export default Post;
>>>>>>> 72ab7d088f0a4f46ab3d2e978294787513d1f0f8
