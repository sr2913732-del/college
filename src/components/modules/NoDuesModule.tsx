import { useState } from 'react';
import { CheckCircle2, XCircle, IndianRupee, AlertCircle } from 'lucide-react';

export function NoDuesModule() {
  const [departments] = useState([
    { id: 1, name: 'Office Section', dueAmount: 0, status: 'cleared' },
    { id: 2, name: 'Library Section', dueAmount: 310, status: 'pending' },
    { id: 3, name: 'T & P Cell', dueAmount: 0, status: 'cleared' },
    { id: 4, name: 'Store Section', dueAmount: 150, status: 'pending' },
    { id: 5, name: 'Computer Lab Section', dueAmount: 0, status: 'cleared' },
    { id: 6, name: 'MBA Section', dueAmount: 0, status: 'cleared' },
    { id: 7, name: 'MCA Section', dueAmount: 0, status: 'cleared' },
    { id: 8, name: 'Mess', dueAmount: 500, status: 'pending' },
    { id: 9, name: 'Canteen', dueAmount: 0, status: 'cleared' },
    { id: 10, name: 'Account Section', dueAmount: 0, status: 'cleared' },
    { id: 11, name: 'Others', dueAmount: 0, status: 'cleared' },
  ]);

  const totalDues = departments.reduce((sum, dept) => sum + dept.dueAmount, 0);
  const clearedCount = departments.filter(d => d.status === 'cleared').length;
  const pendingCount = departments.filter(d => d.status === 'pending').length;

  const handlePayDue = (deptId: number, amount: number) => {
    alert(`Payment of ₹${amount} initiated for department ID: ${deptId}`);
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-blue-900 mb-2">No Dues Clearance</h2>
        <p className="text-gray-600">Clear all department dues to proceed with applications</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-600">Total Dues</h3>
            <IndianRupee className="w-5 h-5 text-red-600" />
          </div>
          <p className="text-blue-900">₹{totalDues}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-600">Cleared</h3>
            <CheckCircle2 className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-blue-900">{clearedCount} / {departments.length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-600">Pending</h3>
            <AlertCircle className="w-5 h-5 text-orange-600" />
          </div>
          <p className="text-blue-900">{pendingCount} Departments</p>
        </div>
      </div>

      {/* Department Dues List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-blue-900">Department-wise Dues Status</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-gray-700">S.No.</th>
                <th className="px-6 py-4 text-left text-gray-700">Department</th>
                <th className="px-6 py-4 text-left text-gray-700">Due Amount</th>
                <th className="px-6 py-4 text-left text-gray-700">Status</th>
                <th className="px-6 py-4 text-left text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {departments.map((dept, index) => (
                <tr key={dept.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-gray-900">{index + 1}</td>
                  <td className="px-6 py-4 text-gray-900">{dept.name}</td>
                  <td className="px-6 py-4">
                    {dept.dueAmount > 0 ? (
                      <span className="text-red-600">₹{dept.dueAmount}</span>
                    ) : (
                      <span className="text-green-600">₹0</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {dept.status === 'cleared' ? (
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700">
                        <CheckCircle2 className="w-4 h-4 mr-1" />
                        Cleared
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-red-700">
                        <XCircle className="w-4 h-4 mr-1" />
                        Pending
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {dept.dueAmount > 0 ? (
                      <button
                        onClick={() => handlePayDue(dept.id, dept.dueAmount)}
                        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <IndianRupee className="w-4 h-4" />
                        <span>Pay Now</span>
                      </button>
                    ) : (
                      <span className="text-gray-400">No Action Required</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="text-blue-900 mb-4">Important Instructions</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>All department dues must be cleared before applying for marksheet or degree certificate</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>Payment can be made online through the portal</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>After payment, status will be updated within 24-48 hours</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>For any discrepancies, contact the respective department</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
