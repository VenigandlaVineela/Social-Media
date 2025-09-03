import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";

const AccountManagement = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div className="container-fluid py-2">
      <div className="row">
        <div className="col-md-6">
          <h4 className="fw-bold mb-1">Account management</h4>
          <p className="text-muted mb-4">
            Easily edit your profile and manage your account preferences.
          </p>

          {/* Your Account Section */}
          <h6 className="fw-bold">Your Account</h6>
          <form className="fw-bold">
            <div className="mb-3">
              <label className="form-label">E-mail</label>
              <input
                type="email"
                className="form-control"
                defaultValue="Pixelmindsolutions@gmail.com"
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Password</label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Password"
                />
                <span
                  className="input-group-text"
                  style={{ cursor: "pointer" }}
                  onClick={togglePassword}
                >
                  {showPassword ? <BiHide size={20} /> : <BiShow size={20} />}
                </span>
                <button className="btn btn-light border ms-2">Change</button>
              </div>
            </div>

            {/* Personal Information */}
            <h6 className="fw-bold mt-4">Personal information</h6>
            <div className="mb-3">
              <label className="form-label">Birthdate</label>
              <div className="input-group">
                <input
                  type="date"
                  className="form-control"
                  defaultValue="2025-08-07"
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label d-block">Gender</label>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="nonbinary"
                  value="nonbinary"
                />
                <label className="form-check-label" htmlFor="nonbinary">
                  Non-binary
                </label>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Country/Region</label>
              <select className="form-select">
                <option>India</option>
                <option>United States</option>
                <option>Canada</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="form-label">Language</label>
              <select className="form-select">
                <option>English</option>
                <option>Hindi</option>
                <option>French</option>
              </select>
            </div>
          </form>

          {/* Deactivation and Deletion Section */}
          <h6 className="fw-bold mt-4">Deactivation and deletion</h6>

          <div className="mb-3">
            <p className="mb-1 fw-bold">Deactivate account</p>
            <p className="text-muted mb-2">
              Temporarily hide your profile, Pins and boards
            </p>
            <button className="btn btn-outline-secondary">Deactivate account</button>
          </div>

          <div className="mb-5">
            <p className="mb-1 fw-bold">Delete your data and account</p>
            <p className="text-muted mb-2">
              Permanently delete your data and everything associated with your account
            </p>
            <button className="btn btn-danger">Delete account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountManagement;
