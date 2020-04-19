import React from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import BackgroundGradient from "../../components/background-gradient";
import Card from "../../components/login";

import { connect } from "react-redux";

import "./Dashboard.css";
import { Overview, Datasets, Models } from "./Tabs";

const mapStateToProps = state => {
  return {
    network: state.network
  };
};

const Dashboard = ({ network }) => {
  return (
    <Tabs>
      <div className="dashboard">
        <BackgroundGradient />
        <Card>
          <div className="header">
            <div className="brand">
              <div className="pygrid-icon" />
              <span>
                PyGrid Monitor - <code>{network.address}</code>{" "}
              </span>
            </div>
            <TabList className="tabs">
              <Tab>OVERVIEW</Tab>
              <Tab>DATASETS</Tab>
              <Tab>MODELS</Tab>
            </TabList>
          </div>
          <TabPanel>
            <Overview />
          </TabPanel>
          <TabPanel>
            <Datasets />
          </TabPanel>
          <TabPanel>
            <Models />
          </TabPanel>
        </Card>
      </div>
    </Tabs>
  );
};

export default connect(mapStateToProps)(Dashboard);
