import { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";

import AccountManagement from "./AccountManagement";
import EditProfile from "./EditProfile";
import Notifications from "./Notifications";
import ProfileVisibility from "./ProfileVisibility";
import SocialPermissions from "./SocialPermissions";

const Profileupdate = () => {
  const [activeTab, setActiveTab] = useState("edit");

  const renderContent = () => {
    switch (activeTab) {
      case "edit":
        return <EditProfile />;
      case "account":
        return <AccountManagement />;
      case "visibility":
        return <ProfileVisibility />;
      case "notifications":
        return <Notifications />;
      case "permissions":
        return <SocialPermissions />;
      default:
        return <EditProfile />;
    }
  };

  return (
    <div
      className="d-flex"
      style={{ minHeight: "100vh", backgroundColor: "#ffe0cc" }}
    >
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column">
        <Navbar />
        <div className="flex-grow-1 p-3 me-5 ms-4 bg-white rounded">
          <div className="row">
            {/* Left Menu */}
            <div className="col-3 border-end">
              <ul className="list-unstyled">``
                <li
                  className={`d-flex justify-content-between align-items-center p-2 mb-2 rounded ${activeTab === "edit"
                    ? "bg-warning bg-opacity-25 text-warning fw-bold"
                    : "text-dark"
                    }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => setActiveTab("edit")}
                >
                  Edit profile
                  {activeTab === "edit" && (
                    <span className="fw-bold">&rsaquo;</span>
                  )}
                </li>
                <li
                  className={`d-flex justify-content-between align-items-center p-2 mb-2 rounded ${activeTab === "account"
                    ? "bg-warning bg-opacity-25 text-warning fw-bold"
                    : "text-dark"
                    }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => setActiveTab("account")}
                >
                  Account management
                  {activeTab === "account" && (
                    <span className="fw-bold">&rsaquo;</span>
                  )}
                </li>
                <li
                  className={`d-flex justify-content-between align-items-center p-2 mb-2 rounded ${activeTab === "visibility"
                    ? "bg-warning bg-opacity-25 text-warning fw-bold"
                    : "text-dark"
                    }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => setActiveTab("visibility")}
                >
                  Profile visibility
                  {activeTab === "visibility" && (
                    <span className="fw-bold">&rsaquo;</span>
                  )}
                </li>
                <li
                  className={`d-flex justify-content-between align-items-center p-2 mb-2 rounded ${activeTab === "permissions"
                    ? "bg-warning bg-opacity-25 text-warning fw-bold"
                    : "text-dark"
                    }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => setActiveTab("permissions")}
                >
                  Social permissions
                  {activeTab === "permissions" && (
                    <span className="fw-bold">&rsaquo;</span>
                  )}
                </li>
                <li
                  className={`d-flex justify-content-between align-items-center p-2 mb-2 rounded ${activeTab === "notifications"
                    ? "bg-warning bg-opacity-25 text-warning fw-bold"
                    : "text-dark"
                    }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => setActiveTab("notifications")}
                >
                  Notifications
                  {activeTab === "notifications" && (
                    <span className="fw-bold">&rsaquo;</span>
                  )}
                </li>
              </ul>
            </div>
            <div className="col-9">
              {renderContent()}
            </div>
            {/* Right Content */}

          </div>
          <div className="row">

            <div className="d-flex justify-content-center mt-3 gap-2 text-center">

              <button className="btn btn-secondary">Reset</button>
              <button className="btn btn-warning">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Profileupdate;
