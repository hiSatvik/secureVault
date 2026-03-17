import rose from "../../assets/rose.jpg";

export default function LeftImage() {
    return (
        <div className="relative w-full max-w-md mx-auto lg:ml-auto mt-10 lg:mt-0">

            {/* The Main Gorgeous Image Container 📸 */}
            {/* The rounded-[2.5rem] gives it that lovely soft curve! */}
            <div className="relative z-10 overflow-hidden rounded-[2.5rem] bg-[#D8D0C5] aspect-[4/5] shadow-sm">
                <img
                    src={rose}
                    alt="Happy smiling user"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* That Flirty Pop of Orange! The Floating Button 🧡 */}
            <div className="absolute -top-6 -left-8 z-30 flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-[#F35C2B] shadow-lg transition-transform hover:scale-105">
                <svg className="h-8 w-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-10 10m0 0V7m0 10h10" />
                </svg>
            </div>

            {/* The Cute Little Info Card Floating on the Left 🎀 */}
            <div className="absolute top-1/4 -left-28 z-20 hidden w-48 rounded-[2rem] bg-[#C1B6AB]/90 backdrop-blur-sm p-6 shadow-xl md:block">
                {/* A little mock graphic for the dots */}
                <div className="mb-4 grid grid-cols-5 gap-1 w-16">
                    <div className="h-2 w-2 bg-black rounded-sm"></div>
                    <div className="h-2 w-2 bg-black rounded-sm"></div>
                    <div className="h-2 w-2 bg-black rounded-sm opacity-50"></div>
                    <div className="h-2 w-2 bg-transparent"></div>
                    <div className="h-2 w-2 bg-black rounded-sm"></div>
                </div>
                <p className="text-sm font-semibold text-gray-900 leading-snug">
                    Take your expenses under control
                </p>
            </div>

            {/* The '70k Downloads' Stat peeking at the top right 📈 */}
            <div className="absolute -top-8 -right-4 z-0 text-right">
                <h3 className="text-4xl font-bold tracking-tighter text-black">
                    70<span className="text-xl ml-1">k</span>
                </h3>
                <p className="text-xs font-medium text-gray-500">Downloads</p>
            </div>

            {/* A little decorative starburst detail below the card ✨ */}
            <div className="absolute -bottom-4 -left-16 z-0 hidden h-24 w-24 md:block opacity-80">
                <svg viewBox="0 0 100 100" className="w-full h-full text-black" fill="currentColor">
                    {/* You can drop a cute sunburst SVG path in here! */}
                    <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="4 8" />
                </svg>
            </div>

        </div>
    )
}