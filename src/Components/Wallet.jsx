import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Wallet = () => {
     const [showModal, setShowModal] = useState(false);

     const glassCardStyle = {
          background: "rgba(255, 255, 255, 0.25)",
          borderRadius: "16px",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          width: "300px",
     };

     const starInfoStyle = {
          backgroundColor: "#ffe0cc",
          borderRadius: "8px",
          padding: "10px 0",
          marginBottom: "16px",
     };

     const handleAddStarsClick = () => {
          setShowModal(true);
     };

     const handleClose = () => {
          setShowModal(false);
     };

     return (
          <>
               {/* Main Wallet Section */}
               <div className="m-5">
                    <div className="d-flex justify-content-center align-items-center m-4 p-5">
                         <div className="text-center p-4 shadow bg-white" style={glassCardStyle}>
                              <div className="d-flex justify-content-between align-items-center mb-3">
                                   <h5 className="fw-bold m-0">My Wallet</h5>
                                   <button type="button" className="btn-close" onClick={handleClose}></button>
                              </div>


                              <img
                                   src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
                                   alt="Star"
                                   width="60"
                                   className="mb-3"
                              />

                              <div className="mx-auto text-center" style={starInfoStyle}>
                                   <div className="fs-4 fw-bold">1000</div>
                                   <div style={{ fontSize: "14px", color: "#555" }}>Stars Available</div>
                              </div>

                              <button className="btn btn-warning px-4 fw-semibold" onClick={handleAddStarsClick}>
                                   Add Stars
                              </button>
                         </div>
                    </div>
               </div>

               {/* Bootstrap Modal for Packages */}
               {showModal && (
                    <div
                         className="modal show fade d-block"
                         tabIndex="-1"
                         role="dialog"
                         style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                    >
                         <div className="modal-dialog modal-dialog-centered" role="document">
                              <div
                                   className="modal-content p-3"
                                   style={{
                                        backgroundColor: "#fff4eb",
                                        borderRadius: "12px",
                                        border: "1px solid #ddd",
                                   }}
                              >
                                   <div className="modal-header border-0">
                                        <h5 className="modal-title fw-bold">Select Package</h5>
                                        <button type="button" className="btn-close" onClick={handleClose}></button>
                                   </div>

                                   <div className="modal-body">
                                        <div className="row g-3" style={{ backgroundColor: "#fff4eb" }}>
                                             {/* Packages */}
                                             {[
                                                  { coins: 100, price: 120 },
                                                  { coins: 200, price: 210 },
                                                  { coins: 100, price: 100 },
                                                  { coins: 100, price: 120 },
                                                  { coins: 200, price: 210 },
                                                  { coins: 100, price: 100 },
                                             ].map((pkg, index) => (
                                                  <div className="col-4" key={index}>
                                                       <div
                                                            className="border rounded-3 p-2 text-center borderColor-warning bg-white"
                                                            style={{ cursor: "pointer", }}
                                                       >
                                                            <div className="fw-bold text-warning">
                                                                 <img
                                                                      src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
                                                                      alt="Star"
                                                                      width="20"
                                                                      className="me-1"
                                                                 />
                                                                 {pkg.coins}
                                                            </div>
                                                            <div style={{ fontSize: "14px" }}>₹ {pkg.price}</div>
                                                       </div>
                                                  </div>
                                             ))}
                                        </div>
                                   </div>

                                   <div className="modal-footer border-0 justify-content-center">
                                        <button className="btn btn-warning fw-semibold px-4" onClick={handleClose}>
                                             Proceed
                                        </button>
                                   </div>
                              </div>
                         </div>
                    </div>
               )}
          </>
     );
};

export default Wallet;
