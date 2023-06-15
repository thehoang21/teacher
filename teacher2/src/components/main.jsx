import React, { useState } from "react";
import Teacher from "./teacher/Teacher";
import Student from "./student/Student";
import "./main.css";

function Main() {
  const [activeTab, setActiveTab] = useState("teacher");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="main-container">
      <div className="tab-container">
        <div
          className={`tab ${activeTab === "teacher" ? "active" : ""}`}
          onClick={() => handleTabClick("teacher")}
        >
          Giáo viên
        </div>
        <div
          className={`tab ${activeTab === "student" ? "active" : ""}`}
          onClick={() => handleTabClick("student")}
        >
          Học sinh
        </div>
      </div>
      <div className="tab-content">
        {activeTab === "teacher" ? <Teacher /> : null}
        {activeTab === "student" ? <Student /> : null}
      </div>
    </div>
  );
}

export default Main; // sử dụng export default
