import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import ListingsPage from "./listings/ListingsPage";
import ContactPage from "./contact/ContactPage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/listings" component={ListingsPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
