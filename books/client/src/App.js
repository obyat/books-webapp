import React, {useState, useEffect } from "react";
import {Container, AppBar, Typography, Grow, Grid, GridList, Button, Toolbar, IconButton, Drawer  } from "@material-ui/core";
//importing books from components
import Books from './components/Books/Books';
import {getBooks} from './actions/books'
import Form from './components/Form/Form';
import useStyles from './styles';
import{useDispatch} from 'react-redux';
import birdpic from './images/birdpic.png'
import birdpicInverted from './images/birdpicInverted.png';
import {Menu} from '@material-ui/icons';
import AddBoxTwoToneIcon from '@material-ui/icons/AddBoxTwoTone';const App = () => {
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
    dispatch(getBooks());
}, [currentId, dispatch]);

//            <AppBar className={classes.appBar} width="100%" color="secondary" position="relative">

return (
    <div>
        <Container maxWidth="lg">
        <AppBar
        title="MUI Sandbox"
    >
                <Toolbar height="100" width="100px">
                <IconButton edge='start' onClick={handleDrawer} edge="start" color='inherit' aria-label='menu'>
                <AddBoxTwoToneIcon/>
                </IconButton>
    <Typography variant='h5'>
    </Typography>

                <Button onClick={handleAccount} color='inherit'>
            </Button>



            <img className={classes.image} src={birdpic} alt="birdpic" height = "60"/>
                <Typography className={classes.heading}  edge="start" variant="h2" align="center">{"  "}Coffee Shop Library {"  "}</Typography>
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
            
                    <Grid className={classes.mainContainer} container justify="space-between" spacing={5}>
                        
                     
                        <Grid cols={ 3} direction='column' item xs={3} sm={8}>
                            <Books setCurrentId={setCurrentId}/>
                        </Grid >
                    </Grid>
                </Container>
            </Grow>
        </Container>
        </div>
    );
}
//to make books larger change Grid to GridList in Books right here

export default App;