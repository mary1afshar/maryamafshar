import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Layout from "./components/Layout";
import Header from "./components/Header";
import About from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Skill from "./components/Skills";

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <Work></Work>
      <Skill></Skill>
      <Contact></Contact>
    </Layout>
  </React.StrictMode>,
  document.getElementById("root")
);
