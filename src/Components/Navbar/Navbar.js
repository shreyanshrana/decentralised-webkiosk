import "./Navbar.scss";

import React, { useState } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("dashboard");

  return (
    <React.Fragment>
      <div className="Navbar">
        <div className="Navbar__Logo">
          <img src="./img/tiet_logo.svg" />
          <h1>Thapar Institue of Engineering & Technology</h1>
        </div>
        <Menu vertical className="Navbar__Menu">
          <Menu.Item name="dashboard" active={activeItem === "dashboard"}>
            <Link to="/">
              <div className="item" onClick={() => setActiveItem("dashboard")}>
                <Icon name="home" />
                Dashboard
              </div>
            </Link>
          </Menu.Item>
          <Menu.Item
            name="srs"
            active={
              activeItem === "fill-srs" ||
              activeItem === "previous-srs" ||
              activeItem === "srs"
            }
          >
            <div className="item" onClick={() => setActiveItem("srs")}>
              <Icon name="gavel" />
              SRS
            </div>
            {activeItem === "fill-srs" ||
            activeItem === "previous-srs" ||
            activeItem === "srs" ? (
              <Menu.Menu>
                <Menu.Item
                  name="fill-srs"
                  active={activeItem === "fill-srs"}
                  onClick={() => {
                    setActiveItem("fill-srs");
                  }}
                >
                  Fill SRS
                </Menu.Item>
                <Menu.Item
                  name="previous-srs"
                  active={activeItem === "previous-srs"}
                  onClick={() => {
                    setActiveItem("previous-srs");
                  }}
                >
                  See Previous SRS
                </Menu.Item>
              </Menu.Menu>
            ) : (
              <React.Fragment />
            )}
          </Menu.Item>
          <Menu.Item
            name="srs"
            active={
              activeItem === "pay-fee" ||
              activeItem === "fee-receipt" ||
              activeItem == "fee"
            }
          >
            <div className="item" onClick={() => setActiveItem("fee")}>
              <Icon name="money bill alternatevel" />
              Fee Details
            </div>
            {activeItem === "pay-fee" ||
            activeItem === "fee-receipt" ||
            activeItem == "fee" ? (
              <Menu.Menu>
                <Link to="fee-section">
                  <Menu.Item
                    name="pay-fee"
                    active={activeItem === "pay-fee"}
                    onClick={() => {
                      setActiveItem("pay-fee");
                    }}
                  >
                    Pay Fee Online
                  </Menu.Item>
                </Link>
                <Menu.Item
                  name="fee-receipt"
                  active={activeItem === "fee-receipt"}
                  onClick={() => {
                    setActiveItem("fee-receipt");
                  }}
                >
                  Previous Fee Receipt
                </Menu.Item>
              </Menu.Menu>
            ) : (
              <React.Fragment />
            )}
          </Menu.Item>
        </Menu>
        <div className="Navbar__Logout">
          <Icon name="power" />
          Logout
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
