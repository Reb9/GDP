import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import './style.css'
import logo from './logo.PNG';
import {faStickyNote} from '@fortawesome/free-solid-svg-icons';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
      marginTop: theme.spacing(3),
    },
  }));

  export default function OrderRequest() {
    const classes = useStyles();
  
    return (
    <React.Fragment>
        <Container maxWidth="lg" style={{backgroundColor:" #D8D8D8"}}>
          <main>
            <div className={classes.root}>
                <Grid container spacing={1}>
                    <Grid container item xs={2} spacing={1} style = {{ paddingBottom: '10px', justifyContent:"left"}}>
                        <Link to="/Notifications" className="item"><FontAwesomeIcon icon={faStickyNote}/> &nbsp; Notifications </Link>
                    </Grid>
                  
                    <Grid container item xs={8} spacing={1} style = {{ paddingBottom: '10px', justifyContent:"center", backgroundColor: "#ededed" }}>
                    
                        <Grid container item xs={2} spacing={1} style = {{ paddingBottom: '10px', justifyContent:"center"}}>
                            &nbsp;
                        </Grid>
                        <Grid container spacing={6} className={classes.mainGrid} style = {{paddingTop:'25px', paddingBottom: '50px', justifyContent:"center"}} >
                            <Grid container item xs={8} spacing={1} style = {{ paddingBottom: '10px',paddingTop:'10px', justifyContent:"center"}}>      
                                <Grid container spacing={6} className={classes.mainGrid} style = {{paddingTop:'25px', paddingBottom: '50px', justifyContent:"center"}} >
                                    <h1 className='title'> Order request confirmation </h1>
                                    <h2 className='subtitle'>Your order request has been sent to (Manager name)</h2>
                                    <Link to="/Home" className="btn btn-primary" role="button">Return to homepage</Link>
                                    &nbsp; &nbsp;
                                    <Link to="/Notifications" className="btn btn-primary" role="button">Check Notifications</Link>
                                </Grid>
                            </Grid>
                            <Grid container spacing={6} className={classes.mainGrid} style = {{paddingTop:'25px', paddingBottom: '50px', justifyContent:"center"}} >
                                &nbsp;
                            </Grid>
                            <Grid container spacing={6} className={classes.mainGrid} style = {{paddingTop:'25px', paddingBottom: '50px', justifyContent:"center"}} >
                                &nbsp;
                            </Grid>
                        </Grid>  
                        <Grid container item xs={2} spacing={1} style = {{ paddingBottom: '10px', justifyContent:"center"}}>
                         &nbsp;
                        </Grid>
                    </Grid>
                </Grid>  
            </div>
        </main>         
    </Container>
    </React.Fragment>
    );
  }
  