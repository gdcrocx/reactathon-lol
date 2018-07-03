import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import { withRouter } from 'react-router'
const styles = theme => ({
  cardRow: {
    width: "100%",
    margin: "0 auto"
  },
  card: {
    maxWidth: 400,
    width: "400px",
    float: "left",
    marginLeft: "30px",
    marginTop: "30px"
  },
  button: {
    marginLeft: 50
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto"
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class RecipeReviewPrevCard extends React.Component {
	constructor(props) {
        super(props);
       console.log("kk");
        this.onChange = this.onChange.bind(this);
        
    }

  state = { expanded: false };

  /*componentDidMount() {
    axios.get(`https://demo2123069.mockable.io/events`).then(res => {
      const events = res.data;
      this.setState({ events });
    });
  }*/

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  leaderboardClick = () => {
    this.props.history.push('/leadergrid');
  };
	onChange(e){
		console.log("lll");
		this.setState({[e.target.name]:e.target.value});
	};
  render() {
    const { classes } = this.props;
    
    var eventarr = [
      {
        eventId: 1,
        eventName: "Event 1",
        eventDescription: "Event 1 Description",
        eventReleaseDate: "date",
        eventNominationStartDate: "July 2, 2018",
        eventNominationEndDate: "date",
        eventStartDate: "July 2, 2018",
        eventEndDate: "date",
        eventDemoDate: "date",
        eventFinaleDate: "date",
        eventEnabled: "date"
      }
    ];
    var extraDesc,extraDesc1,extraDesc2,iconBtn = ""; 
	var extraDescVal,extraDesc1Val,extraDesc2Val,leaderBtn = ""; 
    if (
      this.props.eventdetails !== undefined 
    ) {
      eventarr = this.props.eventdetails;
	 
    }
    var me = this;
    return (
      <div className={classes.cardRow}>
        {eventarr.map(function(item) {
		 extraDesc2="Hackathon released on ";
		 extraDesc2Val=item.eventReleaseDate;
		 extraDesc = "Hackathon started on ";
		 extraDescVal=item.eventStartDate;
		 extraDesc1 = "Hackathon ended on ";  
		 extraDesc1Val=item.eventEndDate;
		 iconBtn = "iconBtn"+item.eventId;
		 leaderBtn="leaderBtn"+item.eventId;
		 
          return (
            <Card key={item.eventId} className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="Recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                action={
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                }
                title={item.eventName}
                subheader={item.eventStartDate}
              />
              <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography component="p">
                 {item.eventDescription}
                </Typography>
              </CardContent>
              <CardActions className={classes.actions} disableActionSpacing>
                <IconButton aria-label="Add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="Share">
                  <ShareIcon />
                </IconButton>

                <Button id={leaderBtn}
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={me.leaderboardClick}
                >
                  Leaderboard
                </Button>
		<IconButton key={iconBtn}
                  className={classnames(classes.expand, {
                    [classes.expandOpen]: me.state.expanded
                  })}
                  onClick={me.handleExpandClick}
                  aria-expanded={me.state.expanded}
                  aria-label="Show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={me.state.expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph variant="body2">
                    {item.eventLongDescription}
                  </Typography>
                  <Typography paragraph>
				  {extraDesc2}{extraDesc2Val}
                  </Typography>
				   <Typography paragraph>
				  {extraDesc}{extraDescVal}
                  </Typography>
				   <Typography paragraph>
				  {extraDesc1}{extraDesc1Val}
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          );
		  
        })}
      </div>
    );
  }
}

RecipeReviewPrevCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(RecipeReviewPrevCard));
