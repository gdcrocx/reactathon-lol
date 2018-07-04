import React from "react";
import Typography from "@material-ui/core/Typography";
import CenteredTabs from "./hackTab";
// import CustomPaginationActionsTable from "./leadershipGrid";

class App extends React.Component {
  render() {
    // const { classes } = this.props;
    return (
      <div>
        <br />
        <Typography component="p" variant="body2" style={{ fontSize: "17px" }}>
          <center>
            Hacktrix is the one stop shop for all the Live, <br />Upcoming and
            Previous Hackathons.
            <br />Free and open to all ! Crack the Code !
          </center>
        </Typography>
        <br />
        <CenteredTabs />
      </div>
    );
  }
}

export default App;
