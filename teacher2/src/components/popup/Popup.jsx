import React from "react";
import "./popup.css";

function Popup(props) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h4>Show popup edit</h4>
        <form>
          <label>
            Tên:
            <input type="text" name="name" />
          </label>
          <label>
            Phone:
            <input type="text" name="phone" />
          </label>
          <label className="date">
            Ngày sinh:
            <input type="date" name="dob" />
          </label>
          <label>
            Khoa:
            <select name="department">
              <option value="A">Công nghệ thông tin</option>
              <option value="B">Cơ khí</option>
              <option value="C">Điện</option>
            </select>
          </label>
          <div className="button-container">
            <button onClick={props.onClose}>Cancel</button>
            <button type="submit" onClick={props.onSubmit}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Popup;
