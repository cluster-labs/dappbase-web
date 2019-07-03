import React from "react";
import Layout from "./layout/";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Authentication from "./pages/authentication/index";
import Analytics from "./pages/analytics/index";
import Crashlytics from "./pages/crashlytics/index";
import Database from "./pages/database/index";
import Functions from "./pages/functions/index";
import Hosting from "./pages/hosting/index";
import Storage from "./pages/storage/index";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Route exact path="/" component={Authentication} />
          <Route exact path="/analytics" component={Analytics} />
          <Route exact path="/crashlytics" component={Crashlytics} />
          <Route exact path="/database" component={Database} />
          <Route exact path="/functions" component={Functions} />
          <Route exact path="/hosting" component={Hosting} />
          <Route exact path="/storage" component={Storage} />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
