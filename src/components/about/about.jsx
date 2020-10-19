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
                                                <img src='https://media.giphy.com/media/SqBSJzMUXtctpzpJ4m/giphy.gif' alt="profile" />
                                            </div>
                                        </Grid>
                                        <Grid xs={12} md={6}>
                                            <div className="about-desc">
                                                <p><b>Hi there!</b></p>
                                                <p>
                                                    My name is Brandon sellam. I am 24 years old from France, Paris living now in New York. I speak three languages: French, Hebrew, English.
                                                     I have got my Bachelor's degree in International Business and Marketing. Learning new things, developing new solutions, and solving complicated problems satisfy me. I have recently completed a Full Stack Web Developer Certificate from Columbia University. 
                                                    I am a person that is passionate, devoted, always positive, serious, disciplined, and very motivated.
                                                     My motto is, "My Duty Is Sucess."
                            </p>
                                                
                                                <p>
                                                    I have my account on Github, where I put up many questions and even answers the existing ones.
                                                    Other than enjoying technical tasks, I love doing adventures, watching movies, helping artists, and doing street plays.
                                                    I want to develop my portfolio with many different projects and help others with them.
                            </p>
                            <p>                     I have learned to use browser technology like  HTML, CSS, JavaScript, jQuery, and Bootstrap. I have interacted with APIs, JSON, AJAX, Real-Time Cloud Database via Firebase. I also gain the skills of a Cutting Edge Development technology like React.js. Also, I have learned Database Technology like MySQL and MongoDB. On the server-side, I have learned to use Templating Engines, Sessions,
                                                    writing tests, Node.js, Express.js, Creating APIs, MVC, User Authentication, ORM (Sequelize). Besides, I have learned the algorithms and data structure.
                                                    I also learned to use developing tools like Heroku, GIT, and Github.
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
