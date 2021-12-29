import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/provider';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Navbar from "./components/NavBar";
import Layout from "./components/Layout"
import Header from "./components/Header"
import About from "./components/AboutMe"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Work from "./components/Work"


ReactDOM.render(
  <React.StrictMode>  
    <Layout>
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <Work></Work>
      <Contact></Contact>
    </Layout>

  </React.StrictMode>,
  document.getElementById('root')
);

/*
const Index = () => (
  <Layout>
    <Navbar></Navbar>
  </Layout>
)
*/

