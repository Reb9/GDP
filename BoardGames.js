import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import './style.css'

const useStyles = makeStyles((theme) => ({
    mainGrid: {
      marginTop: theme.spacing(3),
    },
  }));

  export default function BoardGames() {
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
                        <Grid container item xs={8} spacing={1} style = {{ paddingBottom: '10px', paddingLeft:'20px', justifyContent:"center"}}>
                            <h1 className='title'> Restricted Access! </h1>
                            <Grid container spacing={6} className={classes.mainGrid} style = {{paddingTop:'25px', paddingBottom: '50px', justifyContent:"center"}} >
                            <h2 className='subtitle'>Access to this resource is denied.</h2>
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
            </div>
        </main>         
    </Container>
    <div> </div>
    </React.Fragment>
    );
  }
  