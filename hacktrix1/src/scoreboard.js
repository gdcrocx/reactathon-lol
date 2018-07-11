import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import CustomPaginationScoreTable from "./scoregrid";
import axios from "axios";

const styles = {
  card: {
    maxWidth: 345,
    width: "400px",
    float: "left",
    marginLeft: "30px",
    marginTop: "30px"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  scoregrid: {
    float: "right"
  }
};

const baseUrl = "http://127.0.0.1:8081"
const urls = {
  getMostAwarded: "/users/mostAwarded",
  getMostBadges: "/users/mostBadges"
}

class SimpleMediaCard extends React.Component {

  mostAwardedArr = [];

  componentDidMount() {

    axios.get(baseUrl + urls.getMostAwarded + '/10').then(res => {
      const mostAwardedArr = res.data;
      this.mostAwardedArr = mostAwardedArr;
      this.setState({ mostAwardedArr: mostAwardedArr });
    });

  }

  // axios.get(baseUrl + urls.getMostBadges + '/10').then(res => {
  //   const events = res.data;
  //   this.upcomingEvents = events;
  //   this.setState({ events: events });
  // });

  render() {
    const { classes } = this.props;
    var mostAwarded = [];
    if (
      this.mostAwardedArr !== undefined
    ) {
      mostAwarded = this.mostAwardedArr;
    }
    var count = 0
    // console.log(mostAwarded)

    return (
      <div>
        <br />
        <br />
        <Typography variant="title">Score Board</Typography>
        <br />
        <br />
        {mostAwarded.map(function (item) {
          { count++ }
          return (
            <div>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={item.userImage}
                // title="{}"
                />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    {item.userFirstName} {item.userLastName}
                  </Typography>
                  <Typography gutterBottom variant="title" component="h2">
                    Rank : {count}
                  </Typography>
                  <br />
                  <Typography component="p">
                    No.of Hackathons Participated : {item.userRecognition.badgesJson.eventsParticipationCount} <br /><br />
                    No.of Hackathons Won : {item.userRecognition.badgesJson.eventsWonCount}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
}


SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleMediaCard);
