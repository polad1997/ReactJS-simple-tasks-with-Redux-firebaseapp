import React, { Component } from "react";
import { Layout, Menu, Icon, Rate, Drawer } from "antd";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import Task1 from "./components/Task21";
import Task2 from "./components/Task22";
import Task3 from "./components/Task23";
import Task4 from "./components/Task24";

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItemKey: "1",
      collapsed: false,
      visible: false
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    const { Header, Sider, Content, Footer } = Layout;

    return (
      <BrowserRouter>
        <Layout style={{ bottom: "0" }}>
          <Header>
            <div>
              <Link
                style={{
                  color: "white",
                  float: "left",
                  fontSize: "20px",
                  fontWeight: "bold"
                }}
                to="/"
              >
                Polad
              </Link>
            </div>
          </Header>
          <Layout>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1">
                  <Icon type="branches" theme="outlined" />
                  <span>TreeSelect</span>
                  <NavLink to="/task1" />
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="table" theme="outlined" />
                  <span>Counter</span>
                  <NavLink to="/task2" />
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="clock-circle" />
                  <span>Timer</span>
                  <NavLink to="/task3" />
                </Menu.Item>
                <Menu.Item key="4">
                  <Icon type="message" />
                  <span>Guess Game</span>
                  <NavLink to="/task4" />
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: "#fff", padding: 0 }}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                  onClick={this.toggle}
                />
              </Header>
              <Content
                style={{
                  margin: "24px 16px",
                  padding: 24,
                  background: "#fff",
                  minHeight: 280
                }}
              >
                <Route exact path="/" component={Task1} />
                <Route path="/task1" component={Task1} />
                <Route path="/task2" component={Task2} />
                <Route path="/task3" component={Task3} />
                <Route path="/task4" component={Task4} />
              </Content>
            </Layout>
          </Layout>
          <Footer />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default Tasks;
