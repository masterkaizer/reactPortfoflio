import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

class Contact extends React.Component {

    render() {
        return (
            <>
                <div className="about">

                    <Grid container spacing={3}>

                        <Grid xs={12} md={2}>
                        </Grid>
                        <Grid xs={12} md={6}>
                            <h1 className="border-bottom">Contact</h1>
                            <Card>
                                <CardContent>
                                    <Grid container spacing={3}>

                                        <Grid item xs={12} md={12}>
                                            <TextField
                                                label="Name"
                                                variant="outlined"
                                                name="name"
                                                type="text"
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <TextField
                                                label="Email Id"
                                                variant="outlined"
                                                name="email"
                                                type="email"
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <TextField
                                                label="Suggestions"
                                                variant="outlined"
                                                name="message"
                                                type="text"
                                                multiline
                                                rows={4}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                        <Button variant="outlined" href="index.html" style={{ float: 'right' }}
                                            color="secondary">Submit</Button>
                                          
                                         
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>

                        </Grid>
                        <Grid xs={12} md={4}>
                        </Grid>

                    </Grid>

                </div>
            </>
        );
    }
}

export default Contact;
