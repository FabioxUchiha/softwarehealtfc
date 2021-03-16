import { createMuiTheme, MuiThemeProvider, Paper } from "@material-ui/core";
import React from "react";

export const Dashboard = () => {
  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });
  return (
    <MuiThemeProvider theme={theme}>
      <Paper style={{ height: "100vh" }}>
        <h1 className="text-2xl">dashboard</h1>
      </Paper>
    </MuiThemeProvider>
  );
};
