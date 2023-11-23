import "./style.css";

import { MenuBtn } from "./components/MenuBtn";
import { MenuNav } from "./components/MenuNav";

import { X } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";

export const Menu = () => {
  const { menu, setMenu } = useContext(AppContext);

  return (
    <div
      className="menu"
      style={menu == true ? { display: "block" } : { display: "none" }}
    >
      <MenuBtn X={X} setMenu={setMenu} />
      <MenuNav Link={Link} setMenu={setMenu} />
    </div>
  );
};
