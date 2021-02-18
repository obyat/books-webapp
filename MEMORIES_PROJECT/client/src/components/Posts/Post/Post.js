import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';import BookIcon from '@material-ui/icons/Book';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { likePost, deletePost, updatePost, returnBook } from '../../../actions/posts';
import useStyles from './styles';
const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.image_url_l} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.title}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>

      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      
      <div className={classes.details}>
      <Typography variant="body2" color="textSecondary">{post.available}</Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>{post.author }</Typography>
      <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">{post.publisher}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={()=>dispatch(likePost(post._id))}>
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
        </Button>
      </CardActions>
    </Card>
  );
};
//        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>

export default Post;