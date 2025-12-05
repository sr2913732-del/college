import { Bus, Clock, MapPin, AlertCircle } from 'lucide-react';

export function BusNavigationModule() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-blue-900 mb-2">Bus Navigation</h2>
        <p className="text-gray-600">Track college buses in real-time</p>
      </div>

      {/* Coming Soon Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Bus className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-blue-900 mb-4">Coming Soon</h3>
          <p className="text-gray-600 mb-8">
            The Bus Navigation feature is currently under development. Soon you'll be able to track college buses in real-time, 
            view routes, schedules, and estimated arrival times.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-4">
              <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h4 className="text-gray-900 mb-1">Live Tracking</h4>
              <p className="text-gray-600">Track bus location in real-time</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h4 className="text-gray-900 mb-1">ETA Updates</h4>
              <p className="text-gray-600">Get estimated arrival times</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <Bus className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h4 className="text-gray-900 mb-1">Route Info</h4>
              <p className="text-gray-600">View all bus routes and stops</p>
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-left">
            <div className="flex items-start">
              <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-yellow-900 mb-1">Future Scope Feature</p>
                <p className="text-yellow-800">
                  This module is planned for future implementation. Stay tuned for updates on when this feature will be available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
