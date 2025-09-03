import React, { useState } from "react";
import {
  FaHome,
  FaCommentDots,
  FaBell,
  FaPlusSquare,
  FaUsers,
  FaBullhorn,
  FaWallet,
  FaCog,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";  
import Messages from "./Messages";
import Notification from "./Notification";
import Adds from "./Adds";
import Wallet from "./Wallet";  



const Sidebar = () => {
  const [hovered, setHovered] = useState(null);
  const [showMessages, setShowMessages] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showAdds, setShowAdds] = useState(false);
  const [showWallet, setShowWallet] = useState(false);  

  const navigate = useNavigate();

  const iconStyle = (iconName) => ({
    cursor: "pointer",
    color: hovered === iconName ? "#fd7e14" : "#343a40",
    transition: "color 0.3s ease, transform 0.2s ease",
    transform: hovered === iconName ? "scale(1.2)" : "scale(1)",
  });

  //  Common toggle function
  const togglePanel = (panel) => {
    setShowMessages(panel === "messages" ? !showMessages : false);
    setShowNotifications(panel === "notifications" ? !showNotifications : false);
    setShowAdds(panel === "adds" ? !showAdds : false);
    setShowWallet(panel === "wallet" ? !showWallet : false);
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className="d-flex flex-column align-items-center bg-white vh-100 py-3"
        style={{ width: "60px" }}
      >
        <div
          className="rounded-circle mb-4"
          style={{ width: "20px", height: "20px", backgroundColor: "#F57014" }}
        ></div>

        <div className="d-flex flex-column gap-4">
          <FaHome
            size={22}
            style={iconStyle("home")}
            onMouseEnter={() => setHovered("home")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => navigate("/")}
          />

          <FaCommentDots
            size={22}
            style={iconStyle("comment")}
            onMouseEnter={() => setHovered("comment")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => togglePanel("messages")}
          />

          <FaBell
            size={22}
            style={iconStyle("bell")}
            onMouseEnter={() => setHovered("bell")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => togglePanel("notifications")}
          />

          <FaPlusSquare
            size={22}
            style={iconStyle("plus")}
            onMouseEnter={() => setHovered("plus")}
            onMouseLeave={() => setHovered(null)}
          />

          <FaUsers
            size={22}
            style={iconStyle("users")}
            onMouseEnter={() => setHovered("users")}
            onMouseLeave={() => setHovered(null)}
          />

          <FaBullhorn
            size={22}
            style={iconStyle("bullhorn")}
            onMouseEnter={() => setHovered("bullhorn")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => togglePanel("adds")}
          />

          {/* ✅ Wallet Icon opens Wallet Panel */}
          <FaWallet
            size={22}
            style={iconStyle("wallet")}
            onMouseEnter={() => setHovered("wallet")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => togglePanel("wallet")}
          />

          <FaCog
            size={22}
            style={iconStyle("cog")}
            onMouseEnter={() => setHovered("cog")}
            onMouseLeave={() => setHovered(null)}
          />
        </div>
      </div>

      {/* Messages Panel */}
      {showMessages && (
        <div
          className="position-fixed top-0 start-0 vh-100 w-100"
          style={{
            marginLeft: "60px",
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(15px)",
            WebkitBackdropFilter: "blur(15px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "10px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            padding: "10px",
            zIndex: 1000,
          }}
        >
          <Messages />
        </div>
      )}

      {/* Notifications Panel */}
      {showNotifications && (
        <div
          className="position-fixed top-0 start-0 vh-100 w-100"
          style={{
            marginLeft: "60px",
            background: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(15px)",
            WebkitBackdropFilter: "blur(15px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "10px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            padding: "10px",
            zIndex: 1000,
          }}
        >
          <Notification />
        </div>
      )}

      {/* Ads Panel */}
      {showAdds && (
        <div
          className="position-fixed top-0 start-0 vh-100 w-100"
          style={{
            marginLeft: "60px",
            background: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(15px)",
            WebkitBackdropFilter: "blur(15px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "10px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            padding: "10px",
            zIndex: 1000,
          }}
        >
          <Adds />
        </div>
      )}

      {/* ✅ Wallet Panel */}
      {showWallet && (
        <div
          className="position-fixed top-0 start-0 vh-100 w-100"
          style={{
            marginLeft: "60px",
            background: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(15px)",
            WebkitBackdropFilter: "blur(15px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "10px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            padding: "10px",
            zIndex: 1000,
          }}
        >
          <Wallet />
        </div>
      )}
    </>
  );
};

export default Sidebar;
