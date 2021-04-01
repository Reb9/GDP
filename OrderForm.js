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

  export default function OrderForm() {
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
                                    <h1 className='title'> Order form </h1>
                                </Grid>
                                <form className='form'>
                                    <div className='form-inputs'>
                                        <label className='form-label , subtitle'>Employee ID &nbsp;</label>
                                        <input className='form-input' type='text' name='employeeID'/>
                                    </div>
                                    <div className ='form-inputs'>
                                        <label className='form-label , subtitle'>Employee email &nbsp;</label>
                                        <input className='form-input' type='email' name='employeeEmail'/>
                                    </div>
                                    <div className ='form-inputs'>
                                        <label className='form-label , subtitle'>Date &nbsp;</label>
                                        <input className='form-input' type='date' name='date'/>
                                    </div>
                                    <div className ='form-inputs'>
                                        <label className='form-label , subtitle'>Item/s &nbsp;</label>
                                        <input className='form-input' type='textarea' name='Item/s'/>
                                    </div>
                                    <Link to="/OrderRequest" className="btn btn-primary" role="button">Submit from</Link>
                                </form>
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
  