import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";

const SocialPermissions = () => {
  const [commentsAllowed, setCommentsAllowed] = useState(false);
  const [filterOwnComments, setFilterOwnComments] = useState(false);
  const [filterOthersComments, setFilterOthersComments] = useState(false);
  const [autoplayVideos, setAutoplayVideos] = useState(false);
  const [showBlockedList, setShowBlockedList] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const blockedUsers = [
    { name: "Manoj kumar", email: "manojkumar@gmail.com", initial: "M" },
  ];

  const filteredUsers = blockedUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );


  // Blocked Accounts View

  if (showBlockedList) {
    return (
      <>
        <button className="btn btn-light m-5 " onClick={() => setShowBlockedList(false)}>
          <BiArrowBack size={20} />
        </button>

        <div className="container " style={{ maxWidth: "600px" }}>


          <h5 className="fw-bold text-center">Blocked Accounts</h5>
          <p className="  text-center mb-4" style={{ fontSize: "14px" }}>
            When you block someone, you’ll still be able to view each other’s profiles,
            but you won’t be able to message, follow, or save each other’s posts.
          </p>

          <input
            type="text"
            className="form-control mb-4"
            placeholder="🔍 Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {filteredUsers.map((user, index) => (
            <div
              key={index}
              className="d-flex align-items-center justify-content-between mb-3"
            >
              <div className="d-flex align-items-center">
                <div
                  className="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center me-3"
                  style={{ width: "40px", height: "40px" }}
                >
                  {user.initial}
                </div>
                <div>
                  <p className="mb-0 fw-bold">{user.name}</p>
                  <p className="mb-0  " style={{ fontSize: "13px" }}>
                    {user.email}
                  </p>
                </div>
              </div>
              <button className="btn btn-outline-secondary btn-sm">Unblock</button>
            </div>
          ))}
        </div>
      </>
    );
  }

  // -------------------------
  // Main Social Permissions View
  // -------------------------
  return (
    <div className="container-fluid py-4 px-4">
      <div className="row">
        <div className="col-md-6">
          <h5 className="fw-bold">Social permissions</h5>
          <p>
            Control who can engage with you on Name and adjust permissions for the latest tools.
          </p>

          {/* Mentions */}
          <div className="mb-4">
            <p className="fw-bold mb-1">@Mentions</p>
            <p className="mb-2">Choose who can @mention you</p>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="mention" id="anyone" defaultChecked />
              <label className="form-check-label" htmlFor="anyone">Anyone</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="mention" id="only-follow" />
              <label className="form-check-label" htmlFor="only-follow">Only people you follow</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="mention" id="turn-off" />
              <label className="form-check-label" htmlFor="turn-off">Turn off</label>
            </div>
          </div>

          {/* Comments */}
          <h6 className="fw-bold mt-4">Comments</h6>
          <div className="d-flex justify-content-between align-items-start mb-3">
            <div>
              <p className="fw-bold mb-1">Allow comments on your Posts</p>
              <p className="mb-0" style={{ fontSize: "14px" }}>
                Comments are automatically turned on for both new and current posts.
              </p>
            </div>
            <div className="form-check form-switch mt-1">
              <input
                className="form-check-input"
                type="checkbox"
                checked={commentsAllowed}
                onChange={() => setCommentsAllowed(!commentsAllowed)}
              />
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-start mb-3">
            <div>
              <p className="fw-bold mb-1">Filter comments on my Posts</p>
              <p className="mb-0" style={{ fontSize: "14px" }}>
                Automatically hide comments on your posts that include certain words or phrases.
              </p>
            </div>
            <div className="form-check form-switch mt-1">
              <input
                className="form-check-input"
                type="checkbox"
                checked={filterOwnComments}
                onChange={() => setFilterOwnComments(!filterOwnComments)}
              />
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-start mb-4">
            <div>
              <p className="fw-bold mb-1">Filter comments on others' Posts</p>
              <p className="mb-0" style={{ fontSize: "14px" }}>
                Automatically hide comments on others' posts containing specific words or phrases.
              </p>
            </div>
            <div className="form-check form-switch mt-1">
              <input
                className="form-check-input"
                type="checkbox"
                checked={filterOthersComments}
                onChange={() => setFilterOthersComments(!filterOthersComments)}
              />
            </div>
          </div>

          {/* Blocked Accounts */}
          <h6 className="fw-bold mt-4">Blocked accounts</h6>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <p className="mb-0" style={{ fontSize: "14px" }}>
              When you block someone, you’ll both still see each other’s profiles,<br />
              but can’t message, follow, or save each other’s content.
            </p>
            <button className="btn btn-light border" onClick={() => setShowBlockedList(true)}>
              Edit list
            </button>
          </div>

          {/* Autoplay */}
          <h6 className="fw-bold mt-4">Autoplay videos</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0" style={{ fontSize: "14px" }}>
              Autoplay videos on desktop
            </p>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                checked={autoplayVideos}
                onChange={() => setAutoplayVideos(!autoplayVideos)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialPermissions;
