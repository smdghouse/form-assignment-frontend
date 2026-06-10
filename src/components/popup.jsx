import {
    FaTimes,
    FaCheckCircle,
    FaDownload,
} from "react-icons/fa";

const Popup = ({
    isOpen,
    isLoading,
    questionPaper,
    onClose,
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl mx-4 h-[90vh] overflow-hidden">

                {/* Fixed Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 z-[9999] p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition"
                >
                    <FaTimes size={20} />
                </button>

                {/* Loading State */}
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center h-full p-8">
                        <div className="w-16 h-16 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>

                        <h2 className="mt-8 text-2xl font-bold text-gray-900">
                            Generating Question Paper
                        </h2>

                        <p className="mt-2 text-gray-500">
                            Please wait while AI creates your question paper...
                        </p>

                        <div className="w-full max-w-md bg-gray-200 rounded-full h-2 mt-8">
                            <div className="bg-black h-2 rounded-full w-3/4 animate-pulse"></div>
                        </div>

                        <div className="mt-8 space-y-3 text-sm text-gray-600">
                            <p>✓ Reading Assignment Details</p>
                            <p>✓ Creating Question Structure</p>
                            <p>⏳ Generating Questions...</p>
                            <p>○ Formatting Question Paper</p>
                        </div>
                    </div>
                ) : (
                    <div className="h-full overflow-y-auto p-8">
                        {/* Success Header */}
                        <div className="flex items-center gap-3 mb-8">
                            <FaCheckCircle
                                className="text-green-500"
                                size={28}
                            />

                            <h2 className="text-2xl font-bold">
                                Question Paper Generated
                            </h2>
                        </div>

                        {/* Question Paper Content */}
                        <pre className="whitespace-pre-wrap break-words font-sans text-sm">
                            {questionPaper}
                        </pre>

                        {/* Footer Buttons */}
                        <div className="flex justify-end gap-3 mt-8">
                            <button
                                onClick={onClose}
                                className="px-5 py-2 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
                            >
                                Close
                            </button>

                            <button
                                onClick={() => {
                                    console.log("downloading....");
                                }}
                                className="flex items-center gap-2 px-5 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition"
                            >
                                <FaDownload />
                                Download PDF
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Popup;