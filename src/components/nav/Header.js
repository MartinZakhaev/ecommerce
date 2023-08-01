import { useState } from "react";
import {
  HomeOutlined,
  UserOutlined,
  UserAddOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");

  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
      <Item key="home" icon={<HomeOutlined />}>
        <Link style={{ textDecoration: "none" }} to="/">
          Home
        </Link>
      </Item>
      <SubMenu icon={<SettingOutlined />} title="Username">
        <Item key="setting:1">Option 1</Item>
        <Item key="setting:2">Option 2</Item>
      </SubMenu>
      <Item style={{ marginLeft: "auto" }} key="login" icon={<UserOutlined />}>
        <Link style={{ textDecoration: "none" }} to="/login">
          Login
        </Link>
      </Item>
      <Item key="register" icon={<UserAddOutlined />}>
        <Link style={{ textDecoration: "none" }} to="/register">
          Register
        </Link>
      </Item>
    </Menu>
  );
};

export default Header;
