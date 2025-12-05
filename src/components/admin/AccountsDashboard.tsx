import { useState } from 'react';
import { 
  DollarSign, LogOut, Search, CheckCircle, XCircle, 
  Clock, Eye, TrendingUp, Users, AlertCircle, Shield,
  Download, Calendar
} from 'lucide-react';

interface AccountsDashboardProps {
  onLogout: () => void;
}

export function AccountsDashboard({ onLogout }: AccountsDashboardProps) {
  const [activeTab, setActiveTab] = useState('nodues');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRequest, setSelectedRequest] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const [noDuesRequests, setNoDuesRequests] = useState([
    {
      id: 1,
      studentId: 'HIMCS2024001',
      studentName: 'Rajesh Kumar',
      course: 'MCA',
      semester: '6th',
      tuitionFee: 0,
      examFee: 0,
      otherFees: 0,
      totalDues: 0,
      status: 'pending'
    },
    {
      id: 2,
      studentId: 'HIMCS2024002',
      studentName: 'Priya Sharma',
      course: 'MBA',
      semester: '4th',
      tuitionFee: 5000,
      examFee: 0,
      otherFees: 500,
      totalDues: 5500,
      status: 'pending'
    },
    {
      id: 3,
      studentId: 'HIMCS2024003',
      studentName: 'Amit Singh',
      course: 'MCA',
      semester: '6th',
      tuitionFee: 0,
      examFee: 0,
      otherFees: 0,
      totalDues: 0,
      status: 'pending'
    },
  ]);

  const [cautionMoneyRequests, setCautionMoneyRequests] = useState([
    {
      id: 1,
      studentId: 'HIMCS2024004',
      studentName: 'Sneha Patel',
      course: 'MBA',
      depositAmount: 10000,
      deductions: 0,
      refundableAmount: 10000,
      bankName: 'SBI',
      accountNumber: '****5678',
      noDuesCleared: true,
      status: 'pending'
    },
    {
      id: 2,
      studentId: 'HIMCS2024005',
      studentName: 'Rahul Verma',
      course: 'MCA',
      depositAmount: 10000,
      deductions: 500,
      refundableAmount: 9500,
      bankName: 'HDFC',
      accountNumber: '****1234',
      noDuesCleared: true,
      status: 'pending'
    },
  ]);

  const stats = {
    noDuesPending: noDuesRequests.filter(r => r.status === 'pending').length,
    cautionMoneyPending: cautionMoneyRequests.filter(r => r.status === 'pending').length,
    totalDuesCollectable: noDuesRequests.reduce((sum, r) => sum + r.totalDues, 0),
    refundsPending: cautionMoneyRequests.reduce((sum, r) => sum + r.refundableAmount, 0),
  };

  const handleClearNoDues = (request: any) => {
    if (request.totalDues > 0) {
      alert('Cannot clear - Student has pending dues of ₹' + request.totalDues);
      return;
    }
    setNoDuesRequests(noDuesRequests.map(r => 
      r.id === request.id ? { ...r, status: 'cleared' } : r
    ));
    setShowModal(false);
    alert(`No Dues cleared for ${request.studentName}`);
  };

  const handleRejectNoDues = (request: any) => {
    setNoDuesRequests(noDuesRequests.map(r => 
      r.id === request.id ? { ...r, status: 'rejected' } : r
    ));
    setShowModal(false);
    alert(`No Dues rejected for ${request.studentName}`);
  };

  const handleApproveCautionMoney = (request: any) => {
    setCautionMoneyRequests(cautionMoneyRequests.map(r => 
      r.id === request.id ? { ...r, status: 'approved' } : r
    ));
    setShowModal(false);
    alert(`Caution Money refund approved for ${request.studentName}. Amount: ₹${request.refundableAmount}`);
  };

  const handleRejectCautionMoney = (request: any) => {
    setCautionMoneyRequests(cautionMoneyRequests.map(r => 
      r.id === request.id ? { ...r, status: 'rejected' } : r
    ));
    setShowModal(false);
    alert(`Caution Money refund rejected for ${request.studentName}`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'cleared': case 'approved': return 'bg-green-100 text-green-800 border-green-300';
      case 'rejected': return 'bg-red-100 text-red-800 border-red-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/90 backdrop-blur-xl border-b border-green-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-xl">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-gray-900">Accounts Dashboard</h1>
                <p className="text-green-600 text-sm flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  Financial Dues & Payments
                </p>
              </div>
            </div>
            
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:shadow-lg transition-all transform hover:scale-105"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white/90 backdrop-blur-xl border border-green-200 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-600 text-sm">No Dues Pending</p>
              <Clock className="w-10 h-10 text-yellow-600" />
            </div>
            <p className="text-3xl text-gray-900 mb-1">{stats.noDuesPending}</p>
            <p className="text-yellow-600 text-sm">Awaiting clearance</p>
          </div>

          <div className="bg-white/90 backdrop-blur-xl border border-blue-200 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-600 text-sm">Refunds Pending</p>
              <DollarSign className="w-10 h-10 text-blue-600" />
            </div>
            <p className="text-3xl text-gray-900 mb-1">{stats.cautionMoneyPending}</p>
            <p className="text-blue-600 text-sm">Caution money</p>
          </div>

          <div className="bg-white/90 backdrop-blur-xl border border-red-200 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-600 text-sm">Dues Collectable</p>
              <AlertCircle className="w-10 h-10 text-red-600" />
            </div>
            <p className="text-3xl text-gray-900 mb-1">₹{stats.totalDuesCollectable}</p>
            <p className="text-red-600 text-sm">Outstanding</p>
          </div>

          <div className="bg-white/90 backdrop-blur-xl border border-green-200 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-600 text-sm">Refunds Amount</p>
              <TrendingUp className="w-10 h-10 text-green-600" />
            </div>
            <p className="text-3xl text-gray-900 mb-1">₹{stats.refundsPending}</p>
            <p className="text-green-600 text-sm">To be processed</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white/90 backdrop-blur-xl border border-green-200 rounded-2xl shadow-xl overflow-hidden">
          {/* Tabs */}
          <div className="border-b border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
            <div className="flex gap-1 p-3">
              <button
                onClick={() => setActiveTab('nodues')}
                className={`px-5 py-2.5 rounded-xl transition-all ${
                  activeTab === 'nodues'
                    ? 'bg-gradient-to-r from-green-500 to-teal-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-white/50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  No Dues Clearance
                </span>
              </button>
              <button
                onClick={() => setActiveTab('caution')}
                className={`px-5 py-2.5 rounded-xl transition-all ${
                  activeTab === 'caution'
                    ? 'bg-gradient-to-r from-green-500 to-teal-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-white/50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  Caution Money Refund
                </span>
              </button>
              <button
                onClick={() => setActiveTab('reports')}
                className={`px-5 py-2.5 rounded-xl transition-all ${
                  activeTab === 'reports'
                    ? 'bg-gradient-to-r from-green-500 to-teal-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-white/50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Financial Reports
                </span>
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'nodues' && (
              <div className="space-y-4">
                <div className="overflow-x-auto bg-white/70 rounded-xl border border-green-200">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-200">
                      <tr>
                        <th className="px-6 py-4 text-left text-gray-700">Student ID</th>
                        <th className="px-6 py-4 text-left text-gray-700">Name</th>
                        <th className="px-6 py-4 text-left text-gray-700">Course</th>
                        <th className="px-6 py-4 text-left text-gray-700">Tuition Fee</th>
                        <th className="px-6 py-4 text-left text-gray-700">Exam Fee</th>
                        <th className="px-6 py-4 text-left text-gray-700">Other Fees</th>
                        <th className="px-6 py-4 text-left text-gray-700">Total Dues</th>
                        <th className="px-6 py-4 text-left text-gray-700">Status</th>
                        <th className="px-6 py-4 text-left text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-green-100">
                      {noDuesRequests.map((request) => (
                        <tr key={request.id} className="hover:bg-green-50/50 transition-colors">
                          <td className="px-6 py-4 text-green-600">{request.studentId}</td>
                          <td className="px-6 py-4 text-gray-900">{request.studentName}</td>
                          <td className="px-6 py-4 text-gray-700">{request.course}</td>
                          <td className="px-6 py-4">
                            <span className={request.tuitionFee > 0 ? 'text-red-600' : 'text-green-600'}>
                              ₹{request.tuitionFee}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={request.examFee > 0 ? 'text-red-600' : 'text-green-600'}>
                              ₹{request.examFee}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={request.otherFees > 0 ? 'text-red-600' : 'text-green-600'}>
                              ₹{request.otherFees}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`${request.totalDues > 0 ? 'text-red-600' : 'text-green-600'}`}>
                              ₹{request.totalDues}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1.5 rounded-full text-sm border ${getStatusColor(request.status)}`}>
                              {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            {request.status === 'pending' && (
                              <button
                                onClick={() => {
                                  setSelectedRequest({ ...request, type: 'nodues' });
                                  setShowModal(true);
                                }}
                                className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'caution' && (
              <div className="space-y-4">
                <div className="overflow-x-auto bg-white/70 rounded-xl border border-green-200">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-200">
                      <tr>
                        <th className="px-6 py-4 text-left text-gray-700">Student ID</th>
                        <th className="px-6 py-4 text-left text-gray-700">Name</th>
                        <th className="px-6 py-4 text-left text-gray-700">Course</th>
                        <th className="px-6 py-4 text-left text-gray-700">Deposit</th>
                        <th className="px-6 py-4 text-left text-gray-700">Deductions</th>
                        <th className="px-6 py-4 text-left text-gray-700">Refundable</th>
                        <th className="px-6 py-4 text-left text-gray-700">Bank</th>
                        <th className="px-6 py-4 text-left text-gray-700">No Dues</th>
                        <th className="px-6 py-4 text-left text-gray-700">Status</th>
                        <th className="px-6 py-4 text-left text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-green-100">
                      {cautionMoneyRequests.map((request) => (
                        <tr key={request.id} className="hover:bg-green-50/50 transition-colors">
                          <td className="px-6 py-4 text-green-600">{request.studentId}</td>
                          <td className="px-6 py-4 text-gray-900">{request.studentName}</td>
                          <td className="px-6 py-4 text-gray-700">{request.course}</td>
                          <td className="px-6 py-4 text-gray-900">₹{request.depositAmount}</td>
                          <td className="px-6 py-4 text-red-600">₹{request.deductions}</td>
                          <td className="px-6 py-4 text-green-600">₹{request.refundableAmount}</td>
                          <td className="px-6 py-4 text-gray-700">
                            {request.bankName}<br/>
                            <span className="text-sm text-gray-500">{request.accountNumber}</span>
                          </td>
                          <td className="px-6 py-4">
                            {request.noDuesCleared ? (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            ) : (
                              <XCircle className="w-5 h-5 text-red-600" />
                            )}
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1.5 rounded-full text-sm border ${getStatusColor(request.status)}`}>
                              {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            {request.status === 'pending' && (
                              <button
                                onClick={() => {
                                  setSelectedRequest({ ...request, type: 'caution' });
                                  setShowModal(true);
                                }}
                                className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'reports' && (
              <div className="space-y-4">
                <h3 className="text-gray-900 mb-4">Generate Financial Reports</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <button 
                    onClick={() => alert('Generating fee collection report...')}
                    className="p-6 border-2 border-green-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all text-left"
                  >
                    <DollarSign className="w-8 h-8 text-green-600 mb-2" />
                    <p className="text-gray-900 mb-1">Fee Collection Report</p>
                    <p className="text-gray-600 text-sm">Monthly collection summary</p>
                  </button>
                  <button 
                    onClick={() => alert('Generating dues report...')}
                    className="p-6 border-2 border-green-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all text-left"
                  >
                    <AlertCircle className="w-8 h-8 text-green-600 mb-2" />
                    <p className="text-gray-900 mb-1">Outstanding Dues</p>
                    <p className="text-gray-600 text-sm">Student-wise pending dues</p>
                  </button>
                  <button 
                    onClick={() => alert('Generating refund report...')}
                    className="p-6 border-2 border-green-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all text-left"
                  >
                    <TrendingUp className="w-8 h-8 text-green-600 mb-2" />
                    <p className="text-gray-900 mb-1">Refund Report</p>
                    <p className="text-gray-600 text-sm">Caution money refunds</p>
                  </button>
                  <button 
                    onClick={() => alert('Generating annual report...')}
                    className="p-6 border-2 border-green-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all text-left"
                  >
                    <Calendar className="w-8 h-8 text-green-600 mb-2" />
                    <p className="text-gray-900 mb-1">Annual Report</p>
                    <p className="text-gray-600 text-sm">Year-wise financial summary</p>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Review Modal */}
      {showModal && selectedRequest && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                {selectedRequest.type === 'nodues' ? (
                  <CheckCircle className="w-6 h-6 text-white" />
                ) : (
                  <DollarSign className="w-6 h-6 text-white" />
                )}
              </div>
              <div>
                <h3 className="text-gray-900">
                  {selectedRequest.type === 'nodues' ? 'No Dues Clearance' : 'Caution Money Refund'}
                </h3>
                <p className="text-gray-600 text-sm">Review and take action</p>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-4 mb-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Student:</span>
                <strong className="text-gray-900">{selectedRequest.studentName}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">ID:</span>
                <strong className="text-gray-900">{selectedRequest.studentId}</strong>
              </div>
              {selectedRequest.type === 'nodues' ? (
                <>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Dues:</span>
                    <strong className={selectedRequest.totalDues > 0 ? 'text-red-600' : 'text-green-600'}>
                      ₹{selectedRequest.totalDues}
                    </strong>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Refundable Amount:</span>
                    <strong className="text-green-600">₹{selectedRequest.refundableAmount}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bank:</span>
                    <strong className="text-gray-900">{selectedRequest.bankName}</strong>
                  </div>
                </>
              )}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (selectedRequest.type === 'nodues') {
                    handleRejectNoDues(selectedRequest);
                  } else {
                    handleRejectCautionMoney(selectedRequest);
                  }
                }}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:shadow-lg transition-all"
              >
                Reject
              </button>
              <button
                onClick={() => {
                  if (selectedRequest.type === 'nodues') {
                    handleClearNoDues(selectedRequest);
                  } else {
                    handleApproveCautionMoney(selectedRequest);
                  }
                }}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:shadow-lg transition-all"
              >
                {selectedRequest.type === 'nodues' ? 'Clear' : 'Approve'}
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
}
