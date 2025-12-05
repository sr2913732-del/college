import { useState } from 'react';
import { 
  GraduationCap, LogOut, Search, CheckCircle, XCircle, 
  Clock, Eye, Users, AlertCircle, Shield, TrendingUp,
  FileText, Award, Download
} from 'lucide-react';

interface MBADashboardProps {
  onLogout: () => void;
}

export function MBADashboard({ onLogout }: MBADashboardProps) {
  const [activeTab, setActiveTab] = useState('clearance');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const [remarks, setRemarks] = useState('');

  const [clearanceRequests, setClearanceRequests] = useState([
    {
      id: 1,
      studentId: 'HIMCS2024001',
      studentName: 'Rajesh Kumar',
      semester: '4th Semester',
      requestType: 'No Dues',
      projectSubmitted: true,
      attendancePercentage: 85,
      examCleared: true,
      status: 'pending'
    },
    {
      id: 2,
      studentId: 'HIMCS2024002',
      studentName: 'Priya Sharma',
      semester: '4th Semester',
      requestType: 'Degree',
      projectSubmitted: true,
      attendancePercentage: 92,
      examCleared: true,
      status: 'pending'
    },
    {
      id: 3,
      studentId: 'HIMCS2024003',
      studentName: 'Amit Singh',
      semester: '2nd Semester',
      requestType: 'Marksheet',
      projectSubmitted: false,
      attendancePercentage: 78,
      examCleared: true,
      status: 'pending'
    },
    {
      id: 4,
      studentId: 'HIMCS2024004',
      studentName: 'Sneha Patel',
      semester: '4th Semester',
      requestType: 'No Dues',
      projectSubmitted: true,
      attendancePercentage: 88,
      examCleared: true,
      status: 'approved'
    },
  ]);

  const stats = {
    totalRequests: clearanceRequests.length,
    pending: clearanceRequests.filter(r => r.status === 'pending').length,
    approved: clearanceRequests.filter(r => r.status === 'approved').length,
    rejected: clearanceRequests.filter(r => r.status === 'rejected').length,
  };

  const handleApprove = (request: any) => {
    setClearanceRequests(clearanceRequests.map(r => 
      r.id === request.id ? { ...r, status: 'approved' } : r
    ));
    setShowModal(false);
    setRemarks('');
  };

  const handleReject = (request: any) => {
    if (!remarks.trim()) {
      alert('Please provide remarks for rejection');
      return;
    }
    setClearanceRequests(clearanceRequests.map(r => 
      r.id === request.id ? { ...r, status: 'rejected', remarks } : r
    ));
    setShowModal(false);
    setRemarks('');
  };

  const openModal = (request: any) => {
    setSelectedStudent(request);
    setShowModal(true);
  };

  const filteredRequests = clearanceRequests.filter(req =>
    req.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    req.studentId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'approved': return 'bg-green-100 text-green-800 border-green-300';
      case 'rejected': return 'bg-red-100 text-red-800 border-red-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/90 backdrop-blur-xl border-b border-orange-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-xl">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-gray-900">MBA Department - HOD</h1>
                <p className="text-orange-600 text-sm flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  Academic Clearance & Approvals
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
          <div className="bg-white/90 backdrop-blur-xl border border-orange-200 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-600 text-sm">Total Requests</p>
              <Users className="w-10 h-10 text-orange-600" />
            </div>
            <p className="text-3xl text-gray-900 mb-1">{stats.totalRequests}</p>
            <p className="text-orange-600 text-sm">MBA Students</p>
          </div>

          <div className="bg-white/90 backdrop-blur-xl border border-yellow-200 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-600 text-sm">Pending</p>
              <Clock className="w-10 h-10 text-yellow-600" />
            </div>
            <p className="text-3xl text-gray-900 mb-1">{stats.pending}</p>
            <p className="text-yellow-600 text-sm">Awaiting review</p>
          </div>

          <div className="bg-white/90 backdrop-blur-xl border border-green-200 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-600 text-sm">Approved</p>
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <p className="text-3xl text-gray-900 mb-1">{stats.approved}</p>
            <p className="text-green-600 text-sm">Cleared</p>
          </div>

          <div className="bg-white/90 backdrop-blur-xl border border-red-200 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-600 text-sm">Rejected</p>
              <XCircle className="w-10 h-10 text-red-600" />
            </div>
            <p className="text-3xl text-gray-900 mb-1">{stats.rejected}</p>
            <p className="text-red-600 text-sm">Not cleared</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white/90 backdrop-blur-xl border border-orange-200 rounded-2xl shadow-xl overflow-hidden">
          <div className="border-b border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50">
            <div className="flex gap-1 p-3">
              <button
                onClick={() => setActiveTab('clearance')}
                className={`px-5 py-2.5 rounded-xl transition-all ${
                  activeTab === 'clearance'
                    ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-white/50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Clearance Requests
                </span>
              </button>
              <button
                onClick={() => setActiveTab('students')}
                className={`px-5 py-2.5 rounded-xl transition-all ${
                  activeTab === 'students'
                    ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-white/50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  MBA Students
                </span>
              </button>
              <button
                onClick={() => setActiveTab('reports')}
                className={`px-5 py-2.5 rounded-xl transition-all ${
                  activeTab === 'reports'
                    ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-white/50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Reports
                </span>
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'clearance' && (
              <div className="space-y-4">
                {/* Search */}
                <div className="relative">
                  <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by student name or ID..."
                    className="w-full pl-12 pr-4 py-3 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white/70"
                  />
                </div>

                {/* Requests Table */}
                <div className="overflow-x-auto bg-white/70 rounded-xl border border-orange-200">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-orange-50 to-amber-50 border-b border-orange-200">
                      <tr>
                        <th className="px-6 py-4 text-left text-gray-700">Student ID</th>
                        <th className="px-6 py-4 text-left text-gray-700">Name</th>
                        <th className="px-6 py-4 text-left text-gray-700">Semester</th>
                        <th className="px-6 py-4 text-left text-gray-700">Request Type</th>
                        <th className="px-6 py-4 text-left text-gray-700">Project</th>
                        <th className="px-6 py-4 text-left text-gray-700">Attendance</th>
                        <th className="px-6 py-4 text-left text-gray-700">Status</th>
                        <th className="px-6 py-4 text-left text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-orange-100">
                      {filteredRequests.map((request) => (
                        <tr key={request.id} className="hover:bg-orange-50/50 transition-colors">
                          <td className="px-6 py-4 text-orange-600">{request.studentId}</td>
                          <td className="px-6 py-4 text-gray-900">{request.studentName}</td>
                          <td className="px-6 py-4 text-gray-700">{request.semester}</td>
                          <td className="px-6 py-4 text-gray-700">{request.requestType}</td>
                          <td className="px-6 py-4">
                            {request.projectSubmitted ? (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            ) : (
                              <XCircle className="w-5 h-5 text-red-600" />
                            )}
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-sm ${
                              request.attendancePercentage >= 75 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {request.attendancePercentage}%
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
                                onClick={() => openModal(request)}
                                className="p-2 bg-orange-100 text-orange-600 rounded-lg hover:bg-orange-200 transition-colors"
                                title="Review"
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

            {activeTab === 'students' && (
              <div className="space-y-4">
                <h3 className="text-gray-900 mb-4">MBA Student Records</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-6 border-2 border-orange-200 rounded-xl bg-orange-50/50">
                    <Award className="w-8 h-8 text-orange-600 mb-2" />
                    <p className="text-gray-900 mb-1">Total MBA Students</p>
                    <p className="text-gray-900">156</p>
                  </div>
                  <div className="p-6 border-2 border-orange-200 rounded-xl bg-orange-50/50">
                    <TrendingUp className="w-8 h-8 text-orange-600 mb-2" />
                    <p className="text-gray-900 mb-1">Current Batch</p>
                    <p className="text-gray-900">2023-2025</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reports' && (
              <div className="space-y-4">
                <h3 className="text-gray-900 mb-4">Department Reports</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <button 
                    onClick={() => alert('Generating clearance report...')}
                    className="p-6 border-2 border-orange-200 rounded-xl hover:border-orange-500 hover:bg-orange-50 transition-all text-left"
                  >
                    <Download className="w-8 h-8 text-orange-600 mb-2" />
                    <p className="text-gray-900 mb-1">Clearance Report</p>
                    <p className="text-gray-600 text-sm">Download student clearance data</p>
                  </button>
                  <button 
                    onClick={() => alert('Generating performance report...')}
                    className="p-6 border-2 border-orange-200 rounded-xl hover:border-orange-500 hover:bg-orange-50 transition-all text-left"
                  >
                    <TrendingUp className="w-8 h-8 text-orange-600 mb-2" />
                    <p className="text-gray-900 mb-1">Performance Report</p>
                    <p className="text-gray-600 text-sm">Academic performance analysis</p>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Review Modal */}
      {showModal && selectedStudent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-gray-900">Review Clearance Request</h3>
                <p className="text-gray-600 text-sm">HOD Approval Required</p>
              </div>
            </div>

            <div className="bg-orange-50 rounded-xl p-4 mb-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Student:</span>
                <strong className="text-gray-900">{selectedStudent.studentName}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">ID:</span>
                <strong className="text-gray-900">{selectedStudent.studentId}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Request:</span>
                <strong className="text-gray-900">{selectedStudent.requestType}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Project:</span>
                <strong className={selectedStudent.projectSubmitted ? 'text-green-600' : 'text-red-600'}>
                  {selectedStudent.projectSubmitted ? 'Submitted' : 'Pending'}
                </strong>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Attendance:</span>
                <strong className={selectedStudent.attendancePercentage >= 75 ? 'text-green-600' : 'text-red-600'}>
                  {selectedStudent.attendancePercentage}%
                </strong>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Exam Status:</span>
                <strong className={selectedStudent.examCleared ? 'text-green-600' : 'text-red-600'}>
                  {selectedStudent.examCleared ? 'Cleared' : 'Pending'}
                </strong>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">HOD Remarks</label>
              <textarea
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                rows={3}
                className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Add your remarks here..."
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowModal(false);
                  setRemarks('');
                }}
                className="flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleReject(selectedStudent)}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:shadow-lg transition-all"
              >
                Reject
              </button>
              <button
                onClick={() => handleApprove(selectedStudent)}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:shadow-lg transition-all"
              >
                Approve
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
