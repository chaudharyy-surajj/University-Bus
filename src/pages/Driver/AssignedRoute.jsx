import React from 'react';
import { MapPin, Clock, Users } from 'lucide-react';
import Card from '../../components/shared/Card';
import { drivers, buses, routes } from '../../data/dummyData';

const AssignedRoute = () => {
  const driver = drivers[0]; // Current driver
  const assignedBus = buses.find(b => b.id === driver.assignedBus);
  const assignedRoute = routes.find(r => r.id === driver.assignedRoute);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Assigned Route</h1>
        <p className="text-gray-600">Your current route information</p>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Route Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-3">
            <MapPin className="h-8 w-8 text-blue-500" />
            <div>
              <p className="font-medium text-gray-900">{assignedRoute?.name}</p>
              <p className="text-sm text-gray-600">Route Name</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Clock className="h-8 w-8 text-green-500" />
            <div>
              <p className="font-medium text-gray-900">{assignedRoute?.estimatedTime} min</p>
              <p className="text-sm text-gray-600">Estimated Time</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Users className="h-8 w-8 text-purple-500" />
            <div>
              <p className="font-medium text-gray-900">{assignedRoute?.distance} km</p>
              <p className="text-sm text-gray-600">Total Distance</p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Route Stops</h3>
        <div className="space-y-3">
          {assignedRoute?.stops.map((stop, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-medium">
                {index + 1}
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{stop}</p>
                <p className="text-sm text-gray-600">
                  {index === 0 ? 'Starting Point' : 
                   index === assignedRoute.stops.length - 1 ? 'Final Destination' : 
                   'Intermediate Stop'}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">
                  ~{Math.round((assignedRoute.estimatedTime / assignedRoute.stops.length) * (index + 1))} min
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Bus Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-600">Bus Number</span>
            <span className="font-medium">{assignedBus?.number}</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-600">Capacity</span>
            <span className="font-medium">{assignedBus?.capacity} seats</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-600">Status</span>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              assignedBus?.status === 'active' ? 'bg-green-100 text-green-800' : 
              assignedBus?.status === 'maintenance' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {assignedBus?.status}
            </span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-600">Driver</span>
            <span className="font-medium">{driver.name}</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AssignedRoute;