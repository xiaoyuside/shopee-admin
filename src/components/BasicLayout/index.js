import React from "react";
import { Layout, Menu, Col, Row, Dropdown, Badge, Avatar } from "antd";
import {
  DownOutlined,
} from "@ant-design/icons";
import "./index.less";
import { withRouter } from "react-router-dom";
import { privateRoutes } from "../../router";
import { localStorageUtils } from "../../utils";
import { user_ls_key } from "../../config/constants";

const { Header, Content, Sider } = Layout;

const DashboardLayout = (props) => {
  const onClickMenu = ({ item, key, keyPath, domEvent }) => {
    console.log({ item, key, keyPath, domEvent });

    if (key === "/login") {
      localStorageUtils.remove(user_ls_key);
    }

    props.history.push(key); // 点击左边菜单, 右边内容跟着变化
  };

  const menu = (
    <Menu onClick={onClickMenu}>
      <Menu.Item key="/admin/notification">
        <Badge dot>通知中心</Badge>
      </Menu.Item>
      <Menu.Item key="/admin/setting">个人设置</Menu.Item>
      <Menu.Item key="/login">退出</Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ height: "100%" }}>
      <Header className="header">
        <Row>
          <Col span={8}>
            <h2
              style={{
                color: "white",
              }}
            >
              Shopee Admin
            </h2>
          </Col>
          <Col span={3} offset={13}>
            <div style={{ color: "white" }}>
              <Dropdown overlay={menu}>
                <Badge count={5}>
                  <div
                    style={{ color: "white" }}
                    onClick={(e) => e.preventDefault()}
                  >
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    xxx, welcome!
                    <DownOutlined />
                  </div>
                </Badge>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            onClick={onClickMenu}
            mode="inline"
            // defaultSelectedKeys={[props.location.pathname]}
            // defaultOpenKeys={["sub1"]}
            selectedKeys={[props.location.pathname]}
            style={{ height: "100%", borderRight: 0 }}
          >
            {privateRoutes.map((route) => {
              return (
                <Menu.Item
                  key={route.pathname}
                  icon={route.icon}
                  title={route.title}
                >
                  {route.icon && <route.icon />}
                  {route.title}
                </Menu.Item>
              );
            })}
            {/* <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<NotificationOutlined />}
              title="subnav 3"
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu> */}
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default withRouter(DashboardLayout);
