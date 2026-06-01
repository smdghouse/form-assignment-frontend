import emptyAssignment from "../assets/emptyAssignment.png";

export default function EmptyAssignments({setOpen}) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4">

      <img
        src={emptyAssignment}
        alt="No Assignments"
        className="w-[220px] md:w-[320px] mb-6 md:mb-8"
      />

      <h1 className="text-[28px] md:text-[42px] font-bold text-[#2B2B2B] mb-4">
        No assignments yet
      </h1>

      <p className="text-[#7B7B7B] text-[16px] md:text-[22px] max-w-3xl leading-relaxed mb-8 md:mb-10">
        Create your first assignment to start collecting and grading
        student submissions.
      </p>

      <button onClick={() => setOpen(true)} className="bg-[#111111] text-white px-8 py-4 rounded-full flex items-center gap-3">

        <span className="text-2xl">+</span>

        <span>Create Your Assignment</span>

      </button>

    </div>
  );
}