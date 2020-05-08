import React from 'react';
import styles from './App.module.css';
import Header from "./Header";
import Main from "./Main";
import Skills from "./Skills";
import Projects from "./Projects";
import Slogan from "./Slogan";
import Contacts from "./Contacts";
import Footer from "./Footer";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.container}>
            <Header />
            <Main />
            <Skills />
            <Projects />
            <Slogan />
            <Contacts />
            <Footer/>
      </div>
    </div>
  );
}

export default App;
