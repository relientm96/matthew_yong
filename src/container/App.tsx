import React from "react";
import { Typography, Grid } from "@material-ui/core";
import BackgroundImage from "../assets/main.jpg";

function App() {
  return (
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
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
