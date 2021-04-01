import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import './style.css'
import {faStickyNote} from '@fortawesome/free-solid-svg-icons';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import USBPowerBank1 from './USBPowerBank1.jpg'

const useStyles = makeStyles((theme) => ({
    mainGrid: {
      marginTop: theme.spacing(3),
    },
  }));

  export default function Home() {
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
                    <h1 className='title'> Gadgets </h1>
                    <Grid container spacing={6} className={classes.mainGrid} style = {{paddingTop:'25px', paddingBottom: '50px', justifyContent:"center"}} >
                        </Grid>
                    <Grid container item xs={4} spacing={1} style = {{ paddingBottom: '10px', justifyContent:"center"}}>
                    <div>
                        <img src={USBPowerBank1} className="product" alt="USB Power Bank"/>
                            <h5 className='subtitle'>USB Power Bank 10000mAH</h5>
                            <p className='subtitle'>Code</p>
                        </div>
                        <select>
                            <option selected value="supplier">Choose Supplier</option>
                            <option value="supplier 1">Supplier 1</option>
                            <option value="supplier 2">Supplier 2</option>
                        </select>

                    </Grid>

                    <Grid container item xs={4} spacing={1} style = {{ paddingBottom: '10px', paddingLeft:'20px', justifyContent:"center"}}>
                        <div>
                            <img src={USBPowerBank1} className="product" alt="USB Power Bank"/>
                            <h5 className='subtitle'>USB Power Bank 20000mAH</h5>
                            <p className='subtitle'>£9.99</p>
                        </div>    
                        <button className="btn button">Add to order</button>  
                        
                    </Grid>
                    <Grid container item xs={4} spacing={1} style = {{ paddingBottom: '10px', justifyContent:"center"}}>
                    <div>
                        <img src={USBPowerBank1} className="product" alt="USB Power Bank"/>
                            <h5 className='subtitle'>USB Power Bank 25800mAH</h5>
                            <p className='subtitle'>£9.99</p>
                        </div>    
                        <button className="btn button">Add to order</button>
                        
                    </Grid>
                    <Grid container item xs={4} spacing={1} style = {{ paddingBottom: '10px', justifyContent:"center"}}>
                    <div>
                        <img src={USBPowerBank1} className="product" alt="USB Power Bank"/>
                            <h5 className='subtitle'>USB Power Bank 10000mAH</h5>
                            <p className='subtitle'>£9.99</p>
                        </div>    
                        <button className="btn button">Add to order</button>
                        
                    </Grid>
                    <Grid container spacing={6} className={classes.mainGrid} style = {{paddingTop:'25px', paddingBottom: '50px', justifyContent:"center"}} >
                      &nbsp;
                    </Grid>  
                  </Grid>
                  
                  <Grid container item xs={2} spacing={1} style = {{ paddingBottom: '10px', justifyContent:"center"}}>
                    <Link to="/*" className="item"><FontAwesomeIcon icon={faBriefcase}/>&nbsp; Orders </Link>
                    <Grid container spacing={6} className={classes.mainGrid} style = {{paddingTop:'25px', paddingBottom: '50px', justifyContent:"center"}} ></Grid>
                    <Link to="/OrderForm" className="btn button" role="button">Order Form</Link>
                    </Grid>
                  </Grid>
                </div>
            </main>         
        </Container>
        <div> </div>
    </React.Fragment>
    );
  }
  