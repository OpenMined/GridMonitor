import React from "react";
import Table from "../../../components/table";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    address: state.network.address,
    nodes: state.network.nodes
  };
};

const Overview = ({ nodes }) => {
  return (
    <div className="tab">
      <h3 className="title">Overview</h3>
      <Table
        columns={["Status", "Id", "Address"]}
        component={
          <div>
            <p>Testing</p>
            <ul>
              <li>sample1</li>
              <li>sample2</li>
              <li>sample3</li>
            </ul>
          </div>
        }
        data={nodes}
        className="table"
      />
    </div>
  );
};

export default connect(mapStateToProps)(Overview);
