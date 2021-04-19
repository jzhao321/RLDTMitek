import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { App, AppDrawer } from "../index";

import styles from "./Root.module.css";

const Root: React.FC = () => (
  <div className={styles.root}>
    <AppDrawer />
    <div className={styles.mainContent}>
      <AppBar position="static">
        <Toolbar>
          <Typography>RLDT</Typography>
        </Toolbar>
      </AppBar>

      <App />
    </div>
  </div>
);

export default Root;
