import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>der Kleinbus</h1>
    <p>Welcome to der Kleinbus home page</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more about der Kleinbus!
    </Link>
  </div>
);

export default HomePage;
