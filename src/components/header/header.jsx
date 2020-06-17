import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';
// i am adding here a clock 
class Header extends React.Component {
  

    about = () => {
        this.props.history.push('/about')
    }

    portfolio = () => {
        this.props.history.push('/portfolio')
    }

    contact = () => {
        this.props.history.push('/contact')
    }

    render() {
        return (
            <>
                <div className="header">
                    <AppBar position="static" style={{ backgroundColor: '#616161' }}>
                        <Grid container>
                            <Grid xs={12} sm={1} className="nav-bar-title">
                            </Grid>
                            <Grid xs={12} sm={7} className="nav-bar-title">
                                <p>Brandom J Sellam</p>
                            </Grid>
                            <Grid xs={12} sm={4} className="nav-bar-more">
                                <ul>
                                    <li onClick={this.about}>About</li>
                                    <li onClick={this.portfolio}>Portfolio</li>
                                    <li onClick={this.contact}>Contact</li>
                                </ul>
                            </Grid>
                        </Grid>


                    </AppBar>

                                
                </div>
            </>
        );
    }
}

export default withRouter(Header);
