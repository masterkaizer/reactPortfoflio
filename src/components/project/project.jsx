import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


export default function project(props) {
    return (<>

        <Grid item xs={12} md={6}>
            <Card >
                <CardActionArea onClick={() => { window.open(props.urlToProject) }}>
                    <CardMedia
                        style={{ height: '260px' }}
                        image={props.image}
                        title={props.name}
                    />
                </CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Description here
                        </Typography>
                </CardContent>

                <CardActions onClick={() => { window.open(props.gitHub) }}>
                    <Button size="small" color="secondary">
                        Open in Github
                    </Button>
                </CardActions>
            </Card>
        </Grid>

    </>)
}

// export default project