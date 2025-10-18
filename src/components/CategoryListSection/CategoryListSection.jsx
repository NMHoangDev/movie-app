import React from "react";
import CategorySection from "./CategorySection/CategorySection";
import "./CategoryListSection.style.css";

function CategoryListSection() {
  return (
    <div className="wrapper">
      <CategorySection title={"Phim Hàn\nQuốc mới"} />
      <CategorySection title={"Phim Trung \n Quốc mới"} />
      <CategorySection title={"Phim Nhật\nBản mới"} />
    </div>
  );
}

export default CategoryListSection;
