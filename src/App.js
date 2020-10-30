import React, { Suspense } from "react";
import { Layout } from "antd";
import AppHeader from "./container/AppHeader";
import HomeContent from "./container/HomeContent";
import Projects from "./container/page/Projects";
import AppFooter from "./container/AppFooter";
import "antd/dist/antd.css";
import "./App.css";
import { Route, Switch } from "react-router";
import About from "./container/page/About";
import Scroll from "./components/Scroll";
// const HomeContent = React.lazy(() => import("./container/HomeContent"));
// const Projects = React.lazy(() => import("./container/page/Projects"));
const { Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <AppHeader />

      <Content>
        {/* <Suspense fallback={<h2>loading...</h2>}> */}
        <Switch>
          <Route exact path="/">
            <HomeContent />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Projects />
          </Route>
        </Switch>
        {/* </Suspense> */}
      </Content>
      <Scroll />
      <Footer style={{ textAlign: "center" }}>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;
