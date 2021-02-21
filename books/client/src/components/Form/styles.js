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
  paper: {
    padding: theme.spacing(1),
    backgroundColor:'rgba(75,125,135)',
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
}));