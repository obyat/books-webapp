import React, {useState, useEffect } from "react";
import {Container, AppBar, Typography, Grow, Grid, Button  } from "@material-ui/core";
//importing posts from components
import Posts from './components/Posts/Posts';
import {getPosts} from './actions/posts'
import Form from './components/Form/Form';
import useStyles from './styles';
import{useDispatch} from 'react-redux';
import memories from './images/memories.png'
import birdpic from './images/birdpic.png'
const App = () => {
    //if the current id is not selected make it null
const [currentId, setCurrentId] = useState(null);    
const classes = useStyles();
const dispatch = useDispatch();


useEffect(() => {
    dispatch(getPosts());
}, [currentId, dispatch]);


return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} colorTransparent color="secondary">
            <img className={classes.image} src={birdpic} alt="birdpic" height = "60"/>
                <Typography className={classes.heading}  variant="h2" align="center">Bird Coffee Shop Library</Typography>
                
               
            </AppBar>
            <Grow in>
                <Container>
            
                    <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                        
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;