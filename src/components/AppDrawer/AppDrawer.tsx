import React from "react";

import { List, ListItem, ListItemText } from "@material-ui/core";

import styles from "./AppDrawer.module.css";

export interface AppDrawerProps {}

export interface DrawerData {
  title: string;
  link?: string;
}

const drawerData: DrawerData[] = [
  {
    title: "Home",
  },
  {
    title: "Run Summary",
  },
  {
    title: "Repair Demand vs Part Supply",
  },
  {
    title: "MICAP Prediction with Logistics",
  },
  {
    title: "Risk of Excessively Large MICAP",
  },
];

const AppDrawer: React.FC<AppDrawerProps> = () => {
  const generateList = () =>
    drawerData.map((instance) => (
      <ListItem button>
        <ListItemText primary={instance.title} />
      </ListItem>
    ));

  return (
    <div className={styles.appDrawer}>
      <List>{generateList()}</List>
    </div>
  );
};

export default AppDrawer;
