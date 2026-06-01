export default function MobileBottomNav() {
  return (
    <nav
      className="
      md:hidden
      fixed
      bottom-0
      left-0
      right-0
      h-24
      bg-black
      rounded-t-3xl
      flex
      justify-around
      items-center
      text-white
      z-40
      "
    >
      <div className="flex flex-col items-center">
        🏠
        <span className="text-xs">Home</span>
      </div>

      <div className="flex flex-col items-center">
        📄
        <span className="text-xs">Assignments</span>
      </div>

      <div className="flex flex-col items-center">
        📚
        <span className="text-xs">Library</span>
      </div>

      <div className="flex flex-col items-center">
        ✨
        <span className="text-xs">AI Toolkit</span>
      </div>
    </nav>
  );
}