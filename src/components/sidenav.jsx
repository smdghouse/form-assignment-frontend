export default function Sidebar() {

  return (

   <aside className="hidden md:flex w-[280px] rounded-2xl min-h-screen bg-[#ECECEC] border-r border-gray-200 flex-col justify-between px-5 py-6">

      {/* Top Section */}
      <div>

        {/* Logo */}
        <div className="flex items-center gap-3 mb-10">

          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 via-red-500 to-purple-700 flex items-center justify-center shadow-md">

            <span className="text-white text-2xl font-bold">
              V
            </span>

          </div>

          <h1 className="text-[20px] font-bold text-[#2E2E2E]">
            VedaAI
          </h1>

        </div>

        {/* Button */}
        <button className="w-full bg-[#232323] hover:bg-black transition-all duration-300 text-white py-4 rounded-full text-[15px] font-medium border-[3px] border-[#F07D5A] shadow-lg mb-12">

          ✨ Create Assignment

        </button>

        {/* Navigation */}
        <nav className="space-y-3">

          <div className="flex items-center gap-3 text-[#8A8A8A] text-[18px] px-4 py-3 rounded-xl cursor-pointer hover:bg-gray-100 transition-all">

            <span>⊞</span>

            <span>Home</span>

          </div>

          <div className="flex items-center gap-3 text-[#8A8A8A] text-[18px] px-4 py-3 rounded-xl cursor-pointer hover:bg-gray-100 transition-all">

            <span>🖼</span>

            <span>My Groups</span>

          </div>

          <div className="flex items-center gap-3 bg-[#DFDFDF] text-[#2D2D2D] text-[18px] font-semibold px-4 py-3 rounded-xl cursor-pointer">

            <span>📄</span>

            <span>Assignments</span>

          </div>

          <div className="flex items-center gap-3 text-[#8A8A8A] text-[18px] px-4 py-3 rounded-xl cursor-pointer hover:bg-gray-100 transition-all">

            <span>▣</span>

            <span>AI Teacher’s Toolkit</span>

          </div>

          <div className="flex items-center gap-3 text-[#8A8A8A] text-[18px] px-4 py-3 rounded-xl cursor-pointer hover:bg-gray-100 transition-all">

            <span>◷</span>

            <span>My Library</span>

          </div>

        </nav>

      </div>

      {/* Bottom */}
      <div>

        {/* Settings */}
        <div className="flex items-center gap-3 cursor-pointer text-[#8A8A8A] text-[18px] px-4 py-3 mb-5">

          <span>⚙</span>

          <span>Settings</span>

        </div>

        {/* School Card */}
        <div className="bg-[#DFDFDF] rounded-2xl p-4 flex items-center gap-4">

          <div className="w-14 h-14 rounded-full bg-[#2AC07C] p-1">

            <div className="w-full h-full bg-[#ECECEC] rounded-full flex items-center justify-center text-2xl">
              🧑‍🏫
            </div>

          </div>

          <div>

            <h2 className="text-[18px] font-semibold text-[#2E2E2E] leading-none mb-1">

              Delhi Public School

            </h2>

            <p className="text-[14px] text-[#6F6F6F]">

              Bokaro Steel City

            </p>

          </div>

        </div>

      </div>

    </aside>

  );
}