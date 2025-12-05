import { useState } from 'react';
import { CheckCircle, XCircle, Clock, IndianRupee, AlertTriangle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface NoDuesProps {
  studentData: any;
}

interface DepartmentDue {
  id: string;
  name: string;
  amount: number;
  status: 'cleared' | 'pending' | 'paid';
  lastUpdated: string;
}

export function NoDues({ studentData }: NoDuesProps) {
  const [departments, setDepartments] = useState<DepartmentDue[]>([
    { id: 'office', name: 'Office Section', amount: 0, status: 'cleared', lastUpdated: '2025-11-10' },
    { id: 'library', name: 'Library Section', amount: 50, status: 'pending', lastUpdated: '2025-11-18' },
    { id: 'tnp', name: 'T & P Cell', amount: 0, status: 'cleared', lastUpdated: '2025-11-05' },
    { id: 'store', name: 'Store Section', amount: 0, status: 'cleared', lastUpdated: '2025-11-01' },
    { id: 'computer', name: 'Computer Lab Section', amount: 200, status: 'pending', lastUpdated: '2025-11-15' },
    { id: 'mba', name: 'MBA Section', amount: 0, status: 'cleared', lastUpdated: '2025-10-28' },
    { id: 'mca', name: 'MCA Section', amount: 0, status: 'cleared', lastUpdated: '2025-10-28' },
    { id: 'mess', name: 'Mess', amount: 0, status: 'cleared', lastUpdated: '2025-11-12' },
    { id: 'canteen', name: 'Canteen', amount: 150, status: 'pending', lastUpdated: '2025-11-16' },
    { id: 'accounts', name: 'Account Section', amount: 0, status: 'cleared', lastUpdated: '2025-11-08' },
    { id: 'others', name: 'Others', amount: 0, status: 'cleared', lastUpdated: '2025-11-01' }
  ]);

  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState<DepartmentDue | null>(null);

  const handlePayDue = (dept: DepartmentDue) => {
    setSelectedDepartment(dept);
    setShowPaymentModal(true);
  };

  const processPayment = () => {
    if (selectedDepartment) {
      setDepartments(departments.map(dept => {
        if (dept.id === selectedDepartment.id) {
          return { ...dept, status: 'paid' as const, amount: 0 };
        }
        return dept;
      }));
      setShowPaymentModal(false);
      setSelectedDepartment(null);
    }
  };

  const totalPending = departments.reduce((sum, dept) => sum + dept.amount, 0);
  const clearedCount = departments.filter(d => d.status === 'cleared' || d.status === 'paid').length;
  const pendingCount = departments.filter(d => d.status === 'pending').length;

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'cleared':
      case 'paid':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'pending':
        return <XCircle className="w-5 h-5 text-red-600" />;
      default:
        return <Clock className="w-5 h-5 text-yellow-600" />;
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1665860754719-2a060f4287b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlZHVjYXRpb24lMjBidWlsZGluZ3xlbnwxfHx8fDE3NjM1OTg3NTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Education Building"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-white mb-3">No Dues Certificate</h1>
          <p className="text-green-100 text-lg">Clear all departmental dues to obtain your No Dues Certificate</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 mb-1">Departments Cleared</p>
                <p className="text-gray-900">{clearedCount} / {departments.length}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 mb-1">Pending Clearances</p>
                <p className="text-gray-900">{pendingCount}</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 mb-1">Total Amount Due</p>
                <p className="text-gray-900">₹{totalPending}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <IndianRupee className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Alert for pending dues */}
        {pendingCount > 0 && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-yellow-900 mb-1">Action Required</p>
              <p className="text-yellow-800 text-sm">
                You have pending dues in {pendingCount} department{pendingCount > 1 ? 's' : ''}. 
                Please clear all dues to apply for academic documents and other services.
              </p>
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-blue-900 mb-2">Important Instructions</h3>
          <ul className="space-y-2 text-blue-800 text-sm">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></div>
              <span>Clear all departmental dues to obtain No Dues Certificate</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></div>
              <span>No Dues Certificate is mandatory for applying marksheet and degree</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></div>
              <span>Payment confirmation may take up to 24 hours to reflect</span>
            </li>
          </ul>
        </div>

        {/* Departments List */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-gray-900">Department-wise Dues Status</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-gray-700">Department</th>
                  <th className="px-6 py-3 text-left text-gray-700">Amount Due</th>
                  <th className="px-6 py-3 text-left text-gray-700">Status</th>
                  <th className="px-6 py-3 text-left text-gray-700">Last Updated</th>
                  <th className="px-6 py-3 text-left text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {departments.map((dept) => (
                  <tr key={dept.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <p className="text-gray-900">{dept.name}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`${dept.amount > 0 ? 'text-red-600' : 'text-green-600'}`}>
                        ₹{dept.amount}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(dept.status)}
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          dept.status === 'cleared' || dept.status === 'paid'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {dept.status === 'cleared' ? 'Cleared' : dept.status === 'paid' ? 'Paid' : 'Pending'}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-700">{dept.lastUpdated}</span>
                    </td>
                    <td className="px-6 py-4">
                      {dept.status === 'pending' && dept.amount > 0 ? (
                        <button
                          onClick={() => handlePayDue(dept)}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                        >
                          Pay Now
                        </button>
                      ) : (
                        <span className="text-gray-500 text-sm">No action required</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* No Dues Certificate Status */}
        <div className={`border-2 rounded-lg p-6 ${
          pendingCount === 0 
            ? 'bg-green-50 border-green-200' 
            : 'bg-gray-50 border-gray-200'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {pendingCount === 0 ? (
                <CheckCircle className="w-8 h-8 text-green-600" />
              ) : (
                <Clock className="w-8 h-8 text-gray-400" />
              )}
              <div>
                <p className="text-gray-900">No Dues Certificate Status</p>
                <p className={`text-sm ${pendingCount === 0 ? 'text-green-700' : 'text-gray-600'}`}>
                  {pendingCount === 0 
                    ? 'All dues cleared. You can now apply for academic services.' 
                    : `${pendingCount} department${pendingCount > 1 ? 's' : ''} pending clearance`}
                </p>
              </div>
            </div>
            {pendingCount === 0 && (
              <button className="px-6 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Download Certificate
              </button>
            )}
          </div>
        </div>

        {/* Payment Modal */}
        {showPaymentModal && selectedDepartment && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
              <h3 className="text-gray-900 mb-4">Pay Department Dues</h3>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 mb-2">Department: {selectedDepartment.name}</p>
                <p className="text-gray-600 text-sm mb-3">Amount to Pay</p>
                <p className="text-gray-900">₹{selectedDepartment.amount}</p>
              </div>

              <div className="space-y-3 mb-6">
                <div>
                  <label className="block text-gray-700 mb-2">Payment Method</label>
                  <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>UPI</option>
                    <option>Net Banking</option>
                    <option>Debit Card</option>
                    <option>Credit Card</option>
                  </select>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                <p className="text-yellow-900 text-sm">
                  Payment confirmation may take up to 24 hours to reflect in your account.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowPaymentModal(false)}
                  className="flex-1 px-4 py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={processPayment}
                  className="flex-1 px-4 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <IndianRupee className="w-4 h-4" />
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}