import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Project from "../project/project";

class Portfolio extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            allprojects: [
                {
                    name: 'Readme Generator',
                    urlToProject: 'https://masterkaizer.github.io/homework9.0/',
                    image: 'https://media.giphy.com/media/dAuqc8iaF0ZnxeHPaN/giphy.gif',
                },
                {
                    name: 'Note Taker',
                    urlToProject: 'https://note6bs.herokuapp.com/',
                    image: 'https://media.giphy.com/media/SXgbKiEY7lHrr3vvz8/giphy.gif'
                },
                {
                    name: 'Password Generator.',
                    urlToProject: 'https://masterkaizer.github.io/homework-3/',
                    image: 'images/codegen.png'
                },
                {
                    name: 'Code Quiz',
                    urlToProject: 'https://masterkaizer.github.io/homework4/',
                    image: 'images/codeq.png'
                },
                {
                    name: 'Day Planner',
                    urlToProject: 'https://masterkaizer.github.io/homework5/',
                    image: 'images/daypl.png'
                },
                {
                    name: 'Weather Dashboard',
                    urlToProject: 'https://masterkaizer.github.io/BlueSky-B.J.S/',
                    image: 'images/weather.png'
                },
                {
                    name: 'This is a progressive budget application.',
                    urlToProject: 'https://brandonpocketpatrol.herokuapp.com/',
                    image: 'images/78.png'
                },
                {
                    name: 'This is a fitness tracker application realized with experience in fitness.',
                    urlToProject: 'https://fitness6bs.herokuapp.com/',
                    image: 'images/fitnesstracker.png' 
                },
                {
                    name: ' This is my second team  project.',
                    urlToProject: 'https://food-diaries.herokuapp.com/',
                    image: 'images/logo.jpeg'
                },
                {
                    name: 'Hey this is my first groupes project.',
                    urlToProject: 'https://bmweinstein7.github.io/CU-NYC-Project/',
                    image: 'images/proj1.png'
                },
                {
                    name: 'This is an readme generator app.',
                    urlToProject: 'https://masterkaizer.github.io/homework9.0/',
                    image: 'https://media.giphy.com/media/dAuqc8iaF0ZnxeHPaN/giphy.gif'
                },
                {
                    name: 'This is an employee directory app.',
                    urlToProject: 'https://udemployeebrandonjsellam.herokuapp.com',
                    image: 'images/MyUd.png'
                },
                {
                    name: 'This is my final group project.',
                    urlToProject: '#',
                    image: 'https://media.giphy.com/media/dUMpZT6ALoLIYCW2WC/giphy.gif'
                }, 

                {
                    name: 'google book react search app.',
                    urlToProject: '#',
                    image: 'https://media.giphy.com/media/l4FnZtraqkDwk05VJa/giphy.gif'
                }, 



            ]
        }
    }


    render() {
        
        return (
            <>
                <div className="projects">
                    <Grid container spacing={3}>
                        <Grid xs={12} sm={2}>
                        </Grid>
                        <Grid xs={12} sm={8}>
                        <h1 className="border-bottom">Projects</h1>
                            <Grid container spacing={6}>
                                {
                                    this.state.allprojects.map((project) => {
                                        return (
                                            <Project {...project}></Project>
                                        )
                                    })
                                }
                            </Grid>
                        </Grid>
                        <Grid xs={12} sm={2}>
                        </Grid>
                    </Grid>
                </div>
            </>
        );
    }
}

export default Portfolio;
