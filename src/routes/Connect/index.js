import React from "react";
import BackgroundGradient from "../../components/background-gradient";
import Card from "../../components/login";

import "./Connect.css";
import Button from "../../components/button";
import Input from "../../components/input";
import Brand from "../../components/brand";

const Connect = ({}) => {
  return (
    <div className="connect">
      <BackgroundGradient />
      <Card>
        <Brand />
        <form>
          <Input
            placeholder="127.0.0.1"
            label="Network Address"
            expanded
            centered
          ></Input>
          <Button color="black" centered expanded>
            CONNECT
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Connect;
