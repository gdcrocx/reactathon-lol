import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import SolutionsCard from "./solutions-card";
import axios from "axios";
import RecipeReviewPrevCard from "./prevCard";
import config from "./config"
import Button from "@material-ui/core/Button";

const styles = {
  root: {
    flexGrow: 1
  }
};

const baseUrl = config.get('service.protocol') + "://" + config.get('service.host') + ":" + config.get('service.port')
const urls = {
  getAllSolutions: "/solutions/all",
  getAllEvents: "/events/all"
}

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

class Solutions extends React.Component {

  solutions = [];
  events = [];

  componentDidMount() {

    axios.get(baseUrl + urls.getAllSolutions).then(res => {
      const solutions = res.data;
      this.solutions = solutions;
      // this.setState({ solutions: solutions });

      axios.get(baseUrl + urls.getAllEvents).then(res => {
        const events = res.data;
        this.events = events;
        this.setState({ events: events });
        // console.log("Events All - " + JSON.stringify(this.events)) 
      });
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        {
          <TabContainer>
            <SolutionsCard
              solutiondetails={this.solutions}
              eventdetails={this.events}
            />
          </TabContainer>
        }        
      </div>
    );
  }
}

Solutions.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Solutions);
