import { useState } from "react";
import axios from "axios";
import useWebsocket from "../Hooks/useWebsocket.jsx";
export default function CreateAssignmentForm({
    open,
    setOpen,
}) {

    const [formData, setFormData] = useState({
        pdf: null,
        dueDate: "",
        additionalInfo: "",

        questionTypes: [
            {
                type: "Multiple Choice Questions",
                questions: 5,
                marks: 1,
            },
            {
                type: "Short Questions",
                questions: 3,
                marks: 2,
            },
            {
                type: "Long Questions",
                questions: 2,
                marks: 5,
            },
            {
                type: "Diagram / Graph Based",
                questions: 2,
                marks: 5,
            },
            {
                type: "Numerical Problems",
                questions: 4,
                marks: 3,
            },
        ],
    });
    const handleWebsocketMessage = (message) => {
        console.log("Received WebSocket message:", message);
        // Handle the message as needed
    };
    const ws = useWebsocket(handleWebsocketMessage);
    const handleOnSubmit = async(e) => {
        
        // Here you can handle the form submission, e.g., send the data to the backend
        console.log("Form Data:", formData);
        const payload = new FormData();
        payload.append("pdf", formData.pdf);
        payload.append("dueDate", formData.dueDate);
        payload.append("additionalInfo", formData.additionalInfo);
        payload.append("questionTypes", JSON.stringify(formData.questionTypes));
        const response = await axios.post("http://localhost:5000/api/assignment/generate", payload)
        console.log("Response from server:", response.data);
       
            setFormData({
        pdf: null,
        dueDate: "",
        additionalInfo: "",

        questionTypes: [
            {
                type: "Multiple Choice Questions",
                questions: 5,
                marks: 1,
            },
            {
                type: "Short Questions",
                questions: 3,
                marks: 2,
            },
            {
                type: "Long Questions",
                questions: 2,
                marks: 5,
            },
            {
                type: "Diagram / Graph Based",
                questions: 2,
                marks: 5,
            },
            {
                type: "Numerical Problems",
                questions: 4,
                marks: 3,
            },
        ],
    })
        
        setOpen(false)
    }
    const handleFileOnChange = (e) => {
        setFormData({
            ...formData,
            pdf: e.target.files[0]
        })
    }
    const handleDeleteQuestionType = (index) => {
        const updatedQuestions = [...formData.questionTypes];
        updatedQuestions.splice(index, 1);
        setFormData({
            ...formData,
            questionTypes: updatedQuestions
        });
    };

    const handleOnChange = (e) => {
        setFormData(
            {
                ...formData,
                [e.target.name]: e.target.value
            }

        )
    }
    const handleAddQuestionType = () => {
        setFormData({
            ...formData,
            questionTypes: [
                ...formData.questionTypes,
                {
                    type: "Multiple Choice Questions",
                    questions: 0,
                    marks: 0,
                }
            ]
        })
    }
    const handleQuestionchange = (index, value) => {
        const updatedQuestions = [...formData.questionTypes];
        updatedQuestions[index].type = value;
        setFormData({
            ...formData,
            questionTypes: updatedQuestions
        });
    }
    const handleNoOfQuestionChange = (index, value) => {
        const updatedQuestions = [...formData.questionTypes];
        updatedQuestions[index].questions = value;
        setFormData({
            ...formData,
            questionTypes: updatedQuestions
        });
    }
    const handleMarksChange = (index, value) => {
        const updatedQuestions = [...formData.questionTypes];
        updatedQuestions[index].marks = value;
        setFormData({
            ...formData,
            questionTypes: updatedQuestions
        });
    }

    return (
        <>
            {/* Backdrop */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Drawer */}
            <div
                className={`
          fixed
          bottom-0
          left-0
          right-0
          bg-white
          rounded-t-[32px]
          z-50
          max-h-[90vh]
          overflow-y-auto
          p-8
          transition-transform
          duration-300
          ease-in-out
          ${open
                        ? "translate-y-0"
                        : "translate-y-full"
                    }
        `}
            >
                {/* Header */}
                <div className="flex justify-between items-center mb-8">

                    <div>
                        <h1 className="text-3xl font-bold">
                            Assignment Details
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Basic information about your assignment
                        </p>
                    </div>

                    <button
                        onClick={() => setOpen(false)}
                        className="text-3xl hover:text-red-500"
                    >
                        ✕
                    </button>

                </div>

                {/* PDF Upload */}
                <div className="mb-6">

                    <label className="block mb-2 font-medium">
                        Upload PDF
                    </label>

                    <input
                        type="file"
                        accept=".pdf"
                        onChange={handleFileOnChange}
                        className="w-full border rounded-xl p-3"
                    />

                </div>

                {/* Due Date */}
                <div className="mb-6">

                    <label className="block mb-2 font-medium">
                        Due Date
                    </label>

                    <input
                        type="date"
                        value={formData.dueDate}
                        onChange={handleOnChange}
                        name="dueDate"
                        className="w-full border rounded-xl p-3"
                    />

                </div>

                {/* Question Types */}
                <div className="mb-8">

                    <h2 className="text-xl font-semibold mb-4">
                        Question Types
                    </h2>

                    <div className="space-y-4">

                        {formData.questionTypes.map((question, index) => (
                            <div
                                key={index}
                                className="border rounded-2xl p-4 flex justify-between items-center"

                            >
                                <div>

                                    <select
                                        value={question.type}
                                        onChange={(e) => handleQuestionchange(index, e.target.value)}
                                        className="border rounded-lg p-2"
                                    >
                                        <option value="Multiple Choice Questions">
                                            Multiple Choice Questions
                                        </option>

                                        <option value="Short Questions">
                                            Short Questions
                                        </option>

                                        <option value="Long Questions">
                                            Long Questions
                                        </option>

                                        <option value="Diagram / Graph Based">
                                            Diagram / Graph Based
                                        </option>

                                        <option value="Numerical Problems">
                                            Numerical Problems
                                        </option>
                                    </select>
                                </div>

                                {/* this is the delete button  */}
                                

                                <div className="flex gap-4">
                                    <button
                                    onClick={() => handleDeleteQuestionType(index)}
                                    className="
      text-red-500
      font-medium
      hover:text-red-700
      cursor-pointer
    "
                                >
                                    Delete
                                </button>

                                    <div>

                                        <p className="text-sm text-gray-500 mb-1">
                                            Questions
                                        </p>

                                        <input
                                            type="number"
                                            value={question.questions}
                                            className="w-20 border rounded-lg p-2"
                                            onChange={(e) => handleNoOfQuestionChange(index, e.target.value)}
                                        />

                                    </div>

                                    <div>

                                        <p className="text-sm text-gray-500 mb-1">
                                            Marks
                                        </p>

                                        <input
                                            type="number"
                                            value={question.marks}
                                            className="w-20 border rounded-lg p-2"
                                            onChange={(e) => handleMarksChange(index, e.target.value)}
                                        />

                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>

                </div>
                <div
                    onClick={handleAddQuestionType}
                    className="flex items-center gap-3 cursor-pointer mt-6"
                >

                    <div
                        className="
      w-12
      h-12
      rounded-full
      bg-[#2D2D2D]
      text-white
      flex
      items-center
      justify-center
      text-3xl
    "
                    >
                        +
                    </div>

                    <span className="font-semibold text-lg">
                        Add Question Type
                    </span>

                </div>

                {/* Additional Instructions */}
                <div className="mb-8">

                    <label className="block mb-2 font-medium">
                        Additional Instructions
                    </label>

                    <textarea
                        rows="5"
                        placeholder="Enter additional instructions..."
                        className="w-full border rounded-xl p-3"
                        value={formData.additionalInfo}
                        onChange={handleOnChange}
                        name="additionalInfo"
                    />

                </div>

                {/* Submit Button */}
                <button
                onClick={handleOnSubmit}
                    className="
            w-full
            bg-black
            text-white
            py-4
            rounded-full
            font-medium
            hover:bg-gray-900
          "
                >
                    Generate Assignment
                </button>

            </div>
        </>
    );
}