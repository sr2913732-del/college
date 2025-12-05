import { useState } from 'react';
import { 
  Shield, LogOut, FileText, CheckCircle, Clock, Download, 
  Upload, Search, Users, Award, Filter, Eye, XCircle,
  Calendar, GraduationCap, TrendingUp, AlertCircle
} from 'lucide-react';

interface RegistrarDashboardProps {
  onLogout: () => void;
}

export function RegistrarDashboard({ onLogout }: RegistrarDashboardProps) {
  const [activeTab, setActiveTab] = useState('applications');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedApplication, setSelectedApplication] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const [remarks, setRemarks] = useState('');
  const [applications, setApplications] = useState([
    {
      id: 1,
      studentId: 'HIMCS2024001',
      studentName: 'Rajesh Kumar',
      course: 'MCA',
      type: 'Marksheet',
      semester: '3rd Semester',
      status: 'pending',
      date: '2025-11-25',
      noDuesCleared: true,
      hodApproved: true
    },
    {
      id: 2,
      studentId: 'HIMCS2024002',
      studentName: 'Priya Sharma',
      course: 'MBA',
      type: 'Degree',
      semester: 'Final Year',
      status: 'pending',
      date: '2025-11-24',
      noDuesCleared: true,
      hodApproved: true
    },
    {
      id: 3,
      studentId: 'HIMCS2024003',
      studentName: 'Amit Singh',
      course: 'MCA',
      type: 'Marksheet',
      semester: '5th Semester',
      status: 'approved',
      date: '2025-11-20',
      noDuesCleared: true,
      hodApproved: true
    },
    {
      id: 4,
      studentId: 'HIMCS2024004',
      studentName: 'Sneha Patel',
      course: 'MBA',
      type: 'Duplicate Marksheet',
      semester: '4th Semester',
      status: 'pending',
      date: '2025-11-26',
      noDuesCleared: true,
      hodApproved: false
    },
  ]);

  const stats = {
    totalApplications: applications.length,
    pending: applications.filter(a => a.status === 'pending').length,
    approved: applications.filter(a => a.status === 'approved').length,
    rejected: applications.filter(a => a.status === 'rejected').length,
  };

  const handleApprove = (app: any) => {
    setApplications(applications.map(a => 
      a.id === app.id ? { ...a, status: 'approved' } : a
    ));
    setShowModal(false);
    setRemarks('');
  };

  const handleReject = (app: any) => {
    if (!remarks.trim()) {
      alert('Please provide remarks for rejection');
      return;
    }
    setApplications(applications.map(a => 
      a.id === app.id ? { ...a, status: 'rejected', remarks } : a
    ));
    setShowModal(false);
    setRemarks('');
  };

  const openModal = (app: any) => {
    setSelectedApplication(app);
    setShowModal(true);
  };

  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || app.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

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
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/90 backdrop-blur-xl border-b border-blue-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-gray-900">Registrar Dashboard</h1>
                <p className="text-blue-600 text-sm flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  Certificate & Document Management
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
          <div className="bg-white/90 backdrop-blur-xl border border-blue-200 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-600 text-sm">Total Applications</p>
              <Users className="w-10 h-10 text-blue-600" />
            </div>
            <p className="text-3xl text-gray-900 mb-1">{stats.totalApplications}</p>
            <p className="text-blue-600 text-sm">All time</p>
          </div>

          <div className="bg-white/90 backdrop-blur-xl border border-yellow-200 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-600 text-sm">Pending Review</p>
              <Clock className="w-10 h-10 text-yellow-600" />
            </div>
            <p className="text-3xl text-gray-900 mb-1">{stats.pending}</p>
            <p className="text-yellow-600 text-sm">Needs action</p>
          </div>

          <div className="bg-white/90 backdrop-blur-xl border border-green-200 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-600 text-sm">Approved</p>
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <p className="text-3xl text-gray-900 mb-1">{stats.approved}</p>
            <p className="text-green-600 text-sm">Completed</p>
          </div>

          <div className="bg-white/90 backdrop-blur-xl border border-red-200 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-600 text-sm">Rejected</p>
              <XCircle className="w-10 h-10 text-red-600" />
            </div>
            <p className="text-3xl text-gray-900 mb-1">{stats.rejected}</p>
            <p className="text-red-600 text-sm">Declined</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white/90 backdrop-blur-xl border border-blue-200 rounded-2xl shadow-xl overflow-hidden">
          {/* Tabs */}
          <div className="border-b border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50">
            <div className="flex gap-1 p-3">
              <button
                onClick={() => setActiveTab('applications')}
                className={`px-5 py-2.5 rounded-xl transition-all ${
                  activeTab === 'applications'
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-white/50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Applications
                </span>
              </button>
              <button
                onClick={() => setActiveTab('upload')}
                className={`px-5 py-2.5 rounded-xl transition-all ${
                  activeTab === 'upload'
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-white/50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Upload className="w-4 h-4" />
                  Upload Documents
                </span>
              </button>
              <button
                onClick={() => setActiveTab('reports')}
                className={`px-5 py-2.5 rounded-xl transition-all ${
                  activeTab === 'reports'
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
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
            {activeTab === 'applications' && (
              <div className="space-y-4">
                {/* Search and Filter */}
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search by student name or ID..."
                      className="w-full pl-12 pr-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/70"
                    />
                  </div>
                  <select 
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/70"
                  >
                    <option value="all">All Status</option>
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>

                {/* Applications Table */}
                <div className="overflow-x-auto bg-white/70 rounded-xl border border-blue-200">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-blue-50 to-cyan-50 border-b border-blue-200">
                      <tr>
                        <th className="px-6 py-4 text-left text-gray-700">Student ID</th>
                        <th className="px-6 py-4 text-left text-gray-700">Name</th>
                        <th className="px-6 py-4 text-left text-gray-700">Course</th>
                        <th className="px-6 py-4 text-left text-gray-700">Type</th>
                        <th className="px-6 py-4 text-left text-gray-700">Semester</th>
                        <th className="px-6 py-4 text-left text-gray-700">Date</th>
                        <th className="px-6 py-4 text-left text-gray-700">HOD</th>
                        <th className="px-6 py-4 text-left text-gray-700">Status</th>
                        <th className="px-6 py-4 text-left text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-blue-100">
                      {filteredApplications.map((app) => (
                        <tr key={app.id} className="hover:bg-blue-50/50 transition-colors">
                          <td className="px-6 py-4 text-blue-600">{app.studentId}</td>
                          <td className="px-6 py-4 text-gray-900">{app.studentName}</td>
                          <td className="px-6 py-4 text-gray-700">{app.course}</td>
                          <td className="px-6 py-4 text-gray-700">{app.type}</td>
                          <td className="px-6 py-4 text-gray-700">{app.semester}</td>
                          <td className="px-6 py-4 text-gray-700">{app.date}</td>
                          <td className="px-6 py-4">
                            {app.hodApproved ? (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            ) : (
                              <Clock className="w-5 h-5 text-yellow-600" />
                            )}
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1.5 rounded-full text-sm border ${getStatusColor(app.status)}`}>
                              {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              <button
                                onClick={() => openModal(app)}
                                className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                                title="Review"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              {app.status === 'approved' && (
                                <button
                                  onClick={() => alert('Download certificate for ' + app.studentName)}
                                  className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors"
                                  title="Download"
                                >
                                  <Download className="w-4 h-4" />
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'upload' && (
              <div className="space-y-4">
                <h3 className="text-gray-900 mb-4">Upload Certificates</h3>
                <div className="border-2 border-dashed border-blue-300 rounded-xl p-12 text-center hover:border-blue-500 transition-all bg-blue-50/50">
                  <Upload className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <p className="text-gray-900 mb-2">Upload Student Documents</p>
                  <p className="text-gray-600 text-sm mb-4">PDF files only (Max 10MB per file)</p>
                  <button 
                    onClick={() => alert('File upload dialog would open here')}
                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:shadow-lg transition-all"
                  >
                    Select Files
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'reports' && (
              <div className="space-y-4">
                <h3 className="text-gray-900 mb-4">Generate Reports</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <button 
                    onClick={() => alert('Generating monthly report...')}
                    className="p-6 border-2 border-blue-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all text-left"
                  >
                    <Calendar className="w-8 h-8 text-blue-600 mb-2" />
                    <p className="text-gray-900 mb-1">Monthly Report</p>
                    <p className="text-gray-600 text-sm">Applications processed this month</p>
                  </button>
                  <button 
                    onClick={() => alert('Generating student report...')}
                    className="p-6 border-2 border-blue-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all text-left"
                  >
                    <GraduationCap className="w-8 h-8 text-blue-600 mb-2" />
                    <p className="text-gray-900 mb-1">Student Report</p>
                    <p className="text-gray-600 text-sm">Course-wise breakdown</p>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Review Modal */}
      {showModal && selectedApplication && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-gray-900">Review Application</h3>
                <p className="text-gray-600 text-sm">Make a decision</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 mb-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Student:</span>
                <strong className="text-gray-900">{selectedApplication.studentName}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">ID:</span>
                <strong className="text-gray-900">{selectedApplication.studentId}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Type:</span>
                <strong className="text-gray-900">{selectedApplication.type}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Course:</span>
                <strong className="text-gray-900">{selectedApplication.course}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">HOD Approved:</span>
                <strong className={selectedApplication.hodApproved ? 'text-green-600' : 'text-yellow-600'}>
                  {selectedApplication.hodApproved ? 'Yes' : 'Pending'}
                </strong>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Remarks</label>
              <textarea
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                rows={3}
                className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                onClick={() => handleReject(selectedApplication)}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:shadow-lg transition-all"
              >
                Reject
              </button>
              <button
                onClick={() => handleApprove(selectedApplication)}
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
