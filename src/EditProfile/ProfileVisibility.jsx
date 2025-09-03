import React, { useState } from "react";

const ProfileVisibility = () => {
  const [isPrivate, setIsPrivate] = useState(true);
  const [isSearchPrivate, setIsSearchPrivate] = useState(true);

  return (
    <div className="container-fluid py-2 justtify-content-start">
      <div className="row">
        <div className="col-md-6">
          <h5 className="fw-bold">Profile Visibility</h5>
          <p className="mb-4">
            Customize your profile’s visibility on and off the platform.
          </p>

          {/* Private Profile */}
          <div className="mb-4 d-flex align-items-start justify-content-between">
            <div style={{ maxWidth: "90%" }}>
              <p className="mb-1 fw-bold">Private profile</p>
              <p className="mb-0" style={{ fontSize: "14px" }}>
                With a private profile, only approved people can view your followers, and who you follow.
              </p>
            </div>
            <div className="form-check form-switch mt-1">
              <input
                className="form-check-input"
                type="checkbox"
                id="privateProfileSwitch"
                checked={isPrivate}
                onChange={() => setIsPrivate(!isPrivate)}
              />
            </div>
          </div>

          {/* Search Privacy */}
          <div className="d-flex align-items-start justify-content-between">
            <div style={{ maxWidth: "90%" }}>
              <p className="mb-1 fw-bold">Search privacy</p>
              <p className="  mb-0" style={{ fontSize: "14px" }}>
                Keep your profile and boards out of search engine results.
              </p>
            </div>
            <div className="form-check form-switch mt-1">
              <input
                className="form-check-input"
                type="checkbox"
                id="searchPrivacySwitch"
                checked={isSearchPrivate}
                onChange={() => setIsSearchPrivate(!isSearchPrivate)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileVisibility;
