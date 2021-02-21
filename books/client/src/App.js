import React, {useState, useEffect } from "react";
import {Container, AppBar, Paper, TextField, Typography, Grow, Grid, GridList, Button, Toolbar, IconButton, Drawer, Divider  } from "@material-ui/core";
//importing posts from components
import Books from './components/Books/Books';
import {getBooks} from './actions/books'
import Form from './components/Form/Form';
import useStyles from './styles';
import{useDispatch} from 'react-redux';
import birdpic from './images/birdpic.png'
import birdpicInverted from './images/birdpicInverted.png';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PostAddIcon from '@material-ui/icons/PostAdd';

const App = () => {
    //if the current id is not selected make it null
const [currentId, setCurrentId] = useState(null);    
const [open, setOpen] = useState(false);    
const [anchor, setAnchor] = useState('left');
const handleAccount = () => {
    setAnchor('right')
    setOpen(true)
}
const handleDrawer = () => {
    setAnchor('left')
    setOpen(true)
}
const classes = useStyles();
const dispatch = useDispatch();


useEffect(() => {
    dispatch(getBooks());
}, [currentId, dispatch]);

//            <AppBar className={classes.appBar} width="100%" color="secondary" position="relative">

return (
        <Container maxWidth="lg" display='flex'>
        <AppBar className={classes.appBar} color="secondary" position="fixed">
                <Toolbar height="100" width="100px" display='flex'>
       

                <IconButton float='left' edge='start' onClick={handleDrawer} edge="start" align="left" display='flex' edge="start" style={{fill: "white"}} aria-label='menu'>
                 <PostAddIcon style={{fill: "orange"}} onClick={handleDrawer} />
                </IconButton>
   
    


            <img className={classes.image} src={birdpic} alt="birdpic" height = "60"/>
                <Typography className={classes.heading}  edge="start" variant="h2" align="center">{"  "}Coffee Shop Library {"  "}</Typography>
            <img className={classes.image2} src={birdpicInverted} alt="birdpic" height = "60"/> 
            <IconButton  onClick={handleAccount} color='secondary' aria-label='menu'>
                <AccountCircleIcon onClick={handleAccount}  style={{fill: "orange"}}/>
                </IconButton>
            </Toolbar>
            </AppBar>
        <Drawer   style={{color: "green"}} height="100%" anchor={anchor} open={open} onClose={() =>{setOpen(false)}}>
                {anchor === "left" ? 
                    <div>
            
                        
     
                        <Grid item xs={1} sm={5}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>


                    </div>
                    :
                    <div>


<Grid item xs={4} sm={1}>
 <Paper     style={{   padding: "0",
    width: '225px',
    height: '100%',
    paddingBlockStart:'30px',
    paddingBlockEnd:'500px',
    padding: '0px',
    backgroundColor:'rgba(75,125,135)'
    }}>
        <form className={`${classes.root} ${classes.form}`} style={{  
                display: 'flex',
                paddingBlockEnd:'10px',
                flexWrap: 'wrap',
                justifyContent: 'center',
                spacing:'50'
            }} >
          <Typography variant="h6" style={{marginBottom: 15}}fullWidth align='center'>Registration</Typography>

          <TextField name="First name" variant="outlined" label="First name"  />
          <TextField name="Last name" variant="outlined" label="Last name"  />
          <TextField name="Email" variant="outlined" label="Email"  />
          <TextField name="First name" variant="outlined" label="Password"  />
          <TextField name="Last name" variant="outlined" label="Confirm Password"  />
          <TextField name="Address" variant="outlined" label="Address"  />
          <TextField name="City" variant="outlined" label="City"  />
          <TextField name="State" variant="outlined" label="State"  />
          <TextField name="Country" variant="outlined" label="Country"  />
          </form>
          <form spacing='50'>          
            <Button style={{marginBottom: 5}}  spacing = '50' variant="contained" color="primary" size="large" type="submit" fullWidth>Sign up</Button>
           </form>
            <form spacing='50'> 
          <Button className={classes.buttonSubmit} spacing = '50' variant="contained" color="secondary" size="medium"  fullWidth>Login</Button>
          </form>

       
       
      </Paper>
                        </Grid>

                       
                    </div>
                    
                }
           
        </Drawer>
      
            <Grow in>
                <Container>
            
                    <Grid className={classes.mainContainer} container justify="space-between" spacing={5}>
                        
                     
                        <GridList cols={ 3} direction='column' item xs={3} sm={8}>
                            <Books setCurrentId={setCurrentId}/>
                        </GridList >
                    </Grid>
                </Container>
            </Grow>
        </Container>
      
    );
}
//to make books larger change Grid to GridList in Books right here

export default App;