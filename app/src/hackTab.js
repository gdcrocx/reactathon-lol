import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import RecipeReviewCard from "./card";

const styles = {
  root: {
    flexGrow: 1
  }
};

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

class CenteredTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div>
        <Paper className={classes.root}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Live" />
            <Tab label="Upcoming" />
            <Tab label="Previous" />
          </Tabs>
        </Paper>
        {value === 0 && (
          <TabContainer>
            <RecipeReviewCard />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <RecipeReviewCard />
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <RecipeReviewCard />
          </TabContainer>
        )}
      </div>
    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredTabs);
