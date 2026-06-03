import { useSelector } from "react-redux";
import EmptyAssignment from "../components/emptyAssignment.jsx";
import SideNav from "../components/sidenav.jsx";
import TopNavbar from "../components/topnav.jsx";
import MobileBottomNav from "../components/mobilenav.jsx";
import { useState } from "react";
import CreateAssignmentForm from "../components/assignmentform.jsx";

export default function Home() {
  const [open, setOpen] = useState(false);
  const assignments = useSelector(
    (state) => state.assignment.assignments
  );

  return (
    <div className="flex min-h-screen bg-[#E8E8E8]">

      <SideNav />

      <main className="flex-1 p-4">

        <TopNavbar />

        <div className="h-[calc(100vh-100px)] flex items-center justify-center">

          {assignments.length === 0 ? (
            <EmptyAssignment setOpen={setOpen} />
          ) : (
            <div>
              Lets go boom 
            </div>
          )}
          <CreateAssignmentForm
  open={open}
  setOpen={setOpen}
/>

        </div>

      </main>
      <MobileBottomNav />
    </div>
  );
}