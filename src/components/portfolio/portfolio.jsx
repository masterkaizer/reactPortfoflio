import React from 'react';
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
                    gitHub: ' https://github.com/masterkaizer/thebestnotetackereverbybs.git'
                },
                {
                    name: 'Password Generator.',
                    urlToProject: 'https://masterkaizer.github.io/homework-3/',
                    image: 'https://media.giphy.com/media/h86GghCpRMWDWTHO6C/giphy.gif',
                    gitHub: 'https://github.com/masterkaizer/homework-3.git'
                },
                {
                    name: 'Code Quiz',
                    urlToProject: 'https://masterkaizer.github.io/homework4/',
                    image: 'https://media.giphy.com/media/LmxNgUUHlEr10q5ORb/giphy.gif',
                    gitHub: 'https://github.com/masterkaizer/homework4.git'
                },
                {
                    name: 'Day Planner',
                    urlToProject: 'https://masterkaizer.github.io/homework5/',
                    image: 'https://media.giphy.com/media/MFHuCY48k3dYPPWy8w/giphy.gif',
                    gitHub: ' https://github.com/masterkaizer/homework5.git'

                },
                {
                    name: 'Weather Dashboard',
                    urlToProject: 'https://masterkaizer.github.io/BlueSky-B.J.S/',
                    image: 'https://media.giphy.com/media/eiorDwPaEjgi5Sg399/giphy.gif',
                    gitHub: 'https://github.com/masterkaizer/BlueSky-B.J.S.git'
                },
                {
                    name: 'Employee tracker app',
                    urlToProject: 'https://github.com/masterkaizer/EMS.git',
                    image: 'https://media.giphy.com/media/iDTnfocthmuKCBEuBG/giphy.gif',
                    gitHub: 'https://masterkaizer.github.io/EMS/'
                },
                {
                    name: 'This an node express handle bar app.',
                    urlToProject: 'https://burger4ever.herokuapp.com/',
                    image: 'https://media.giphy.com/media/WpCRekc0BE8Uov6BY0/giphy.gif',
                    gitHub: 'https://github.com/masterkaizer/burger4ever.git'
                    // In GD We Trust, i know what i am coding i just like to do stuff that are out of the box but forget to comment on it.
                },
                {
                    name: 'This is a progressive budget application.',
                    urlToProject: 'https://brandonpocketpatrol.herokuapp.com/',
                    image: 'https://media.giphy.com/media/kDZVfpFt9dUE7Pxs9X/giphy.gif',
                    gitHub: ' https://github.com/masterkaizer/brandonpocketpatrol.git'  
                },
                {
                    name: 'This is a fitness tracker application realized with experience in fitness.',
                    urlToProject: 'https://fitness6bs.herokuapp.com/',
                    image: 'https://media.giphy.com/media/huaUIoaxWjhx2PNQuJ/giphy.gif',
                    gitHub: 'https://github.com/masterkaizer/fitness6bs.git'
                },
                {
                    name: ' This is my second team  project.',
                    urlToProject: 'https://food-diaries.herokuapp.com/',
                    image: 'https://media.giphy.com/media/YN1IdCWsWldLgya2b5/giphy.gif',
                    gitHub: ' https://github.com/jiyoon9886/food_diaries'
                },
                {
                    name: 'Hey this is my first groupes project.',
                    urlToProject: 'https://bmweinstein7.github.io/CU-NYC-Project/',
                    image: 'https://media.giphy.com/media/fvMOBQFE3yLYXQbKrz/giphy.gif',
                    gitHub: 'https://github.com/BMWeinstein7/CU-NYC-Project.git'
                },
                {
                    name: 'This is an team profile generator.',
                    urlToProject: 'https://masterkaizer.github.io/TMPG/',
                    image: 'https://media.giphy.com/media/dAuqc8iaF0ZnxeHPaN/giphy.gif',
                    gitHub: 'https://github.com/masterkaizer/TMPG.git'
                },
                {
                    name: 'This is an employee directory app.',
                    urlToProject: 'https://udemployeebrandonjsellam.herokuapp.com',
                    image: 'https://media.giphy.com/media/mChRDUkcSA4P6gjL7H/giphy.gif',
                    gitHub: 'https://github.com/masterkaizer/MyUD.git'
                },
                {
                    name: 'This is my final group project.',
                    urlToProject: 'https://thedogpromenade.herokuapp.com',
                    image: 'https://media.giphy.com/media/jRkxny1byUTnFOmdPT/giphy.gif',
                    gitHub: 'https://github.com/masterkaizer/finalproj.git'
                }, 

                {
                    name: 'google book react search app.',
                    urlToProject: 'https://book-box-by-bs.herokuapp.com/',
                    image: 'https://media.giphy.com/media/h4TrXsrE6dKMB7tTQU/giphy.gif',
                    gitHub: 'https://github.com/masterkaizer/gb852963.git'
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
