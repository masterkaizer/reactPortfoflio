import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class About extends React.Component {

    render() {
        return (
            <>
                <div className="about">

                    <Grid container spacing={3}>

                        <Grid xs={12} md={2}>
                        </Grid>
                        <Grid xs={12} md={8}>
                        <h1 className="border-bottom">About Me</h1>
                            <Card>
                                <CardContent>
                                    <Grid container spacing={3}>

                                        <Grid xs={12} md={6}>
                                            <div className="about-img">
                                                <img src='images/profile.jpg' alt="profile" />
                                            </div>
                                        </Grid>
                                        <Grid xs={12} md={6}>
                                            <div className="about-desc">
                                                <p><b>Hi there!</b></p>
                                                <p>
                                                    My name is Brandon sellam. I am starting my journey into this coding world.
                                                    I am 24 years old from France, Paris living now in New York. I speak 3 languages: French, Hebrew, English. I have got my Bachelor's degree in International business and marketing.
                                                    I am very keen to know the reason behind whatever technical is happening around me. Learning new things, developing new solutions and solving complex problems
                                                    gives me satisfaction.
                            </p>
                                                
                                                <p>
                                                    I have my account on Github, where I put up many questions and even answers the existing ones.
                                                    Other than enjoying technical tasks, I love doing adventures, watching movies, helping artists, and doing street plays.
                                                    I want to develop my portfolio with many different projects and help others with them.
                            </p>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid xs={12} md={2}>
                        </Grid>

                    </Grid>

                </div>
            </>
        );
    }
}

export default About;
