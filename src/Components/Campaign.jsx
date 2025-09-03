import React, { useState } from "react";
import { FaUpload, FaTrash } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";

const Campaign = ({ onClose, onProceed }) => {
  const [file, setFile] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [openMenu, setOpenMenu] = useState(null); // track which question menu is open

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const addQuestion = () =>
    setQuestions([
      ...questions,
      { text: "", options: [""], type: "multiple" },
    ]);

  const updateQuestionText = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index].text = value;
    setQuestions(newQuestions);
  };

  const addOption = (qIndex) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options.push("");
    setQuestions(newQuestions);
  };

  const updateOption = (qIndex, oIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options[oIndex] = value;
    setQuestions(newQuestions);
  };

  const deleteQuestion = (qIndex) =>
    setQuestions(questions.filter((_, i) => i !== qIndex));

  const updateQuestionType = (qIndex, type) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].type = type;
    setQuestions(newQuestions);
    setOpenMenu(null);  
  };

  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(6px)",
        minHeight: "100vh",
        padding: "2rem",
      }}
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-dialog-centered"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content rounded-3 shadow">
          {/* Header */}
          <div className="modal-header border-0">
            <h5 className="modal-title">Campaign</h5>
            <button
              type="button"
              className="btn"
              style={{ border: "none", background: "transparent" }}
              onClick={onClose}
            >
              <IoClose size={24} />
            </button>
          </div>

          {/* Body */}
          <div className="modal-body">
            {/* Upload Box */}
            <div
              className="border border-2 rounded d-flex flex-column align-items-center justify-content-center text-center p-4 mb-3"
              style={{
                borderStyle: "dashed",
                borderColor: "#ccc",
                backgroundColor: "rgba(255,255,255,0.4)",
              }}
            >
              <FaUpload size={35} className="mb-2 text-secondary" />
              <p className="mb-1 fw-semibold">Upload Image Or Video</p>
              <label className="btn btn-sm btn-warning text-white mt-2 d-flex align-items-center gap-2">
                <FaUpload size={14} /> Upload
                <input type="file" onChange={handleFileChange} hidden />
              </label>
            </div>

            {/* Dynamic Questions */}
            {questions.map((q, qIndex) => (
              <div
                key={qIndex}
                className="border p-3 rounded mb-3 position-relative bg-white"
              >
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Question"
                    value={q.text}
                    onChange={(e) =>
                      updateQuestionText(qIndex, e.target.value)
                    }
                  />

                  {/* Custom Popover Menu */}
                  <div className="position-relative ms-2">
                    <button
                      className="btn btn-light"
                      onClick={() =>
                        setOpenMenu(openMenu === qIndex ? null : qIndex)
                      }
                    >
                      <BsThreeDotsVertical />
                    </button>

                    {openMenu === qIndex && (
                      <div
                        className="position-absolute bg-white border rounded shadow-sm p-2"
                        style={{ top: "100%", right: 0, zIndex: 1000 }}
                      >
                        <button
                          className={`dropdown-item ${
                            q.type === "multiple" ? "active fw-bold" : ""
                          }`}
                          onClick={() => updateQuestionType(qIndex, "multiple")}
                        >
                          Multiple Choice
                        </button>
                        <button
                          className={`dropdown-item ${
                            q.type === "checkbox" ? "active fw-bold" : ""
                          }`}
                          onClick={() => updateQuestionType(qIndex, "checkbox")}
                        >
                          Checkboxes
                        </button>
                        <button
                          className={`dropdown-item ${
                            q.type === "dropdown" ? "active fw-bold" : ""
                          }`}
                          onClick={() => updateQuestionType(qIndex, "dropdown")}
                        >
                          Drop-down
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Render Options */}
                {q.type !== "dropdown" &&
                  q.options.map((opt, oIndex) => (
                    <div key={oIndex} className="form-check mb-2">
                      <input
                        type={q.type === "multiple" ? "radio" : "checkbox"}
                        className="form-check-input"
                        disabled
                      />
                      <input
                        type="text"
                        className="form-control d-inline-block w-75 ms-2"
                        placeholder="Option"
                        value={opt}
                        onChange={(e) =>
                          updateOption(qIndex, oIndex, e.target.value)
                        }
                      />
                    </div>
                  ))}

                {q.type === "dropdown" && (
                  <select className="form-select mb-2" disabled>
                    {q.options.map((opt, oIndex) => (
                      <option key={oIndex}>
                        {opt || `Option ${oIndex + 1}`}
                      </option>
                    ))}
                  </select>
                )}

                {q.type !== "dropdown" && (
                  <button
                    className="btn btn-link p-0 mt-2"
                    onClick={() => addOption(qIndex)}
                  >
                    + Add Option
                  </button>
                )}

                <div className="text-end">
                  <button
                    className="btn btn-sm btn-danger mt-2"
                    onClick={() => deleteQuestion(qIndex)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}

            {/* Add Question */}
            <button
              className="btn btn-outline-warning w-100 mb-3 fw-bold"
              onClick={addQuestion}
            >
              + Add Question
            </button>

            {/* Contact Inputs */}
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Enter your mobile number"
            />
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Enter your email"
            />

            {/* Proceed Button */}
            <button
              className="btn btn-warning text-white w-100 fw-bold"
              onClick={onProceed}
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
