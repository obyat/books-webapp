import React from 'react';
import Post from "./Post/Post"
import useStyles from './styles';
import {Grid, CircularProgress} from '@material-ui/core';
import {useSelector} from 'react-redux';
const Posts = ({setCurrentId}) => {
const posts = useSelector((state)=>state.posts);
console.log(posts);

const classes = useStyles();
//loops over posts/ maybe helpful in looping over books
    return (
       !posts.length ? <CircularProgress /> : (
           <div style={{paddingBlockStart:'100px'}}>
            <Grid className={classes.container} container alignItems ="stretch" spacing={3}>
                    {posts.map((post)=> (
                        <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                        </Grid>
                    ))}
            </Grid>
            </div>

       )
    );
}

export default Posts;