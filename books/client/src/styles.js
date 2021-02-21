import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(0.2),
      backgroundColor: 'transparent',
      display: 'flex',
      flexWrap: 'wrap',
      height:'100%',
      justifyContent: 'center',
    },
  },
  appBar: {
    
    margin:'44px, 40, 40px, 40',
    backgroundColor: 'rgba(0,0,128)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight:'10px'
  },
  heading: {
    color: "orange",
  },
  image: {
     marginLeft: '155px',
     marginRight: '0%',

    // float: 'left',
  },
  
  image2: {
    marginLeft: '0px',
    marginRight: '180px',

   // float: 'left',
 },
  [theme.breakpoints.down('sm')]: {
  mainContainer: {
    color:"pink",
    backgroundColor:"pink",
    // flexDirection:"column-reverse"
    
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(0.2),
      backgroundColor: 'transparent',
      display: 'flex',
      flexWrap: 'wrap',
      height:'100%',
      justifyContent: 'center',
    },
  },
  newpaper: {
    padding: theme.spacing(1),
    backgroundColor: 'rgba(99,122,125,10)',
    width: '260px',
    height: '100%',
    paddingBlockStart:'30px',
    paddingBlockEnd:'500px',
    padding: '5px',
  },
  drawer: {
    backgroundColor: "purple",
    background: "blue",
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  }
}));
