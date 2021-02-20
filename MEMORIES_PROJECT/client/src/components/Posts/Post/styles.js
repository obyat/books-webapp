import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
 
  posttitle: {
    margin: '0px 0px 0px 0px',
    fontSize: '20px',
    fontFamily: 'Arial',
  },

  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    // width: '10%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '40px',
    left: '20px',
    right: '30px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 20px',
  },
  title: {
    padding: '0px 16px',
  },
  publish: {
    margin: '-10px 0px 10px 1px',
  },


  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  
});