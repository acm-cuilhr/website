import { useLocation } from "react-router-dom";

export default function EventDetails() {
  const location = useLocation();
  const { event } = location.state || {};
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[400px] lg:h-[500px]">
        <img
          src={event?.image}
          alt={event?.title}
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-center text-white tracking-wider">
            Coding Spree
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 -mt-20 relative z-10">
        <div className="flex justify-center mb-12">
          <button className="bg-transparent hover:bg-blue-600 text-white border border-blue-500 rounded-full px-8 py-2 text-lg transition-all duration-300">
            REGISTER NOW
          </button>
        </div>

        {/* Event Details */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 text-center text-gray-300">
          <div className="flex items-center gap-2">
            <span className="text-blue-400">12-09-2024</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-400">4:00 PM - 8:00 PM</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-400">MONDAY</span>
          </div>
        </div>

        <div className="mb-12">
          <p className="text-gray-400 text-center max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        {/* Competition Details */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Competition Details
          </h2>
          <div className="space-y-4 text-gray-400">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>

        {/* Rules */}
        <div>
          <h2 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Rules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg relative overflow-hidden group hover:border-blue-500/50 transition-colors"
              >
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500" />
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
