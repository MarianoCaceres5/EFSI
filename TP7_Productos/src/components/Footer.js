import React from "react";
import "../styles.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <p style={{ fontSize: 1.2 + "rem", fontWeight: "bold" }}>
          &copy; 2023 Diamond Jewellery. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
