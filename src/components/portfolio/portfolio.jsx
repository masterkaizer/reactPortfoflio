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
                    gitHub: ' https://github.com/masterkaizer/homework9.0.git'
                },
                {
                    name: 'Note Taker',
                    urlToProject: 'https://note6bs.herokuapp.com/',
                    image: 'https://media.giphy.com/media/SXgbKiEY7lHrr3vvz8/giphy.gif',
                    gitHub: 'https://github.com/masterkaizer/NoteTaker-BrandonSellam.git'
                },
                {
                    name: 'Password Generator.',
                    urlToProject: 'https://masterkaizer.github.io/homework-3/',
                    image: 'images/codegen.png',
                    gitHub: 'https://github.com/masterkaizer/homework-3.git'
                },
                {
                    name: 'Code Quiz',
                    urlToProject: 'https://masterkaizer.github.io/homework4/',
                    image: 'images/codeq.png',
                    gitHub: 'https://github.com/masterkaizer/homework4.git'
                },
                {
                    name: 'Day Planner',
                    urlToProject: 'https://masterkaizer.github.io/homework5/',
                    image: 'images/daypl.png',
                    gitHub: ' https://github.com/masterkaizer/homework5.git'

                },
                {
                    name: 'Weather Dashboard',
                    urlToProject: 'https://masterkaizer.github.io/BlueSky-B.J.S/',
                    image: 'images/weather.png',
                    gitHub: 'https://github.com/masterkaizer/BlueSky-B.J.S.git'
                },
                {
                    name: 'Employee tracker app',
                    urlToProject: 'https://masterkaizer.github.io/EMPLOYEES-TRACKER-APP',
                    image: 'https://media.giphy.com/media/iDTnfocthmuKCBEuBG/giphy.gif',
                    gitHub: 'https://github.com/masterkaizer/EMPLOYEES-TRACKER-APP.git'
                },
                {
                    name: 'This an node express handle bar app.',
                    urlToProject: 'https://burger4ever.herokuapp.com/',
                    image: 'images/burger4vegan.png',
                    gitHub: 'https://github.com/masterkaizer/Eat-the-Burger.git'
                    // In GD We Trust, i know what i am coding i just like to do stuff that are out of the box but forget to comment on it.
                },
                {
                    name: 'This is a progressive budget application.',
                    urlToProject: 'https://brandonpocketpatrol.herokuapp.com/',
                    image: 'images/78.png',
                    gitHub: 'https://github.com/masterkaizer/Progressive-Budget-app.git'
                },
                {
                    name: 'This is a fitness tracker application realized with experience in fitness.',
                    urlToProject: 'https://fitness6bs.herokuapp.com/',
                    image: 'images/fitnesstracker.png',
                    gitHub: ' https://github.com/masterkaizer/Fitness-Tracker-by-BS.git'
                },
                {
                    name: ' This is my second team  project.',
                    urlToProject: 'https://food-diaries.herokuapp.com/',
                    image: 'images/logo.jpeg',
                    gitHub: ' https://github.com/jiyoon9886/food_diaries'
                },
                {
                    name: 'Hey this is my first groupes project.',
                    urlToProject: 'https://bmweinstein7.github.io/CrU-NYC-Project/',
                    image: 'images/proj1.png',
                    gitHub: 'https://github.com/BMWeinstein7/CU-NYC-Project.git'
                },
                {
                    name: 'This is an team profile generator.',
                    urlToProject: 'https://masterkaizer.github.io/homework-10/',
                    image: 'https://media.giphy.com/media/dAuqc8iaF0ZnxeHPaN/giphy.gif',
                    gitHub: 'https://github.com/masterkaizer/homework-10.git'
                },
                {
                    name: 'This is an employee directory app.',
                    urlToProject: 'https://udemployeebrandonjsellam.herokuapp.com',
                    image: 'images/MyUd.png',
                    gitHub: 'https://github.com/masterkaizer/MyUD.git'
                },
                {
                    name: 'This is my final group project.',
                    urlToProject: 'https://thedogpromenade.herokuapp.com',
                    image: 'https://media.giphy.com/media/dUMpZT6ALoLIYCW2WC/giphy.gif',
                    gitHub: 'https://github.com/masterkaizer/finalproj.git'
                }, 

                {
                    name: 'google book react search app.',
                    urlToProject: '#',
                    image: 'https://media.giphy.com/media/l4FnZtraqkDwk05VJa/giphy.gif',
                    gitHub: ''
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
