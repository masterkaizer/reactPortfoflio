import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';

function Footer() {
    return (
        <>
            <div className="header">
                <AppBar position="static" color="default">
                    <Grid container>

                        <Grid xs={12} sm={12} className="nav-bottom-bar" style={{ display: 'flex', justifyContent: 'center' }}>
                            <ul>
                                <li >
                                <a href ="https://github.com/masterkaizer">
                                    <img src="images/github.png" />
                                    </a>
                                </li>
                                <li >
                                <a href ="https://www.linkedin.com/mwlite/in/sellam-brandon-6941a074">
                                    <img src="images/linkedin.png" style={{ height: '20px', marginTop: '5px' }} />
                                    </a>
                                </li>
                                <li >
                                <a href ="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:d34b9336-f9c5-4cfa-ab19-724ecad0efce">
                                    <img src="images/resume.png" />
                                    </a>
                                   
                                </li>
                                <li >
                                <a href="mailto:brandon.sellam@gmail.com" target="_blank">
                                <img src="images/email.png" />
                                    </a>
                                </li>
                                <li >
                                <a href="tel:+1929-320-5965" target="_blank">
                                <img src="images/phone.png" />
                                    </a>
                                   
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                </AppBar>
            </div>
        </>
    );
}

export default Footer;
