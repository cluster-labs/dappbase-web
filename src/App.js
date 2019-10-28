import React, { Component } from "react";
import Layout from "./layout";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Authentication from "./pages/authentication";
import Analytics from "./pages/analytics";
import Crashlytics from "./pages/crashlytics";
import Database from "./pages/database";
import Functions from "./pages/functions";
import Hosting from "./pages/hosting";
import AdService from "./pages/adService";
import Notifications from "./pages/notifications";
import Storage from "./pages/storage";
import Home from "./pages/home"
import GettingStarted from "./pages/gettingstart"
import Beta from "./pages/beta"
import Partner from "./pages/partner"


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/authentication" component={Authentication} />
              <Route exact path="/analytics" component={Analytics} />
              <Route exact path="/crashlytics" component={Crashlytics} />
              <Route exact path="/database" component={Database} />
              <Route exact path="/functions" component={Functions} />
              <Route exact path="/hosting" component={Hosting} />
              <Route exact path="/storage" component={Storage} />
              <Route exact path="/notifications" component={Notifications} />
              <Route exact path="/adservice" component={AdService} />
              <Route path="/beta" component={Beta} />
              <Route path="/partner" component={Partner} />
              <Route path="/start" component={GettingStarted} />
              <Route path="/" component={Home} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;


