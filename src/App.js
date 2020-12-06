import React, { Suspense } from "react";
import { Layout } from "antd";
import AppHeader from "./container/AppHeader";
import AppFooter from "./container/AppFooter";
import "antd/dist/antd.css";
import "./App.css";
import { Route, Switch } from "react-router";
import Scroll from "./components/Scroll";
import Spinner from "./components/Spinner/Spinner";
const HomeContent = React.lazy(() => import("./container/HomeContent"));
const Projects = React.lazy(() => import("./container/page/Projects"));
const About = React.lazy(() => import("./container/page/About"));
const { Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <AppHeader />

      <Content>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/">
              <HomeContent />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/portfolio">
              <Projects />
            </Route>
          </Switch>
        </Suspense>
      </Content>

      <Scroll />
      <Footer style={{ textAlign: "center" }}>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;
