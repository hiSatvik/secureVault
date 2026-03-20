export default function InputSection() {
    return (
        <div className="flex flex-row justify-between items-center w-full bg-white/30 backdrop-blur-sm p-4 rounded-3xl shadow-sm border border-white/50 
        transition-all duration-500 hover:shadow-xl hover:shadow-[#FF6A2A]/15 hover:-translate-y-0.5">
            
            <div className="relative">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                
                <input 
                    type="text" 
                    placeholder="Search File"
                    className="bg-gray-200/80 text-lg pl-12 pr-6 py-3 rounded-full w-72 transition-all duration-500 ease-out focus:w-96 focus:bg-white focus:ring-2 focus:ring-[#FF6A2A] focus:shadow-lg focus:shadow-orange-500/10 outline-none text-gray-800 placeholder-gray-500"
                />
            </div>

            {/* User Info & Settings Profile Section */}
            <div className="flex flex-row items-center gap-5">
                
                {/* Text aligned to the right for a cleaner look next to the icon */}
                <div className="flex flex-col text-right">
                    <p className="font-semibold text-gray-500 text-sm uppercase tracking-wide">UserName</p>
                    <p className="text-xl font-bold text-gray-900">test@gmail.com</p>
                </div>

                <button className="p-3 rounded-full bg-gray-100 border border-gray-200 hover:bg-white hover:rotate-90 hover:shadow-md transition-all duration-300 text-gray-700 hover:text-[#FF6A2A]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                </button>

            </div>
        </div>
    )
}