import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Ship, Map } from 'lucide-react';

const AISDataMonitoring = () => {
  const navigate = useNavigate();

  const handleViewMapClick = () => {
    navigate("/map");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-black text-white p-4 flex items-center">
        <div className="flex items-center space-x-4">
          <img src="/assets/logo.png" alt="Logo" className="h-9 w-auto rounded" />
          <div className="text-xl font-bold">SpillSafe</div>
        </div>

        <nav className="ml-auto">
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><a href="#" className="hover:underline">Features</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-2">AIS Data Monitoring</h1>
        <p className=" text-2xl text-gray-600 text-center mb-8 ">Monitor and detect oil spills using real-time AIS data.</p>

        <div className="flex flex-col items-center space-y-6">
          <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-sm h-48">
            <h2 className="text-xl font-semibold mb-2">Ship Information</h2>
            <div className="flex flex-col items-center justify-center h-full">
              <Ship size={48} className="text-gray-600 mb-2" />
              <p className="text-lg font-bold text-gray-700">Ship Name: Aegean Angel</p>
              <p className="text-lg font-bold text-gray-700">IMO: 9290323</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-sm h-48">
            <h2 className="text-xl font-semibold mb-2">Mapbox</h2>
            <div className="flex flex-col items-center justify-center h-full">
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

      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p>&copy; 2024 SpillSafe. All rights reserved.</p>
          <div>
            <a href="#" className="text-gray-600 hover:underline mr-4">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:underline">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AISDataMonitoring;