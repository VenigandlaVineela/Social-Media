import React from "react";

const ReceivedResponses = ({ onClose }) => {
  const responses = [
    { date: "Jul 7", name: "Manoj Kumar", channel: "Email", status: "Complete form" },
    { date: "Jul 7", name: "Manoj Kumar", channel: "Email", status: "Complete form" },
    { date: "Jul 7", name: "Manoj Kumar", channel: "Email", status: "Not Completed" },
    { date: "Jul 7", name: "Manoj Kumar", channel: "Email", status: "Complete form" },
    { date: "Jul 7", name: "Manoj Kumar", channel: "Email", status: "Complete form" },
    { date: "Jul 7", name: "Manoj Kumar", channel: "Email", status: "Complete form" },
    { date: "Jul 7", name: "Manoj Kumar", channel: "Email", status: "Complete form" },
    { date: "Jul 7", name: "Manoj Kumar", channel: "Email", status: "Complete form" },
  ];

  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        backdropFilter: "blur(6px)",
      }}
      onClick={onClose} // ✅ clicking outside closes
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <div className="modal-content rounded-3 shadow">
          {/* Header */}
          <div className="modal-header border-0">
            <h5 className="modal-title">Received Responses</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose} // ✅ close on X
            ></button>
          </div>

          {/* Body */}
          <div className="modal-body">
            <div className="table-responsive">
              <table
                className="table align-middle text-center border"
                style={{ backgroundColor: "#fffaf7" }}
              >
                <thead>
                  <tr>
                    <th scope="col">Date added</th>
                    <th scope="col">Name</th>
                    <th scope="col">Channel</th>
                    <th scope="col">Status</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {responses.map((res, index) => (
                    <tr key={index}>
                      <td>{res.date}</td>
                      <td>{res.name}</td>
                      <td>{res.channel}</td>
                      <td>
                        {res.status === "Complete form" ? (
                          <span className="badge bg-success-subtle text-success fw-semibold px-3 py-2">
                            {res.status}
                          </span>
                        ) : (
                          <span className="badge bg-danger-subtle text-danger fw-semibold px-3 py-2">
                            {res.status}
                          </span>
                        )}
                      </td>
                      <td>
                        <button className="btn btn-outline-warning btn-sm fw-semibold">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceivedResponses;
