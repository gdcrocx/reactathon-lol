import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// import classnames from "classnames";
// import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardMedia from "@material-ui/core/CardMedia";
// import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import Collapse from "@material-ui/core/Collapse";
// import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
// import Button from "@material-ui/core/Button";
import { withRouter } from 'react-router';
import SolutionsCardItem from "./solutions-cardItem";

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

class SolutionsCard extends React.Component {

  render() {
    const { classes } = this.props;

    // console.log("Props - " + JSON.stringify(this.props))

    var solutionsarr = []
    var eventdetails = []

    if (
      this.props.solutiondetails !== undefined
    ) {
      solutionsarr = this.props.solutiondetails;
    }

    if (
      this.props.eventdetails !== undefined
    ) {
      eventdetails = this.props.eventdetails;      
    }

    // var me = this;

    return (
      <div className={classes.cardRow}>
        {solutionsarr.map(function (item) {
          return (
            <SolutionsCardItem item={item} events={eventdetails}></SolutionsCardItem>            
          );
        })}
      </div>
    );
  }
}

SolutionsCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(SolutionsCard));
