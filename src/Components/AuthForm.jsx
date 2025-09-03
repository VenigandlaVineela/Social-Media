import React, { useState } from "react";
import image1 from "../assets/image1.png";
import profile from "../assets/profile.png";

import { FaUser, FaEnvelope, FaPhone, FaVenusMars } from "react-icons/fa";
import { Link } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);

  // Handle form submit
  const handleSubmit = () => {
    if (isLogin) {
      setShowOTP(true);
    } else {
      setIsLogin(true);
    }
  };

  // Handle OTP input change
  const handleOtpChange = (value, index) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  // Handle OTP Verification
  const handleVerifyOtp = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length === 4) {
      alert("✅ OTP Verified Successfully!");
      setShowOTP(false);
    } else {
      alert("❌ Please enter a valid 4-digit OTP");
    }
  };

  return (
    <>
      {/* ------------------ SIGNUP / LOGIN / OTP SECTION ------------------ */}
      <div
        className="container-fluid"
        style={{ background: "linear-gradient(135deg, #F57014, #FEB484)" }}
      >
        <div className="row">
          {/* Left Section */}
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <h1 className="mt-5 pt-5 ps-4 text-white">
                  Connect, share and react with people in your life
                </h1>
              </div>
              <div className="col-md-6">
                <img src={image1} className="w-100 mt-5" alt="illustration" />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="position-relative w-100">
              <div
                className="border rounded p-4 shadow bg-white mt-5 position-absolute"
                style={{ transform: "translate(10%,-30%)", width: "80%" }}
              >
                {/* OTP Page */}
                {showOTP ? (
                  <>
                    <h4 className="text-center mb-3">Enter OTP</h4>
                    <p className="text-center text-muted">
                      We’ve sent a verification code to <b>user@gmail.com</b>.
                    </p>

                    <div className="d-flex justify-content-center gap-2 mb-3">
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          id={`otp-${index}`}
                          type="text"
                          value={digit}
                          onChange={(e) => handleOtpChange(e.target.value, index)}
                          maxLength={1}
                          className="form-control text-center"
                          style={{
                            width: "50px",
                            height: "50px",
                            fontSize: "20px",
                          }}
                        />
                      ))}
                    </div>

                    <p className="text-center text-muted">
                      Code valid for 10 minutes.{" "}
                      <span
                        style={{ color: "#F88435", cursor: "pointer" }}
                        className="fw-bold"
                      >
                        Resend
                      </span>
                    </p>

                    <div className="d-grid">
                      <Link to='/home'
                        onClick={handleVerifyOtp}
                        className="btn text-white fw-bold"
                        style={{ backgroundColor: "#F88435" }}
                      >
                        Verify
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <h4 className="text-center mb-4">
                      {isLogin ? "Login Your account" : "Create a new account"}
                    </h4>

                    {isLogin ? (
                      <div className="input-group mb-3">
                        <span className="input-group-text">
                          <FaUser />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your email or mobile number"
                        />
                      </div>
                    ) : (
                      <>
                        <div className="input-group mb-3">
                          <span className="input-group-text">
                            <FaUser />
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                          />
                        </div>

                        <div className="input-group mb-3">
                          <span className="input-group-text">
                            <FaEnvelope />
                          </span>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="E-mail"
                          />
                        </div>

                        <div className="input-group mb-3">
                          <span className="input-group-text">
                            <FaPhone />
                          </span>
                          <input
                            type="tel"
                            className="form-control"
                            placeholder="Mobile Number"
                          />
                        </div>

                        <div className="input-group mb-3">
                          <span className="input-group-text">
                            <FaVenusMars />
                          </span>
                          <select className="form-select">
                            <option value="">Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </>
                    )}

                    <div className="d-grid mb-3">
                      <button
                        onClick={handleSubmit}
                        className="btn text-white fw-bold"
                        style={{ backgroundColor: "#F88435" }}
                      >
                        {isLogin ? "Sign in" : "SignUp"}
                      </button>
                    </div>

                    <p className="text-center">
                      {isLogin ? (
                        <>
                          Don’t have account?{" "}
                          <span
                            onClick={() => setIsLogin(false)}
                            style={{ color: "#F88435", cursor: "pointer" }}
                            className="fw-bold"
                          >
                            Sign Up
                          </span>
                        </>
                      ) : (
                        <>
                          Already have account?{" "}
                          <span
                            onClick={() => setIsLogin(true)}
                            style={{ color: "#F88435", cursor: "pointer" }}
                            className="fw-bold"
                          >
                            Sign in
                          </span>
                        </>
                      )}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  ACCOUNT SELECTION SECTION  */}
      <div className="container   mt-5">
        <h5 className="mb-4">Login as...</h5>
        <div className="d-flex   gap-5">
          {/* Existing Account */}
          <div className="text-center">
            <img
              src={profile}
              alt="profile"
              className="rounded-circle"
              style={{ width: "80px", height: "80px" }}
            />
            <p className="mt-2">PMS</p>
          </div>

          {/* Add Account */}
          <div className="text-center">
            <div
              className="d-flex flex-column align-items-center justify-content-center border rounded-circle"
              style={{
                width: "80px",
                height: "80px",
                backgroundColor: "#EAF4FF",
                cursor: "pointer",
              }}
            >
              <span style={{ fontSize: "30px", color: "#333" }}>+</span>
            </div>
            <p className="mt-2">Add Account</p>
          </div>
        </div>

        {/* Footer */}
        <hr className="mt-5" />
        <div className="d-flex justify-content-center gap-5 text-muted small">
          <span>Privacy</span>
          <span>Cookies</span>
          <span>Terms</span>
          <span>Help</span>
        </div>
      </div>
    </>
  );
};

export default AuthForm;  