import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import TopicSection from "./components/TopicSection/TopicSection";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Slider />
        {/* Các components khác */}
        <div className="main-content">
          <TopicSection />
        </div>
      </main>
    </div>
  );
}

export default App;
