import React, { useState } from 'react';
import { BarChart3, Download, TrendingUp, Users, Bus, DollarSign } from 'lucide-react';
import Card from '../../components/shared/Card';
import StatsCard from '../../components/shared/StatsCard';
import { buses, drivers, bookings, schedules } from '../../data/dummyData';

const Reports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const stats = {
    totalRevenue: bookings.reduce((sum, b) => sum + b.fareAmount, 0),
    totalBookings: bookings.length,
    activeDrivers: drivers.filter(d => d.status === 'on-duty').length,
    utilization: Math.round((bookings.length / (schedules.length * 40)) * 100),
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600">System performance and usage statistics</p>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="day">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="h-5 w-5" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Revenue"
          value={`$${stats.totalRevenue.toFixed(2)}`}
          icon={DollarSign}
          color="bg-green-500"
          description="From bookings"
        />
        <StatsCard
          title="Total Bookings"
          value={stats.totalBookings}
          icon={BarChart3}
          color="bg-blue-500"
          description="Confirmed trips"
        />
        <StatsCard
          title="Active Drivers"
          value={stats.activeDrivers}
          icon={Users}
          color="bg-purple-500"
          description="Currently on duty"
        />
        <StatsCard
          title="Fleet Utilization"
          value={`${stats.utilization}%`}
          icon={TrendingUp}
          color="bg-orange-500"
          description="Average occupancy"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Trends</h3>
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-2">Booking trends chart</p>
            <p className="text-sm text-gray-500">Shows daily booking patterns over selected period</p>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Route Performance</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-900">Campus to Downtown</span>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">85% utilization</p>
                <p className="text-xs text-gray-500">42 bookings</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-900">North Campus Route</span>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">72% utilization</p>
                <p className="text-xs text-gray-500">28 bookings</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-900">South Campus Express</span>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">68% utilization</p>
                <p className="text-xs text-gray-500">31 bookings</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Fleet Status Overview</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-900">Bus</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Route</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Today's Trips</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Revenue</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Utilization</th>
              </tr>
            </thead>
            <tbody>
              {buses.map((bus) => (
                <tr key={bus.id} className="border-b border-gray-100">
                  <td className="py-3 px-4">
                    <span className="font-medium text-gray-900">{bus.number}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      bus.status === 'active' ? 'bg-green-100 text-green-800' :
                      bus.status === 'maintenance' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {bus.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-gray-600">{bus.route?.name || 'Unassigned'}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-gray-600">{Math.floor(Math.random() * 8) + 2}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-gray-600">${(Math.random() * 200 + 50).toFixed(2)}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-gray-600">{Math.floor(Math.random() * 40) + 50}%</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Peak Hours</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">8:00 AM - 9:00 AM</span>
              <div className="w-24 bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">5:00 PM - 6:00 PM</span>
              <div className="w-24 bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">12:00 PM - 1:00 PM</span>
              <div className="w-24 bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '67%' }}></div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Routes</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Campus to Downtown</span>
              <span className="font-medium text-gray-900">156 trips</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">North Campus Route</span>
              <span className="font-medium text-gray-900">142 trips</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">South Campus Express</span>
              <span className="font-medium text-gray-900">98 trips</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">System Health</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Overall Status</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Healthy
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Uptime</span>
              <span className="font-medium text-gray-900">99.8%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Active Alerts</span>
              <span className="font-medium text-red-600">2</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Reports;