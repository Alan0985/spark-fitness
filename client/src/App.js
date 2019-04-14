import React, { Component } from "react";
import MobileNavbar from "./components/layout/MobileNavbar";
import Landing from "./components/layout/Landing";
import WhySpark from "./components/layout/WhySpark";
import Trial from "./components/layout/Trial";
import MembershipBanner from "./components/layout/MembershipBanner";
import Footer from "./components/layout/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <WhySpark />
        <Trial />
        <MembershipBanner />
        <Footer />
        <MobileNavbar />
      </div>
    );
  }
}

export default App;
