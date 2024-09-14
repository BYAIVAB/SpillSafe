import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Ship, Map } from 'lucide-react';

const AISDataMonitoring = () => {
  const navigate = useNavigate();

  const handleViewMapClick = () => {
    navigate("/map");
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <header className="bg-black text-white p-4 flex items-center">
        <div className="flex items-center space-x-4">
          <img src="/assets/logo.png" alt="Logo" className="h-9 w-auto rounded" />
          <div className="text-xl font-bold">CleanWaves</div>
        </div>

        <nav className="ml-auto">
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><a href="#" className="hover:underline">Features</a></li>
          </ul>
        </nav>
      </header>

      {/* Video Background */}
      <div className="relative flex-1">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/assets/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content Overlay */}
        <main className="relative z-10 flex items-center justify-center flex-col text-center h-full w-full px-4">
          <h1 className="text-4xl font-bold mb-2 text-white">AIS Data Monitoring</h1>
          <p className="text-2xl text-gray-200 mb-8">
            Monitor and detect oil spills using real-time AIS data.
          </p>

          <div className="flex flex-col items-center space-y-6">
            <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-sm">
              <h2 className="text-xl font-semibold mb-2">Ship Information</h2>
              <div className="flex flex-col items-center justify-center">
                <Ship size={48} className="text-gray-600 mb-2" />
                <p className="text-lg font-bold text-gray-700">Ship Name: Aegean Angel</p>
                <p className="text-lg font-bold text-gray-700">IMO: 9290323</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-sm">
              <h2 className="text-xl font-semibold mb-2">Mapbox</h2>
              <div className="flex flex-col items-center justify-center">
                <Map size={48} className="text-gray-600 mb-2" />
                <button
                  className="bg-black text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
                  onClick={handleViewMapClick}
                >
                  View Map
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      <footer className="bg-black text-white py-3">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p>&copy; 2024 CleanWaves. All rights reserved.</p>
          <div>
            <a href="#" className="text-white hover:underline mr-4">Terms of Service</a>
            <a href="#" className="text-white hover:underline">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AISDataMonitoring;
