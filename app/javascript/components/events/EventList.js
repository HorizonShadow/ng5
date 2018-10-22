import React from "react"
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Query } from 'react-apollo';
import { withStyles } from '@material-ui/core/styles';
import gql from 'graphql-tag';

const query = gql`
  {
    events {
      id
      name
      date
    }
  }
`;

const styles = theme => ({
  title: {
    padding: theme.spacing.unit
  },
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1
  },
  content: {
    flex: '1 0 auto'
  },
  image: {
    width: 151
  }
});

class EventList extends React.Component {
  render () {
    const { classes } = this.props;
    return(
      <React.Fragment>
        <Query
          query={query}
        >
          {({loading, error, data}) => {
            if(loading) return <p>Loading...</p>;
            if(error) return <p>Error</p>;
            return data.events.map(e => {
              return(
                  <Card key={e.id} className={classes.card}>
                    <div className={classes.details}>
                      <CardContent className={classes.content}>
                        <Typography
                          component={'h2'}
                          variant={'title'}
                          gutterBottom
                        >
                          {e.name}
                        </Typography>
                        <Typography component={'p'}>
                          {e.date}
                        </Typography>
                      </CardContent>
                    </div>
                    <CardMedia
                      className={classes.image}
                      image={"https://alpha.tl/logos/342cc8ed9c84ee88bcac3a02bbaa7e9d6c9.png"}
                    />
                  </Card>
              )
            })
          }}
        </Query>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(EventList);
