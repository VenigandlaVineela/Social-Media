import React, { useRef } from "react";
import { FaArrowLeft, FaShareAlt, FaEllipsisH, FaGlobe, FaUserFriends, FaUserPlus } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";
import p8 from "../assets/p8.png";
import Navbar from "../Components/Navbar"
import Sidebar from "../Components/Sidebar"

const TopSidebar = () => (
  <nav className="nav nav-pills justify-content-center mb-4">
    <a className="nav-link active" href="#posts">Posts</a>
    <a className="nav-link" href="#about">About</a>
    <a className="nav-link" href="#followers">Followers</a>
    <a className="nav-link" href="#following">Following</a>
  </nav>
);

const PixelmindProfile = () => {
  const images = [p1, p2, p3, p4, p5, p6, p7, p8];
  const aboutModalRef = useRef(null);

  const openAboutModal = () => {
    const modal = new window.bootstrap.Modal(aboutModalRef.current);
    modal.show();
  };

  return (
    <div className="d-flex" style={{ minHeight: "100vh", backgroundColor: "#ffe0cc" }}>
      <Sidebar />
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
              <button className="btn btn-light d-flex align-items-center gap-1">
                <FiMessageSquare /> Message
              </button>
              <button className="btn btn-warning text-white">+ Follow</button>
              <button className="btn btn-light" onClick={openAboutModal}><FaEllipsisH /></button>
              <button className="btn btn-light"><FaShareAlt /></button>
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

      {/* Modal with #ffe0cc Background */}
      <div className="modal fade" tabIndex="-1" ref={aboutModalRef}>
        <div className="modal-dialog modal-dialog-centered">
          <div
            className="modal-content p-4 rounded-4 position-relative"
            style={{
              backgroundColor: "#ffe0cc",
              border: "1px solid #ffc599",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
            }}
          >
            <h5 className="fw-bold mb-3 text-dark">About Pixelmind Solution</h5>

            <div className="mb-2 d-flex align-items-center gap-2 text-dark">
              <FaGlobe /> <b>Pixelmindsolutions.com</b>
            </div>
            <div className="mb-2 d-flex align-items-center gap-2 text-dark">
              <FaUserFriends /> <b>885 followers</b>
            </div>
            <div className="mb-3 d-flex align-items-center gap-2 text-dark">
              <FaUserPlus /> <b>5 following</b>
            </div>

            <p className="text-dark small mb-3">
              Unlock your business potential with our excellent IT services designed to drive success. Tailored solutions to seamless support, we ensure your technology works for you, every step of the way.
            </p>

            <div className="d-flex justify-content-between">
              <button className="btn btn-light d-flex align-items-center gap-1">
                <FiMessageSquare /> Message
              </button>
              <button className="btn btn-warning text-white">+ Follow</button>
            </div>

            <button
              type="button"
              className="btn-close position-absolute top-0 end-0 m-2"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PixelmindProfile;
