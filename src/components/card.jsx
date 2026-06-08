import { useState, useRef, useEffect } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

export default function AssignmentCard({
  assignment,
  onView,
  onDelete,
}) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200 w-full max-w-md">
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-lg">
          {assignment.title}
        </h3>

        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setShowMenu(!showMenu)}
          >
            <HiOutlineDotsVertical size={20} />
          </button>

          {showMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50 overflow-hidden">
              <button
                onClick={() => {
                  onView?.(assignment);
                  setShowMenu(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                View Paper
              </button>

              <button
                onClick={() => {
                  onDelete?.(assignment._id);
                  setShowMenu(false);
                }}
                className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      <p className="text-gray-500 text-sm mt-3">
        Question Paper Generated
      </p>
    </div>
  );
}