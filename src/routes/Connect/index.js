import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import BackgroundGradient from "../../components/background-gradient";
import Card from "../../components/login";
import Button from "../../components/button";
import Input from "../../components/input";
import Brand from "../../components/brand";
import { setAddress } from "../../actions/monitor";

import "./Connect.css";

const mapStateToProps = state => {
  return {
    network: state.network
  };
};

const Connect = ({ setAddress, network }) => {
  const [url, setUrl] = useState(network.url ? network.url : "");
  const [toDashboard, setToDashboard] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setAddress(url);
    setToDashboard(true);
  };

  return (
    <div className="connect">
      {toDashboard && <Redirect to="dashboard" />}
      <BackgroundGradient />
      <Card>
        <Brand />
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="http://127.0.0.1"
            label="Network Address"
            value={url}
            setValue={setUrl}
            expanded
            centered
          ></Input>
          <Button disabled={!url} type="submit" color="black" centered expanded>
            CONNECT
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default connect(mapStateToProps, { setAddress })(Connect);
