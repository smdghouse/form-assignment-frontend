import { useSelector } from "react-redux";
import EmptyAssignment from "../components/emptyAssignment.jsx";
import SideNav from "../components/sidenav.jsx";
import TopNavbar from "../components/topnav.jsx";
import MobileBottomNav from "../components/mobilenav.jsx";
import { useState, useEffect, useRef } from "react";
import CreateAssignmentForm from "../components/assignmentform.jsx";
import Popup from "../components/popup.jsx";
import useWebsocket from "../Hooks/useWebsocket.jsx";
import { useDispatch } from "react-redux";
import { addAssignment, setAssignments } from "../app/assignmentslice.js";
import AssignmentCard from "../components/card.jsx";

export default function Home() {
  const dispatch = useDispatch()
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentAsgId, setCurrentAsgId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [questionPaper, setQuestionPaper] = useState("");
  const idRef = useRef(null)

  const [open, setOpen] = useState(false);
  useEffect(() => {
    console.log("currentAsgId changed:", currentAsgId);
    idRef.current = currentAsgId
  }, [currentAsgId]);
  const onmessage = (message) => {
    if (message.type === "generated") {

      dispatch(addAssignment({
        _id: message.assignmentId,
        title: message.title,
        questionPaper: message.questionPaper
      }));
      console.log(`this is the current asgid ${idRef.current}, this is the msg asgid ${message.assignmentId}`)
      if (message.assignmentId === idRef.current) {
        setIsLoading(false);
        setQuestionPaper(message.questionPaper);
      }
    }
    if (message.type == "INITIAL_DATA") {
      dispatch(setAssignments(message.data))
    }
  }
  const wss = useWebsocket(onmessage)
  const assignments = useSelector(
    (state) => state.assignment.assignments
  );

  return (
    <div className="flex min-h-screen bg-[#E8E8E8]">

      <SideNav />

      <main className="flex-1 p-4">

        <TopNavbar />

        <div className="w-full p-6">
          {assignments.length === 0 ? (
            <EmptyAssignment setOpen={setOpen} />
          ) : (
            <div className="h-[calc(100vh-140px)] overflow-y-auto p-4 pb-32">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {assignments.map((assignment) => (
      <AssignmentCard
        key={assignment._id}
        assignment={assignment}
        onView={(assignment) => {
          setQuestionPaper(assignment.questionPaper);
          setIsPopupOpen(true);
        }}
        onDelete={(id) => {
          console.log("Delete assignment:", id);
        }}
      />
    ))}
  </div>
</div>
          )}
          <Popup
            isLoading={isLoading}
            isOpen={isPopupOpen}
            questionPaper={questionPaper}
            onClose={
              () => {
                setIsLoading(false)
                setIsPopupOpen(false)
                setQuestionPaper('')
              }
            }
          />
          <CreateAssignmentForm
            popupset={setIsPopupOpen}
            asgIdset={setCurrentAsgId}
            loadingset={setIsLoading}
            open={open}
            setOpen={setOpen}
            currentId={currentAsgId}
          />

        </div>
        <div className="fixed bottom-6 right-6 z-50">
  <div className="fixed bottom-25 left-1/2 -translate-x-1/2 md:left-auto md:right-6 md:bottom-6 md:translate-x-0 z-50">
  <button
    onClick={() => setOpen(true)}
    className="
      bg-[#111111]
      text-white
      px-8
      py-4
      rounded-full
      flex
      items-center
      justify-center
      gap-3
      shadow-lg
      w-[90vw]
      max-w-sm
      md:w-auto
    "
  >
    <span className="text-2xl">+</span>
    <span>Create Your Assignment</span>
  </button>
</div>
</div>

      </main>
      <MobileBottomNav />
    </div>
  );
}