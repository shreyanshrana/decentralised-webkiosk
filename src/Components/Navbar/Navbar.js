import "./Navbar.scss";

import React, { useContext } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { NavContext } from "../../context/NavContext";

const Navbar = () => {
  // const [activeItem, setActiveItem] = useState("dashboard");
  const { activeItem, setActiveItem } = useContext(NavContext);

  return (
    <React.Fragment>
      <div className="Navbar">
        <div className="Navbar__Logo">
          <img src="./img/tiet_logo.svg" alt="Logo" />
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
                <Link to="/fill-srs">
                  <Menu.Item
                    name="fill-srs"
                    active={activeItem === "fill-srs"}
                    onClick={() => {
                      setActiveItem("fill-srs");
                    }}
                  >
                    Fill SRS
                  </Menu.Item>
                </Link>
                <Link to="/previous-srs">
                  <Menu.Item
                    name="previous-srs"
                    active={activeItem === "previous-srs"}
                    onClick={() => {
                      setActiveItem("previous-srs");
                    }}
                  >
                    See Previous SRS
                  </Menu.Item>
                </Link>
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
              activeItem === "fee"
            }
          >
            <div className="item" onClick={() => setActiveItem("fee")}>
              <Icon name="money bill alternatevel" />
              Fee Details
            </div>
            {activeItem === "pay-fee" ||
            activeItem === "fee-receipt" ||
            activeItem === "fee" ? (
              <Menu.Menu>
                <Link to="pay-fee">
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
                <Link to="/fee-receipt">
                  <Menu.Item
                    name="fee-receipt"
                    active={activeItem === "fee-receipt"}
                    onClick={() => {
                      setActiveItem("fee-receipt");
                    }}
                  >
                    Previous Fee Receipt
                  </Menu.Item>
                </Link>
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
