import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="border-top text-center small text-muted py-3">
        <p>
          <Link to="/" className="text-info mx-1">
            Home
          </Link>{" "}
          |{" "}
          <Link to="/about-us" className="text-info mx-1">
            AboutUs
          </Link>{" "}
          |{" "}
          <Link to="/terms" className="text-info mx-1">
            Terms
          </Link>
        </p>
      </footer>
    </>
  );
}

export default Footer;
