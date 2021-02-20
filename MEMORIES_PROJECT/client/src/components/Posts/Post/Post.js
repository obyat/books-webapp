import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Divider,
} from "@material-ui/core/";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import AssignmentReturnedIcon from "@material-ui/icons/AssignmentReturned";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useDispatch } from "react-redux";
import {
  likePost,
  deletePost,
  updatePost,
  returnBook,
} from "../../../actions/posts";
import useStyles from "./styles";
import { red } from '@material-ui/core/colors';
import 'react-toastify/dist/ReactToastify.css';
//importing bear image

import {toast} from 'react-toastify';

toast.configure()


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
        variant="outlined"
        className={classes.media}
        image={post.image_url_l}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography className={classes.posttitle} variant="p">{post.title}</Typography>
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
        {post.copies} copies
        
        </Typography>
        <Typography className={classes.publish} variant="body2" color="textSecondary" component="p">
          Publisher: {post.publisher}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
        By: {post.author}
      </Typography>
        
      <div className={classes.details}>
        <Typography variant="body2" color="green">
        {post.available} available
        
        </Typography>
        <Typography className={classes.publish} variant="body2" color="textSecondary" component="p">
          Publication : {post.publication_year}
        </Typography>
      </div>
      <CardContent>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button  
        class="cardbutton"
          size="small"
          color="primary"
          onClick={()=>{post.available > 0 ? dispatch(likePost(post._id)) : notify()}}>
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
        </Button>
      </CardActions>
    </Card>
  );
};
export default Post;

//        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
