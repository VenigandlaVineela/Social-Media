import React from "react";

const EditProfile = () => {
  return (
    <div className="container py-4">
      <h3 className="mb-4 fw-bold">Edit Profile</h3>

      {/* Profile Avatar and Button */}
      <div className="d-flex align-items-center mb-4">
        <div
          className="rounded-circle d-flex justify-content-center align-items-center text-center me-3"
          style={{
            width: "60px",
            height: "60px",
            fontSize: "24px",
            backgroundColor: "#E5C3EC",
            color: "#000",
          }}
        >
          P
        </div>
        <button className="btn btn-secondary btn-sm">Change profile photo</button>
      </div>

      {/* Form */}
      <form className="fw-bold">
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">First Name</label>
            <input type="text" className="form-control" defaultValue="Pixelmind" />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Last Name</label>
            <input type="text" className="form-control" defaultValue="Solutions" />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">About</label>
          <textarea className="form-control" rows="3" placeholder="Tell your story"></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Website</label>
          <input type="url" className="form-control" placeholder="https://" />
        </div>

        <div className="mb-4">
          <label className="form-label">User Name</label>
          <input type="text" className="form-control" defaultValue="Vineelavenigandla" />
        </div>

        <div className="d-flex justify-content-between">
          <button type="reset" className="btn btn-secondary">Reset</button>
          <button type="submit" className="btn btn-warning text-white">Save</button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
