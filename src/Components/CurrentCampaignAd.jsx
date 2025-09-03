import React from "react";
import ad from "../assets/ad.png";

const CurrentCampaignAd = ({ onClose }) => {
  return (
    <div
      className="modal show fade d-block m-5 p-5"
      tabIndex="-1"
      role="dialog"
      style={{
     //    backgroundColor: "rgba(0, 0, 0, 0.2)",
     //    backdropFilter: "blur(6px)",
     //    WebkitBackdropFilter: "blur(6px)",
        minHeight: "100vh",
      }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div
          className="modal-content p-3"
          style={{
            borderRadius: "16px",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            border: "2px solid #59aaff",
            boxShadow: "0 5px 15px rgba(0,0,0,.3)",
          }}
        >
          {/* Modal Header */}
          <div className="modal-header border-0 pb-0">
            <h5 className="modal-title fw-bold w-100 text-center mb-2">
              Current Campaign Ad
            </h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          {/* Modal Body */}
          <div className="modal-body pt-0">
            <img
              src={ad}
              alt="Ad Banner"
              className="img-fluid rounded mb-3"
              style={{ maxHeight: "200px", objectFit: "cover", width: "100%" }}
            />
            <h6 className="fw-bold">Diwali Discount Blast</h6>
            <p className="text-muted mb-1">Ad Format: <span className="fw-semibold">Image</span></p>
            <hr />
            <div className="row mb-2">
              <div className="col-6">
                <p className="mb-1"><strong>Status:</strong> Running</p>
                <p className="mb-1"><strong>Budget:</strong> ₹ 5000</p>
                <p className="mb-1"><strong>Reach:</strong> 12,300 people</p>
              </div>
              <div className="col-6">
                <p className="mb-1"><strong>Start Date:</strong> 22-07-2025</p>
                <p className="mb-1"><strong>End Date:</strong> 25-07-2025</p>
                <p className="mb-1"><strong>Clicks:</strong> 1200</p>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="modal-footer border-0 d-flex justify-content-center">
            <button
              className="btn btn-warning fw-semibold w-100"
              onClick={() => alert("Ad Paused")}
            >
              Pause Ad
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentCampaignAd;
