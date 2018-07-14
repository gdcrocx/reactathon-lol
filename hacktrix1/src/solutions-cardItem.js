import React from "react";
// import PropTypes from "prop-types";
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
import grey from "@material-ui/core/colors/grey";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import { withRouter } from 'react-router';
import axios from "axios";
import config from "./config"

var Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

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
  },
  like: {
    color: red[500]
  },
  dislike: {
    color: grey[500]
  }
});

const baseUrl = config.get('service.protocol') + "://" + config.get('service.host') + ":" + config.get('service.port')
const urls = {
  putLikeSolution: "/solutions/like/",
  putDislikeSolution: "/solutions/dislike/"
}

class SolutionsCardItem extends React.Component {
  
  // state = { expanded: false };

  constructor(props) {
    super(props);
    this.state = { expanded: false, like: false };
  }

  handleExpandClick = (e) => {
    e.preventDefault();
    this.setState(state => ({ expanded: !state.expanded }));
  };
  onChange(e) {
    // console.log("lll");
    this.setState({ [e.target.name]: e.target.value });
  };
  downloadClick = () => {
    alert("Downloading File now...")
  };
  likeToggleClick = (e) => {
    this.setState({ like: !this.state.like })
    var url = ""

    if (typeof (this.state.like) != "undefined") {
      
      this.setState({ like: !this.state.like })

      if (!this.state.like) {
        url = baseUrl + urls.putLikeSolution + this.props.item.solutionId + "/1"
      }
      else {
        url = baseUrl + urls.putDislikeSolution + this.props.item.solutionId + "/1"
      }
    }

    if (url !== "undefined") {
      axios.get(url).then(res => {
        console.log("Response: " + JSON.stringify(res))
      });
    }
  };

  render() {
    const { classes } = this.props;

    var extraDesc1, extraDesc2, extraDesc3, extraDesc4 = "";
    var extraDesc1Val, extraDesc2Val, extraDesc3Val = "";

    var me = this;
    var item = this.props.item;

    // console.log(item);
    // console.log("This",this)
    // console.log(this.props.events)

    extraDesc1 = "This solution was submitted on ";
    extraDesc1Val = Months[new Date(item.solutionSubmissionDate).getDay().toString()] + " " + new Date(item.solutionSubmissionDate).getDate().toString() + ", " + new Date(item.solutionSubmissionDate).getFullYear().toString();
    extraDesc2 = " as part of " + this.props.events[0].eventName
    extraDesc3 = "Keywords : "
    extraDesc3Val = item.solutionKeywords.map(function (item) {
      return (
        item + ", "
      );
    })
    if (item.solutionUploadPath) {
      extraDesc4 = "The solution is available at " + item.solutionUploadPath;
    }

    return (
      <Card key={item.solutionId} id={item.solutionId} className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label={item.solutionName} className={classes.avatar}>
              {item.solutionName.charAt(0)}
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={item.solutionName}
          subheader={Months[new Date(item.solutionSubmissionDate).getDay().toString()] + " " + new Date(item.solutionSubmissionDate).getDate().toString() + ", " + new Date(item.solutionSubmissionDate).getFullYear().toString()}
        />
        <CardMedia
          className={classes.media}
          // image={item.solutionImageBanner}
          title={item.solutionName}
        />
        <CardContent>
          <Typography component="p">
            {item.solutionDescription}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites" onClick={me.likeToggleClick}>
            <FavoriteIcon className={classnames({ [classes.like]: this.state.like, [classes.dislike]: !this.state.like })} />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>

          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={me.downloadClick}
          >
            Download
                </Button>
          <IconButton
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
              {item.solutionLongDescription}
            </Typography>
            <Typography paragraph>
              {extraDesc1}{extraDesc1Val}{extraDesc2}{extraDesc2Val}
            </Typography>
            <Typography paragraph variant="button">
              {extraDesc3}{extraDesc3Val}
            </Typography>
            <Typography paragraph>
              {extraDesc4}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

export default withStyles(styles)(withRouter(SolutionsCardItem));