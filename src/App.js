import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuBar from "./components/MenuBar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { Grid } from "@material-ui/core";
import "./styles.css";

const Layout = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <MenuBar sideBarSize={240} />
      <Content sideBarSize={240} />
    </React.Fragment>
  );
};

export default function App() {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}
