import { useRef, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import {
  FaRegComment,
  FaStar,
  FaWhatsapp,
  FaFacebook,
  FaXTwitter,
} from "react-icons/fa6";
import { PiShareNetworkBold } from "react-icons/pi";
import { MdOutlineFileDownload, MdZoomOutMap } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { LuCopy } from "react-icons/lu";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import img13 from "../assets/img13.png";
import profilePic from "../assets/profile.png";

const Home = () => {
  const navigate = useNavigate();

  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8,
    img3, img2, img9, img13, img1, img2, img3, img4, img5, img6, img7
  ];

  const [currentImg, setCurrentImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [imageToDownload, setImageToDownload] = useState(null);

  const modalRef = useRef(null);
  const fullscreenRef = useRef(null);
  const downloadConfirmRef = useRef(null);
  const shareModalRef = useRef(null);

  const openModal = (img, idx) => {
    setCurrentImg(img);
    setCurrentIndex(idx);
    if (window.bootstrap && modalRef.current) {
      const modal = new window.bootstrap.Modal(modalRef.current);
      modal.show();
    }
  };

  const openFullscreenModal = () => {
    if (window.bootstrap && fullscreenRef.current) {
      const modal = new window.bootstrap.Modal(fullscreenRef.current);
      modal.show();
    }
  };

  const openDownloadConfirmModal = (imgSrc) => {
    setImageToDownload(imgSrc);
    if (window.bootstrap && downloadConfirmRef.current) {
      const modal = new window.bootstrap.Modal(downloadConfirmRef.current);
      modal.show();
    }
  };

  const confirmDownload = () => {
    if (!imageToDownload) return;

    const link = document.createElement("a");
    link.href = imageToDownload;
    link.download = "image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    if (window.bootstrap && downloadConfirmRef.current) {
      const modal = window.bootstrap.Modal.getInstance(downloadConfirmRef.current);
      modal.hide();
    }
  };

  const openShareModal = () => {
    if (window.bootstrap && shareModalRef.current) {
      const modal = new window.bootstrap.Modal(shareModalRef.current);
      modal.show();
    }
  };

  // ✅ helper to close modal and navigate
  const goToProfile = () => {
    if (window.bootstrap && modalRef.current) {
      const modal = window.bootstrap.Modal.getInstance(modalRef.current);
      if (modal) modal.hide();
    }
    navigate("/pixelmindprofile");
  };

  return (
    <div
      className="d-flex"
      style={{ minHeight: "100vh", backgroundColor: "#ffe0cc" }}
    >
      <div>
        <Sidebar />
      </div>
      <div className="flex-grow-1 d-flex flex-column">
        <Navbar />

        {/* Masonry Image Grid */}
        <div className="container mt-3">
          <div className="masonry-grid">
            {images.map((imgSrc, idx) => (
              <div
                key={idx}
                className="masonry-item position-relative mb-3"
                onClick={() => openModal(imgSrc, idx)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={imgSrc}
                  className="img-fluid rounded"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    display: "block",
                  }}
                  alt={`img-${idx}`}
                />

                {/* Overlay Icons */}
                <div
                  className="position-absolute top-0 end-0 d-flex flex-column gap-2 p-2"
                  style={{ zIndex: 2 }}
                >
                  <button
                    className="btn btn-light btn-sm rounded-circle shadow"
                    onClick={(e) => {
                      e.stopPropagation();
                      openDownloadConfirmModal(imgSrc);
                    }}
                    title="Download"
                  >
                    <MdOutlineFileDownload size={16} />
                  </button>

                  <button
                    className="btn btn-light btn-sm rounded-circle shadow"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(imgSrc, idx);
                    }}
                    title="Zoom"
                  >
                    <MdZoomOutMap size={16} />
                  </button>

                  <button
                    className="btn btn-warning btn-sm fw-bold shadow"
                    style={{ borderRadius: "12px", padding: "2px 8px" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      alert("Saved!");
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Primary Modal */}
        <div className="modal fade" ref={modalRef} tabIndex="-1">
          <div
            className="modal-dialog modal-dialog-centered"
            style={{ maxWidth: "500px" }}
          >
            <div className="modal-content border-0 rounded-4">
              <div className="modal-body p-0 bg-white overflow-hidden">
                <div className="position-relative w-100">
                  <img
                    src={currentImg}
                    className="w-100 pt-3"
                    style={{
                      maxHeight: "300px",
                      objectFit: "contain",
                      cursor: "pointer",
                    }}
                    alt={`selected-${currentIndex}`}
                    onClick={openFullscreenModal}
                  />

                  {/* Overlay Icons inside modal */}
                  <div className="position-absolute top-0 end-0 py-5 px-3 d-flex flex-column align-items-end gap-2">
                    <button
                      className="btn btn-sm btn-light"
                      onClick={() => alert("Saved!")}
                    >
                      Save
                    </button>

                    <button
                      className="btn btn-light btn-sm rounded-circle"
                      onClick={() => openDownloadConfirmModal(currentImg)}
                      title="Download"
                    >
                      <MdOutlineFileDownload size={18} />
                    </button>

                    <button
                      className="btn btn-light btn-sm rounded-circle"
                      title="Zoom"
                      onClick={openFullscreenModal}
                    >
                      <MdZoomOutMap size={18} />
                    </button>
                  </div>

                  <button
                    type="button"
                    className="btn-close position-absolute top-0 end-0 m-2"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>

                <div className="p-3">
                  <div className="d-flex align-items-center gap-4 fs-5 mb-2">
                    <span>
                      <CiHeart /> <span className="fs-6">4</span>
                    </span>
                    <span>
                      <FaRegComment /> <span className="fs-6">1</span>
                    </span>
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={openShareModal}
                      title="Share"
                      className="share-icon-wrapper"
                    >
                      <PiShareNetworkBold className="share-icon" />
                    </span>
                  </div>

                  <div className="d-flex align-items-center mb-2">
                    <div
                      className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center"
                      style={{ width: 40, height: 40 }}
                    >
                      P
                    </div>
                    <div className="ms-2 d-flex align-items-center justify-content-between w-100">
                      <div
                        className="fw-bold"
                        style={{ cursor: "pointer" }}
                        onClick={goToProfile}   // ✅ navigate with modal close
                      >
                        Pixelmind Solution
                      </div>
                      <button className="btn btn-sm btn-warning ms-2">
                        Follow
                      </button>
                    </div>
                  </div>

                  <hr className="my-2" />

                  <p className="mb-2">
                    <strong>Pixelmind Solution:</strong> Elevate your brand with
                    stunning visuals...
                  </p>

                  <div className="d-flex align-items-start mb-3">
                    <img
                      src={profilePic}
                      alt="Profile"
                      className="rounded-circle me-2"
                      style={{ width: 35, height: 35, objectFit: "cover" }}
                    />
                    <div>
                      <p className="mb-0">
                        <strong>Naveen:</strong> Nice!
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center border-top pt-2">
                    <input
                      className="form-control me-2"
                      placeholder="Add a comment"
                    />
                    <button className="btn btn-sm btn-primary">Post</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fullscreen Modal */}
        <div className="modal fade" ref={fullscreenRef} tabIndex="-1">
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content bg-dark bg-opacity-75 d-flex align-items-center justify-content-center position-relative">
              <img
                src={currentImg}
                alt={`fullscreen-${currentIndex}`}
                className="img-fluid border border-primary"
                style={{
                  maxHeight: "90%",
                  maxWidth: "90%",
                  objectFit: "contain",
                }}
              />

              <div className="position-absolute top-0 end-0 m-3 d-flex flex-column gap-2">
                <button
                  className="btn btn-light btn-sm fw-semibold"
                  onClick={() => alert("Saved!")}
                >
                  Save
                </button>
                <button
                  className="btn btn-light btn-sm"
                  onClick={() => openDownloadConfirmModal(currentImg)}
                >
                  <MdOutlineFileDownload size={18} /> Download
                </button>
              </div>

              <div className="position-absolute bottom-0 end-0 m-3 d-flex flex-column gap-2">
                <button className="btn btn-light btn-sm rounded-circle">
                  <MdZoomOutMap />
                </button>
              </div>

              <button
                type="button"
                className="btn btn-light position-absolute top-0 start-0 m-3"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
          </div>
        </div>

        {/* Download Confirmation Modal */}
        <div className="modal fade" ref={downloadConfirmRef} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div
              className="modal-content p-4 rounded-4 text-center"
              style={{ background: "#fff3eb" }}
            >
              <h5 className="fw-bold mb-3">Download</h5>

              <div className="mb-3 d-flex justify-content-center align-items-center gap-2">
                <FaStar className="text-warning" size={24} />
                <div>
                  <h6 className="m-0 fw-bold">1000</h6>
                  <small className="text-muted">Star Coins Available</small>
                </div>
              </div>

              <div className="mb-3 text-warning fw-bold">
                <FaStar className="me-1" /> 20 Star coins
              </div>

              <button
                onClick={confirmDownload}
                className="btn btn-warning fw-semibold"
              >
                Download Now
              </button>

              <button
                type="button"
                className="btn-close position-absolute top-0 end-0 m-2"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>

        {/* Share Modal */}
        <div className="modal fade" ref={shareModalRef} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded-4 p-3 position-relative">
              <h5 className="fw-bold mb-3 text-center">Share</h5>

              <div className="d-flex justify-content-around mb-3">
                <div className="share-option" title="Copy link">
                  <LuCopy className="share-icon" />
                  <span className="mt-1">Copy link</span>
                </div>
                <div className="share-option" title="WhatsApp">
                  <FaWhatsapp className="share-icon text-success" />
                  <span className="mt-1">WhatsApp</span>
                </div>
                <div className="share-option" title="Messenger">
                  <RiMessengerLine className="share-icon text-primary" />
                  <span className="mt-1">Messenger</span>
                </div>
                <div className="share-option" title="Facebook">
                  <FaFacebook className="share-icon text-primary" />
                  <span className="mt-1">Facebook</span>
                </div>
                <div className="share-option" title="X">
                  <FaXTwitter className="share-icon" />
                  <span className="mt-1">X</span>
                </div>
              </div>

              {/* Dummy user list */}
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Search by name or email"
              />
              {[
                { name: "Manoj kumar", email: "manojkumar@gmail.com" },
                { name: "Ganapathi", email: "ganapathi@gmail.com" },
                { name: "Manoj kumar", email: "manojkumar@gmail.com" },
                { name: "Ganapathi", email: "ganapathi@gmail.com" },
              ].map((user, idx) => (
                <div
                  key={idx}
                  className="d-flex justify-content-between align-items-center border-bottom py-2"
                >
                  <div className="d-flex align-items-center gap-2">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: 35,
                        height: 35,
                        backgroundColor: idx % 2 === 0 ? "#f7d6f4" : "#d2f4ea",
                        color: "#000",
                        fontWeight: "bold",
                      }}
                    >
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <div className="fw-semibold">{user.name}</div>
                      <div
                        className="text-muted"
                        style={{ fontSize: "0.85rem" }}
                      >
                        {user.email}
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-outline-primary btn-sm">
                    Send
                  </button>
                </div>
              ))}

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

      {/* Styles for share hover */}
      <style>{`
        .share-icon-wrapper {
          display: inline-flex;
          cursor: pointer;
          border-radius: 6px;
          padding: 4px;
          transition: background-color 0.3s ease;
        }
        .share-icon-wrapper:hover {
          background-color: #ffe066;
        }
        .share-icon {
          font-size: 22px;
          pointer-events: none;
          color: #000;
        }
        .share-option {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 0.9rem;
          cursor: pointer;
          padding: 10px;
          border-radius: 10px;
          transition: background-color 0.3s ease;
          user-select: none;
          min-width: 60px;
          color: #000;
        }
        .share-option:hover {
          background-color: #ffe066;
        }

        .masonry-grid {
          column-count: 4;
          column-gap: 1rem;
        }
        .masonry-item {
          break-inside: avoid;
          position: relative;
        }
        @media (max-width: 992px) {
          .masonry-grid { column-count: 3; }
        }
        @media (max-width: 768px) {
          .masonry-grid { column-count: 2; }
        }
        @media (max-width: 576px) {
          .masonry-grid { column-count: 1; }
        }
      `}</style>
    </div>
  );
};

export default Home;
