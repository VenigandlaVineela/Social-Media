import React from "react";
import { FaCheck } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Proceed = ({ onClose }) => {
  const plans = [
    { price: "₹199", hours: "4 Hr’s" },
    { price: "₹400", hours: "8 Hr’s" },
    { price: "₹800", hours: "16 Hr’s" },
  ];

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", padding: "2rem" }}
    >
      <div
        className="position-relative container p-4"
        style={{
          borderRadius: "20px",
          boxShadow: "0 6px 24px rgba(0,0,0,0.1)",
          backgroundColor: "#f8ebe3",
          maxWidth: "1000px",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            backgroundColor: "#f8ebe3",
            border: "none",
            borderRadius: "50%",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            width: "32px",
            height: "32px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IoMdClose size={20} />
        </button>

        {/* Plans Row */}
        <div className="row justify-content-center m-0" style={{ padding: "2rem" }}>
          {plans.map((plan, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div
                className="card h-100 shadow-sm border-0 text-center p-4"
                style={{
                  borderRadius: "15px",
                  backgroundColor: "#ffffff",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <h4 className="fw-bold mb-3">
                  {plan.price}
                  <small className="fw-normal fs-6">/{plan.hours}</small>
                </h4>

                <ul className="list-unstyled text-start mb-4">
                  {Array(4)
                    .fill("Lorem Ipsum is simply dummy")
                    .map((text, i) => (
                      <li key={i} className="mb-2 d-flex align-items-center">
                        <FaCheck className="text-success me-2" />
                        {text}
                      </li>
                    ))}
                </ul>

                <button
                  className="btn fw-bold text-white"
                  style={{
                    backgroundColor: "#fd7e14",
                    width: "100%",
                    borderRadius: "8px",
                    padding: "0.6rem",
                    fontSize: "1rem",
                    letterSpacing: "0.5px",
                  }}
                >
                  Proceed
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proceed;
