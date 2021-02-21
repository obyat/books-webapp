import React, {useState, useEffect } from "react";
import {Container, AppBar, Typography, Grow, Grid, GridList, Button, Toolbar, IconButton, Drawer  } from "@material-ui/core";
//importing posts from components
import Posts from './components/Posts/Posts';
import {getPosts} from './actions/posts'
import Form from './components/Form/Form';
import useStyles from './styles';
import{useDispatch} from 'react-redux';
import birdpic from './images/birdpic.png'
import birdpicInverted from './images/birdpicInverted.png';
import {Menu} from '@material-ui/icons';
const App = () => {
    //if the current id is not selected make it null
const [currentId, setCurrentId] = useState(null);    
const [open, setOpen] = useState(false);    
const [anchor, setAnchor] = useState('left');
const handleAccount = () => {
    setAnchor('left')
    setOpen(true)
}
const handleDrawer = () => {
    setOpen(true)
}
const classes = useStyles();
const dispatch = useDispatch();


useEffect(() => {
    dispatch(getPosts());
}, [currentId, dispatch]);

//            <AppBar className={classes.appBar} width="100%" color="secondary" position="relative">

return (
    <div>
        <Container maxWidth="lg">
            <AppBar position="relative" >
                <Toolbar>
                <IconButton edge='start' onClick={handleDrawer} color='inherit' aria-label='menu'>
                <Menu/>
                </IconButton>
    <Typography variant='h5' style={{flexGrow:1}}>
        Bird
    </Typography>

                <Button onClick={handleAccount} color='inherit'>
                Login
            </Button>



            <img className={classes.image} src={birdpic} alt="birdpic" height = "60"/>
                <Typography className={classes.heading}  variant="h2" align="center">{"  "}Coffee Shop Library {"  "}</Typography>
            <img className={classes.image2} src={birdpicInverted} alt="birdpic" height = "60"/> 
     
            </Toolbar>
            </AppBar>
        <div >
        <Drawer   style={{color: "green"}} height="100%" anchor={anchor} open={open} onClose={() =>{setOpen(false)}}>
                {anchor === "left" ? 
                    <div>
            
                        
                        <Grid item xs={1} sm={5}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    

                    </div>
                    :
                    <div>
                        <h5>This is the Bottom drawer</h5>
                    </div>
                    
                }
           
        </Drawer>
        </div>
            <Grow in>
                <Container>
            
                    <Grid cols={3} className={classes.mainContainer} style={{flexGrow:1}} container justify="space-between" alignItems="stretch" spacing={5}>
                        
                     
                        <GridList  cols={3} item xs={12} sm={8}>
                            <Posts setCurrentId={setCurrentId}/>
                        </GridList >
                    </Grid>
                </Container>
            </Grow>
        </Container>
        </div>
    );
}

export default App;