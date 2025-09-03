import React, { useState } from "react";

const Notifications = () => {
     const [notifications, setNotifications] = useState({
          friends: {
               comments: true,
               mentions: true,
               reminders: true,
               photoComments: true,
          },
          activityFollowing: {
               follows: true,
               saves: true,
          },
          activityCreators: {
               newPosts: true,
               saves: true,
          },
          browser: {
               newPosts: true,
               saves: true,
          },
     });

     const handleToggle = (section, field) => {
          setNotifications((prev) => ({
               ...prev,
               [section]: {
                    ...prev[section],
                    [field]: !prev[section][field],
               },
          }));
     };

     return (
          <>
               <div className="container py-2">
                    <div className="row">
                         <div className="col-md-6">
                              <h5 className="fw-bold">Notifications</h5>
                              <p style={{ fontSize: "14px" }}>
                                   We’ll always notify you about important updates, but you decide what other notifications you’d like to receive.
                              </p>

                              <h6 className="fw-bold mt-4">On Website Name</h6>
                              <p style={{ fontSize: "14px" }}>Select which notifications to get directly to you.</p>

                              {/* Friends Section */}
                              <div className="border rounded p-3 mb-3">
                                   <h6 className="fw-bold">Friends</h6>
                                   {["comments", "mentions", "reminders", "photoComments"].map((field, index) => (
                                        <div className="form-check" key={index}>
                                             <input
                                                  className="form-check-input"
                                                  type="checkbox"
                                                  checked={notifications.friends[field]}
                                                  onChange={() => handleToggle("friends", field)}
                                                  id={`friends-${field}`}
                                             />
                                             <label className="form-check-label" htmlFor={`friends-${field}`}>
                                                  {field === "comments"
                                                       ? "Comments"
                                                       : field === "mentions"
                                                            ? "Mentions"
                                                            : field === "reminders"
                                                                 ? "Remainders"
                                                                 : "Comments with photos"}
                                             </label>
                                        </div>
                                   ))}
                              </div>

                              {/* Activity from people you follow */}
                              <div className="border rounded p-3 mb-3">
                                   <h6 className="fw-bold">Activity From people you follow</h6>
                                   {["follows", "saves"].map((field, index) => (
                                        <div className="form-check" key={index}>
                                             <input
                                                  className="form-check-input"
                                                  type="checkbox"
                                                  checked={notifications.activityFollowing[field]}
                                                  onChange={() => handleToggle("activityFollowing", field)}
                                                  id={`follow-${field}`}
                                             />
                                             <label className="form-check-label" htmlFor={`follow-${field}`}>
                                                  {field.charAt(0).toUpperCase() + field.slice(1)}
                                             </label>
                                        </div>
                                   ))}
                              </div>

                              {/* Activity from creators */}
                              <div className="border rounded p-3 mb-3">
                                   <h6 className="fw-bold">Activity Form Creators</h6>
                                   {["newPosts", "saves"].map((field, index) => (
                                        <div className="form-check" key={index}>
                                             <input
                                                  className="form-check-input"
                                                  type="checkbox"
                                                  checked={notifications.activityCreators[field]}
                                                  onChange={() => handleToggle("activityCreators", field)}
                                                  id={`creators-${field}`}
                                             />
                                             <label className="form-check-label" htmlFor={`creators-${field}`}>
                                                  {field === "newPosts" ? "New Posts from people you follow" : "Saves"}
                                             </label>
                                        </div>
                                   ))}
                              </div>

                              {/* Browser notifications */}
                              <div className="border rounded p-3">
                                   <h6 className="fw-bold">Browser notifications</h6>
                                   {["newPosts", "saves"].map((field, index) => (
                                        <div className="form-check" key={index}>
                                             <input
                                                  className="form-check-input"
                                                  type="checkbox"
                                                  checked={notifications.browser[field]}
                                                  onChange={() => handleToggle("browser", field)}
                                                  id={`browser-${field}`}
                                             />
                                             <label className="form-check-label" htmlFor={`browser-${field}`}>
                                                  {field === "newPosts" ? "New Posts from people you follow" : "Saves"}
                                             </label>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
};

export default Notifications;
