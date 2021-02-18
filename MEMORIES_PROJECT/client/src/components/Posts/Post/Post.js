import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
import BookIcon from '@material-ui/icons/Book';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { likePost, deletePost, updatePost } from '../../../actions/posts';
import useStyles from './styles';
const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>

      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      
      <div className={classes.details}>
      <Typography variant="body2" color="textSecondary">{post.tags.map((tag)=> `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>{post.title }</Typography>
      <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={()=>dispatch(likePost(post._id))}>
        <BookIcon fontSize="small"/>
         Borrow &nbsp;
            [{post.likeCount}]
        </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
        <RestoreFromTrashIcon fontSize="small"/> 
        Return &nbsp;
        </Button>
      </CardActions>
    </Card>
  );
};
export default Post;