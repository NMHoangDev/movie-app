import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import TopicSection from "./components/TopicSection/TopicSection";
import ContinueWatchingSection from "./components/ContinueWatchingSection/ContinueWatchingSection";
import CategoryListSection from "./components/CategoryListSection/CategoryListSection";
import CommentTopPage from "./components/CommentTopPage/CommentTopPage";
import MovieSection from "./components/MovieSection/MovieSection";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Slider />
        <div className="main-content">
          <TopicSection />
          <ContinueWatchingSection />
          <CategoryListSection />
          <CommentTopPage />
          <MovieSection />
        </div>
      </main>
    </div>
  );
}

export default App;
