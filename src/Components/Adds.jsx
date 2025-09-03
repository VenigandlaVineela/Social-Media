import React, { useState } from "react";
import Campaign from "./Campaign";
import CurrentCampaignAd from "./CurrentCampaignAd";
import Proceed from "./Proceed";
import ReceivedResponses from "./ReceivedResponses";

const Adds = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalName) => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div
      className="d-flex justify-content-start align-items-center vh-100"
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        backdropFilter: "blur(6px)",
      }}
    >
      {/* Sidebar */}
      <div
        className="p-3 shadow w-25 rounded-3 position-relative"
        style={{ backgroundColor: "#fff3eb" }}
      >
        <div className="d-flex justify-content-end mb-2">
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => alert("Sidebar Closed!")}
          ></button>
        </div>

        <ul className="list-group list-group-flush">
          <li
            className="list-group-item"
            style={{ cursor: "pointer" }}
            onClick={() => openModal("campaign")}
          >
            Campaign
          </li>
          <li
            className="list-group-item"
            style={{ cursor: "pointer" }}
            onClick={() => openModal("responses")}
          >
            Received responses
          </li>
          <li
            className="list-group-item"
            style={{ cursor: "pointer" }}
            onClick={() => openModal("currentCampaign")}
          >
            Current Campaign Ad
          </li>
        </ul>
      </div>

      {/* Modals */}
      {activeModal === "campaign" && (
        <Campaign onClose={closeModal} onProceed={() => setActiveModal("proceed")} />
      )}

      {activeModal === "currentCampaign" && (
        <CurrentCampaignAd onClose={closeModal} />
      )}

      {activeModal === "proceed" && (
        <Proceed onClose={closeModal} />
      )}

      {activeModal === "responses" && (
        <ReceivedResponses onClose={closeModal} />
      )}
    </div>
  );
};

export default Adds;
