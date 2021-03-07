import { Typography, Grid, Button } from "@material-ui/core";
import BackgroundImage from "../assets/main.jpg";

import { ExpandMore } from "@material-ui/icons";

export const LandingPage = () => (
  <div
    style={{
      height: "100vh",
      minHeight: "100%",
      backgroundSize: "cover",
      backgroundPosition: "top",
      backgroundImage: `url(${BackgroundImage})`,
    }}
  >
    <Grid
      container
      spacing={0}
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid
        item
        xs={12}
        justify="center"
        style={{ color: "#f2f2f2", textAlign: "center" }}
      >
        <Typography variant="h2" align="center">
          Matthew Yong
        </Typography>
        <Typography variant="h4" align="center">
          Software, Electronics, Cloud, IoT
        </Typography>
        <Button variant="contained" color="primary" endIcon={<ExpandMore />}>
          View More
        </Button>
      </Grid>
    </Grid>
  </div>
);
