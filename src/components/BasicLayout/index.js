import React from "react";
import { Layout, Menu, Col, Row, Dropdown, Badge, Avatar } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./index.less";
import { withRouter } from "react-router-dom";
import { privateRoutes } from "../../router";
import { localStorageUtils } from "../../utils";
import { LS_KEY_USER_LOGIN } from "../../config/constants";
import SubMenu from "antd/lib/menu/SubMenu";

const { Header, Content, Sider } = Layout;

const DashboardLayout = (props) => {
  const onClickMenu = ({ item, key, keyPath, domEvent }) => {
    console.log({ item, key, keyPath, domEvent });

    if (key === "/login") {
      localStorageUtils.remove(LS_KEY_USER_LOGIN);
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
    <Layout
      style={{
        minHeight: "100%",
      }}
    >
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
                    <Avatar src="https://t.u1f.cn/images/2017/08/22/21354Hc4-14.th.jpg" />
                    {localStorageUtils.read(LS_KEY_USER_LOGIN).username}, welcome!
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
              if (route.children) {
                return (
                  <SubMenu
                    key={route.pathname}
                    icon={route.icon && <route.icon />}
                    title={route.title}
                  >
                    {route.children.map((child) => (
                      <Menu.Item key={child.pathname} title={child.title}>
                        {child.title}
                      </Menu.Item>
                    ))}
                  </SubMenu>
                );
              }
              return (
                <Menu.Item
                  key={route.pathname}
                  icon={route.icon && <route.icon />}
                  title={route.title}
                >
                  {route.title}
                </Menu.Item>
              );
            })}
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

// this component is not wrappered by router, so history can't be found from it;
// withRouter() can be used to add history to this.props
export default withRouter(DashboardLayout);
