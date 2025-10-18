import React from "react";
import "./styles/TopicSection.style.css";
import TopicCard from "./TopicCard";

const topics = [
  { id: "marvel", label: "Marvel", color: "#324FD1" },
  { id: "4k", label: "4K", color: "#7E7EA9" },
  { id: "sitcom", label: "Sitcom", color: "#3F9883" },
  { id: "dub", label: "Lồng Tiếng\nCực Mạnh", color: "#8C7AC0" },
  { id: "space", label: "Xuyên Không", color: "#D59379" },
  { id: "historical", label: "Cổ Trang", color: "#B55858" },
  { id: "more", label: "+4 Chủ Đề", color: "#4F5363" },
];

const TopicSection = () => {
  return (
    <section className="topic-section">
      <div className="topic-section__header">
        <h2 className="topic-section__title">Bạn đang quan tâm gì?</h2>
      </div>

      {/* Wrap có thể kéo ngang ở mobile, grid ở desktop */}
      <div className="topic-section__list" role="list">
        {topics.map((t) => (
          <TopicCard key={t.id} label={t.label} color={t.color} href="#" />
        ))}
      </div>
    </section>
  );
};

export default TopicSection;
