import React, { useState } from "react";
import "./teacher.css";
import Popup from "../popup/Popup";

function Teacher() {
  const [showPopup, setShowPopup] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [searchPhone, setSearchPhone] = useState("");
  const [searchDOB, setSearchDOB] = useState("");

  const handleAddNewClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lưu thông tin của giáo viên mới vào database hoặc state của ứng dụng
    // Sau đó, đóng Popup
    setShowPopup(false);
  };

  const handleSearch = () => {
    // Xử lý tìm kiếm dựa trên searchName, searchPhone, searchDOB
    // Cập nhật danh sách giáo viên được tìm thấy
    console.log("Performing search...");
  };

  return (
    <div>
      <button onClick={handleAddNewClick}>Add new</button>
      {showPopup && (
        <Popup onClose={handleClosePopup} onSubmit={handleSubmit} />
      )}
      <div className="teacher-search-container">
        <label htmlFor="searchName">Tên:</label>
        <input
          type="text"
          id="searchName"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <label htmlFor="searchPhone">Phone:</label>
        <input
          type="text"
          id="searchPhone"
          value={searchPhone}
          onChange={(e) => setSearchPhone(e.target.value)}
        />
        <label htmlFor="searchDOB">Ngày sinh:</label>
        <input
          type="date"
          id="searchDOB"
          value={searchDOB}
          onChange={(e) => setSearchDOB(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default Teacher;
