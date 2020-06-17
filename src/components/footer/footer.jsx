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
                                    <img src="images/github.png" alt="github"/>
                                    </a>
                                </li>
                                <li >
                                <a href ="https://www.linkedin.com/mwlite/in/sellam-brandon-6941a074">
                                    <img src="images/linkedin.png" style={{ height: '20px', marginTop: '5px' }} alt="linkedin" />
                                    </a>
                                </li>
                                <li >
                                <a href ="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:e5106998-b4de-4394-b80c-9ab670ca7f66">
                                    <img src="images/resume.png"  alt="resume"/>
                                    </a>
                                </li>
                                <li >
                                <a href="mailto:brandon.sellam@gmail.com" target="_blank" rel="noopener noreferrer">
                                <img src="images/email.png" alt="email"/>
                                    </a>
                                </li>
                                <li >
                                <a href="tel:+1929-320-5965" target="_blank"  rel="noopener noreferrer">
                                <img src="images/phone.png" alt="phone"/>
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
//made with love.
