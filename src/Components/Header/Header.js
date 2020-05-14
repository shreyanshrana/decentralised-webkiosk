import "./Header.scss";

import React, { useContext } from "react";
import { Icon } from "semantic-ui-react";
import { NavContext } from "../../context/NavContext";

const Header = () => {
  const { activeItem } = useContext(NavContext);

  let title = "";
  switch (activeItem) {
    case "dashboard":
      title = "Dashboard";
      break;
    case "fill-srs":
      title = "Fill SRS";
      break;
    case "previous-srs":
      title = "See Previous SRS";
      break;
    case "pay-fee":
      title = "Pay Fee Online";
      break;
    case "fee-receipt":
      title = "Previous Fee Receipt";
      break;
    case "srs":
      title = "SRS Section";
      break;
    case "fee":
      title = "Fee Section";
      break;
    default:
      title = activeItem;
  }

  return (
    <div className="Header">
      {title}
      <Icon name="bell" />
    </div>
  );
};

export default Header;
