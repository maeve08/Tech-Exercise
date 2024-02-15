import React, { useState } from "react";
import LoginModal from "./LoginModal";
import "./App.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App-container">
      <p>
        You are logged out.{" "}
        <button onClick={() => setIsOpen(true)}>Login</button>
      </p>
      {isOpen && <LoginModal onClose={() => setIsOpen(false)} />}
    </div>
  );
}
