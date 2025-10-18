import React from "react";
import CategorySection from "./CategorySection/CategorySection";
import "./CategoryListSection.style.css";

function CategoryListSection() {
  return (
    <div className="wrapper">
      <CategorySection 
        title={"Phim Hàn\nQuốc mới"} 
        titleColor="#674196"
      />
      <CategorySection 
        title={"Phim Trung\nQuốc mới"} 
        titleColor="#FF0099"
      />
      <CategorySection 
        title={"Phim Nhật\nBản mới"} 
        titleColor="#F7A10B"
      />
    </div>
  );
}

export default CategoryListSection;
