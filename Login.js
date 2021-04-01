import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import './style.css'
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    mainGrid: {
      marginTop: theme.spacing(3),
    },
  }));

  export default function Login() {
    const classes = useStyles();
  
    return (
    <React.Fragment>
        <Container maxWidth="lg" style={{backgroundColor:" #999999"}}>
            <main>
                <div className={classes.root}>
                    <Grid container spacing={1}>
                        <Grid container item xs={2} spacing={1} style = {{ paddingBottom: '10px', justifyContent:"left"}}>
                            &nbsp;
                        </Grid>
                        <Grid container item xs={8} spacing={1} style = {{ paddingBottom: '10px', justifyContent:"center" }}>
                            &nbsp;
                            <Grid container spacing={6} className={classes.mainGrid} style = {{paddingTop:'25px', paddingBottom: '50px', justifyContent:"center"}} >
                            &nbsp;
                            </Grid>
                            <Grid container spacing={6} className={classes.mainGrid} style = {{paddingTop:'25px', paddingBottom: '50px', justifyContent:"center"}} >
                                &nbsp;
                            </Grid>
                            
                            <Grid container item xs={8} spacing={1} style = {{ paddingBottom: '10px',paddingTop:'10px', justifyContent:"center", backgroundColor:" #D8D8D8"}}>      
                                <Grid container spacing={6} className={classes.mainGrid} style = {{paddingTop:'25px', paddingBottom: '50px', justifyContent:"center"}} >
                                <h1 className='title'> Gadgets 4 U </h1>
                                </Grid>
                                <form className='form'>
                                    <div className='form-inputs'>
                                        <label className='form-label , subtitle'>Employee ID &nbsp;</label>
                                        <input className='form-input' type='text' name='employeeID'/>
                                    </div>
                                    <div className ='form-inputs'>
                                        <label className='form-label , subtitle'>Password &nbsp;</label>
                                        <input className='form-input' type='password' name='employeePassword'/>
                                    </div>
                                    <Link to="/Password" className="item">Change password &nbsp; &nbsp;</Link>
                                    <Link to="/Home" className="btn btn-primary" role="button">Login</Link>
                                </form>
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
                </div>
            </main>         
        </Container>
    </React.Fragment>
    );
  }
  