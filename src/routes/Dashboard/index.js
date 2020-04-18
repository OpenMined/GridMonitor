import React from "react";
import BackgroundGradient from "../../components/background-gradient";
import Card from "../../components/login";

import { connect } from "react-redux";

import "./Dashboard.css";

const mapStateToProps = state => {
  return {
    network: state.network
  };
};
const Dashboard = ({ network }) => {
  return (
    <div className="dashboard">
      <BackgroundGradient />
      <Card>
        <div className="header">
          <div className="pygrid-icon" />
          <span>
            PyGrid Monitor - <code>{network.address}</code>{" "}
          </span>
        </div>
      </Card>
    </div>
  );
};

export default connect(mapStateToProps)(Dashboard);
