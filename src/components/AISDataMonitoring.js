import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Ship, Map } from 'lucide-react';

const AISDataMonitoring = () => {
  const navigate = useNavigate();
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [shipId, setShipId] = useState('');

  const handleViewMapClick = () => {
    navigate("/map");
  };

  const handleSearchClick = () => {
    setSearchVisible(!isSearchVisible);
  };

  const handleInputChange = (e) => {
    setShipId(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for Ship ID:', shipId);
    //  search logic here
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
        <p className="text-xl text-gray-600 text-center mb-8">Monitor and detect oil spills using real-time AIS data.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Ship Identification No.</h2>
            <div className="flex flex-col items-center">
              <Ship size={64} className="text-gray-600 mb-4" />
              <button
                className="bg-black text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
                onClick={handleSearchClick}
              >
                Search
              </button>
              {isSearchVisible && (
                <form onSubmit={handleSearchSubmit} className="mt-4">
                  <input
                    type="text"
                    value={shipId}
                    onChange={handleInputChange}
                    placeholder="Enter Ship ID"
                    className="border border-gray-300 rounded px-4 py-2"
                  />
                  <button
                    type="submit"
                    className="bg-black text-white px-4 py-2 rounded ml-2 hover:bg-green-500 transition-colors"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Mapbox</h2>
            <div className="flex flex-col items-center">
              <Map size={64} className="text-gray-600 mb-4" />
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
