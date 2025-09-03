import React, { useRef } from "react";
import { FaArrowLeft, FaShareAlt, FaEllipsisH, FaGlobe, FaUserFriends, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";


import { FiMessageSquare } from "react-icons/fi";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";
import p8 from "../assets/p8.png";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const TopSidebar = () => (
  <nav className="nav nav-pills justify-content-center mb-4">
    <a className="nav-link active" href="#posts">Posted</a>
    <a className="nav-link" href="#about">Saved</a>
  </nav>
);

const PixelmindProfileEdited = () => {
  const images = [p1, p2, p3, p4, p5, p6, p7, p8];
  const aboutModalRef = useRef(null);

  const openAboutModal = () => {
    const modal = new window.bootstrap.Modal(aboutModalRef.current);
    modal.show();
  };

  return (
    <div className="d-flex" style={{ minHeight: "100vh", backgroundColor: "#ffe0cc" }}>
      <div>
        <Sidebar />
      </div>
      <div className="flex-grow-1 d-flex flex-column">
        <Navbar />
        <div className="flex-grow-1 p-2 me-5 ms-4 bg-white">
          <button className="btn btn-light">
            <FaArrowLeft />
          </button>

          <div className="text-center mb-3">
            <div
              className="rounded-circle d-inline-flex align-items-center justify-content-center mb-2"
              style={{
                width: "80px",
                height: "80px",
                fontSize: "36px",
                backgroundColor: "#e3d0f3",
                color: "#000",
              }}
            >
              P
            </div>
            <h3 className="fw-bold">Pixelmind Solution</h3>
            <p className="small mb-1 text-center">
              <b>Pixelmindsolutions.com</b> "Welcome to our future tech house, your<br />
              one-stop destination for cutting-edge digital solutions! <br />
              At our core, we're dedicated to crafting...{" "}
              <span style={{ cursor: "pointer", fontWeight: "bold" }}>more</span>
            </p>
            <p className="fw-bold">875 followers &nbsp; • &nbsp; 5 following</p>

            <div className="d-flex justify-content-center gap-2 mb-4 flex-wrap">
              <button className="btn btn-warning d-flex align-items-center gap-1 text-white">
                Share
              </button>
              <Link to="/profileupdate" className="btn btn-warning text-white">
                Edit Profile
              </Link>
            </div>
          </div>

          <TopSidebar />

          <div
            className="d-grid gap-3"
            style={{
              gridTemplateColumns: "repeat(5, 1fr)",
              display: "grid",
            }}
          >
            {images.map((img, index) => (
              <div key={index}>
                <img src={img} alt={`post-${index}`} className="img-fluid rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>


    </div>
  );
};

export default PixelmindProfileEdited;
