import React, { useState } from 'react';
import { MapPin, Clock, Navigation } from 'lucide-react';
import Card from '../../components/shared/Card';
import { buses, routes } from '../../data/dummyData';

const TrackBus = () => {
  const [selectedBus, setSelectedBus] = useState('1');
  
  const activeBuses = buses.filter(b => b.status === 'active' && b.location);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Track Bus</h1>
        <p className="text-gray-600">Real-time location of university buses</p>
      </div>

      <Card className="p-6">
        <div className="flex items-center space-x-4 mb-6">
          <label className="text-sm font-medium text-gray-700">Select Bus:</label>
          <select
            value={selectedBus}
            onChange={(e) => setSelectedBus(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {activeBuses.map((bus) => (
              <option key={bus.id} value={bus.id}>
                {bus.number} - {bus.route?.name}
              </option>
            ))}
          </select>
        </div>

        {selectedBus && (() => {
          const bus = activeBuses.find(b => b.id === selectedBus);
          return (
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Bus Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Bus Number</span>
                      <span className="font-medium">{bus?.number}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Route</span>
                      <span className="font-medium">{bus?.route?.name}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Driver</span>
                      <span className="font-medium">{bus?.driver?.name}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Capacity</span>
                      <span className="font-medium">{bus?.capacity} seats</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Live Location</h3>
                  <div className="bg-gray-100 rounded-lg p-8 text-center">
                    <MapPin className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Current Location</p>
                    <p className="font-medium text-gray-900">
                      Lat: {bus?.location?.lat}, Lng: {bus?.location?.lng}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Last updated: {bus?.location?.lastUpdated ? 
                        new Date(bus.location.lastUpdated).toLocaleTimeString() : 'N/A'
                      }
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Route Stops</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {bus?.route?.stops.map((stop, index) => (
                    <div 
                      key={index}
                      className={`p-3 rounded-lg border-2 ${
                        index === 1 ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        {index === 1 ? (
                          <Navigation className="h-4 w-4 text-blue-500" />
                        ) : (
                          <div className="h-4 w-4 rounded-full bg-gray-300" />
                        )}
                        <span className={`font-medium ${
                          index === 1 ? 'text-blue-900' : 'text-gray-900'
                        }`}>
                          {stop}
                        </span>
                      </div>
                      {index === 1 && (
                        <p className="text-xs text-blue-600 mt-1">Current Stop</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })()}
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">All Active Buses</h3>
        <div className="space-y-3">
          {activeBuses.map((bus) => (
            <div key={bus.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                <div>
                  <p className="font-medium text-gray-900">{bus.number}</p>
                  <p className="text-sm text-gray-600">{bus.route?.name}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">
                  {bus.location?.lastUpdated ? 
                    new Date(bus.location.lastUpdated).toLocaleTimeString() : 'N/A'
                  }
                </p>
                <p className="text-xs text-gray-500">Last seen</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default TrackBus;