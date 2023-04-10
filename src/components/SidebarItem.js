import React from "react";
import "./SidebarItem.css";
export const SidebarItem = () => {
  return (
    <div className="sidebar-item">
      {/* TOPICS */}
      <div className="sidebar-title">
        <span>FEEDS</span>
        <div>
          <i className="bi-house-door"></i>
          <span className="home">Home</span>
        </div>
        <div>
          <i className="bi-arrow-up-right-circle"></i>
          <span className="popular">Popular</span>
        </div>
        <br />
        <span>TOPICS</span>
        <div>
          <i className="bi-controller"></i>
          <span className="gaming">Gaming</span>
        </div>
        <div>
          <i className="bi-playstation"></i>
          <span className="sports">Sports</span>
        </div>
        <div>
          <i className="bi-graph-up-arrow"></i>
          <span className="buisness">Buisness, Economics and Finance</span>
        </div>
        <div>
          <i className="bi-currency-bitcoin"></i>
          <span className="crypto">Crypto</span>
        </div>
        <div>
          <i className="bi-tv"></i>
          <span className="television">Television</span>
        </div>
        <div>
          <i className="bi-star"></i>
          <span className="celebrity">Celebrity</span>
        </div>
        <div>
          <i className="bi-three-dots"></i>
          <span className="more-topics">More Topics</span>
        </div>
      </div>
    </div>
  );
};
export default SidebarItem;
