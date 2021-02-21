import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    
    margin:'0px',
    backgroundColor: 'rgba(0,0,128)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: "orange",
  },
  image: {
     marginLeft: '0px',
     marginRight: '0%',

    // float: 'left',
  },
  
  image2: {
    marginLeft: '0px',
    marginRight: '0%',

   // float: 'left',
 },
  [theme.breakpoints.down('sm')]: {
  mainContainer: {
    color:"pink",
    backgroundColor:"pink",
    // flexDirection:"column-reverse"
    
  } 
}
  
}));