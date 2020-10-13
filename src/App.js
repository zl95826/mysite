import React from "react";
import { Layout } from "antd";
import AppHeader from "./container/AppHeader";
import AppContent from "./container/AppContent";
import "antd/dist/antd.css";
import "./App.css";
import logo from "./logo.svg";
const { Content, Footer } = Layout;
function App() {
  return (
    <Layout className="layout">
      <AppHeader />

      <Content style={{ padding: "0 50px" }}>
        <AppContent />
        <img src={logo} className="App-logo" alt="logo" />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default App;
