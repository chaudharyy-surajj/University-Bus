import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Clock, Wifi } from 'lucide-react';
import Card from '../../components/shared/Card';
import { buses } from '../../data/dummyData';

const LiveLocation = () => {
  const [isSharing, setIsSharing] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  const currentBus = buses[0]; // Current driver's bus

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleLocationSharing = () => {
    setIsSharing(!isSharing);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Live Location</h1>
        <p className="text-gray-600">Share your real-time location with students</p>
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className={`w-4 h-4 rounded-full ${isSharing ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}></div>
            <h3 className="text-lg font-semibold text-gray-900">
              Location Sharing: {isSharing ? 'ON' : 'OFF'}
            </h3>
          </div>
          <button
            onClick={toggleLocationSharing}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              isSharing 
                ? 'bg-red-600 text-white hover:bg-red-700' 
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            {isSharing ? 'Stop Sharing' : 'Start Sharing'}
          </button>
        </div>

        {isSharing && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Current Location</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Latitude</span>
                  <span className="font-medium">{currentBus.location?.lat}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Longitude</span>
                  <span className="font-medium">{currentBus.location?.lng}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Last Updated</span>
                  <span className="font-medium">{currentTime.toLocaleTimeString()}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-3">Connection Status</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <Wifi className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium text-green-900">GPS Connected</p>
                    <p className="text-sm text-green-600">Strong signal</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <Navigation className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-blue-900">Broadcasting</p>
                    <p className="text-sm text-blue-600">Location visible to students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Location History</h3>
        <div className="space-y-3">
          {[
            { time: '10:30 AM', location: 'Main Campus Gate', status: 'departed' },
            { time: '10:45 AM', location: 'Library Junction', status: 'stopped' },
            { time: '11:00 AM', location: 'City Center', status: 'stopped' },
            { time: '11:15 AM', location: 'Downtown Terminal', status: 'arrived' },
          ].map((entry, index) => (
            <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-medium">
                {index + 1}
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{entry.location}</p>
                <p className="text-sm text-gray-600">{entry.time}</p>
              </div>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                entry.status === 'arrived' ? 'bg-green-100 text-green-800' :
                entry.status === 'stopped' ? 'bg-yellow-100 text-yellow-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                {entry.status}
              </span>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Map View</h3>
        <div className="bg-gray-100 rounded-lg p-12 text-center">
          <MapPin className="h-24 w-24 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 mb-4">Interactive map will be displayed here</p>
          <p className="text-sm text-gray-500">
            Shows real-time bus location, route path, and upcoming stops
          </p>
        </div>
      </Card>
    </div>
  );
};

export default LiveLocation;