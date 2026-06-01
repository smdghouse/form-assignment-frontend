export default function TopNavbar() {
  return (
    <>
      {/* Desktop Navbar */}
      <header className="hidden md:flex h-20 bg-[#ECECEC] border border-gray-200 rounded-2xl px-8 items-center justify-between">

        <div className="flex items-center gap-4">

          <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-gray-100 transition">
            ←
          </button>

          <div className="flex items-center gap-3 text-[#9A9A9A]">

            <span className="text-2xl">⊞</span>

            <h2 className="text-2xl font-medium">
              Assignment
            </h2>

          </div>

        </div>

        <div className="flex items-center gap-6">

          <div className="relative">

            <button className="text-3xl">
              🔔
            </button>

            <span className="absolute top-0 right-0 w-3 h-3 bg-orange-500 rounded-full"></span>

          </div>

          <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl">

            <div className="w-12 h-12 rounded-full bg-orange-200 flex items-center justify-center">
              👨
            </div>

            <span className="text-lg font-semibold text-[#2E2E2E]">
              John Doe
            </span>

            <span>▼</span>

          </div>

        </div>

      </header>

      {/* Mobile Navbar */}
      <header className="md:hidden bg-white rounded-3xl px-5 py-4 flex items-center justify-between shadow-sm">

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-xl bg-[#2E2E2E] flex items-center justify-center">

            <span className="text-white font-bold text-xl">
              V
            </span>

          </div>

          <h1 className="text-2xl font-bold text-[#2E2E2E]">
            VedaAI
          </h1>

        </div>

        <div className="flex items-center gap-4">

          <div className="relative">

            <button className="text-2xl">
              🔔
            </button>

            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-orange-500 rounded-full"></span>

          </div>

          <div className="w-11 h-11 rounded-full bg-orange-200 flex items-center justify-center">
            👨
          </div>

          <button className="text-3xl">
            ☰
          </button>

        </div>

      </header>
    </>
  );
}