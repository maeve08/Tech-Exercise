import React from "react";
import useOnClickOutside from "./useOnClickOutside";
import "./LoginModal.css";

function LoginModal({ onClose }) {
  const clickOutsideRef = useOnClickOutside(onClose);

  return (
    <div className="LoginModal-overlay-container">
      <form
        className="LoginModal-container"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        ref={clickOutsideRef}
      >
        <h2>Login</h2>
        <p>
          <label className="LoginModal-label">Username: </label>
          <input type="text" />
        </p>
        <p>
          <label className="LoginModal-label">Password: </label>
          <input type="password" />
        </p>
        <button type="submit">Let me in</button>
        <button className="LoginModal-closeButton" onClick={onClose}>
          X
        </button>
      </form>
    </div>
  );
}

export default LoginModal;
