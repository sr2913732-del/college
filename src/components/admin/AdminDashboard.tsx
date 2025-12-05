import { useState } from 'react';
import { 
  Shield, 
  LogOut, 
  Users, 
  FileText, 
  CheckCircle, 
  Clock,
  TrendingUp,
  BookOpen,
  DollarSign,
  AlertCircle,
  Download,
  Upload,
  Search,
  GraduationCap,
  Award,
  BarChart3,
  Settings,
  Bell,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface AdminDashboardProps {
  role: string | null;
  onLogout: () => void;
}

export function AdminDashboard({ role, onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState('overview');

  // Role-specific themes
  const roleThemes: any = {
    'registrar': {
      name: 'Registrar Section',
      gradient: 'from-blue-500 via-blue-600 to-indigo-600',
      bgGradient: 'from-blue-50 via-indigo-50 to-purple-50',
      icon: '📋',
      accentColor: 'blue',
      lightBg: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-600'
    },
    'library': {
      name: 'Library Section',
      gradient: 'from-purple-500 via-purple-600 to-pink-600',
      bgGradient: 'from-purple-50 via-pink-50 to-rose-50',
      icon: '📚',
      accentColor: 'purple',
      lightBg: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-600'
    },
    'accounts': {
      name: 'Account Section',
      gradient: 'from-green-500 via-emerald-600 to-teal-600',
      bgGradient: 'from-green-50 via-emerald-50 to-teal-50',
      icon: '💰',
      accentColor: 'green',
      lightBg: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-600'
    },
    'mba': {
      name: 'MBA Section (HOD)',
      gradient: 'from-orange-500 via-amber-600 to-yellow-600',
      bgGradient: 'from-orange-50 via-amber-50 to-yellow-50',
      icon: '🎓',
      accentColor: 'orange',
      lightBg: 'bg-orange-50',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-600'
    },
    'mca': {
      name: 'MCA Section (HOD)',
      gradient: 'from-cyan-500 via-sky-600 to-blue-600',
      bgGradient: 'from-cyan-50 via-sky-50 to-blue-50',
      icon: '💻',
      accentColor: 'cyan',
      lightBg: 'bg-cyan-50',
      borderColor: 'border-cyan-200',
      textColor: 'text-cyan-600'
    },
    'super-admin': {
      name: 'Super Admin (Director)',
      gradient: 'from-red-500 via-rose-600 to-pink-600',
      bgGradient: 'from-red-50 via-rose-50 to-pink-50',
      icon: '👑',
      accentColor: 'red',
      lightBg: 'bg-red-50',
      borderColor: 'border-red-200',
      textColor: 'text-red-600'
    }
  };

  const theme = roleThemes[role || 'registrar'];

  // Mock data
  const applications = [
    {
      id: 1,
      studentId: 'HIMCS2024001',
      studentName: 'Rajesh Kumar',
      type: 'Marksheet',
      status: 'pending',
      date: '2025-11-18',
      noDuesCleared: true
    },
    {
      id: 2,
      studentId: 'HIMCS2024002',
      studentName: 'Priya Sharma',
      type: 'Degree',
      status: 'pending',
      date: '2025-11-17',
      noDuesCleared: true
    },
    {
      id: 3,
      studentId: 'HIMCS2024003',
      studentName: 'Amit Singh',
      type: 'Caution Money',
      status: 'approved',
      date: '2025-11-15',
      noDuesCleared: true
    },
    {
      id: 4,
      studentId: 'HIMCS2024004',
      studentName: 'Sneha Patel',
      type: 'No Dues',
      status: 'pending',
      date: '2025-11-19',
      noDuesCleared: false
    }
  ];

  const [selectedApplication, setSelectedApplication] = useState<any>(null);
  const [showActionModal, setShowActionModal] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border border-yellow-200';
      case 'approved':
        return 'bg-green-100 text-green-800 border border-green-200';
      case 'rejected':
        return 'bg-red-100 text-red-800 border border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border border-gray-200';
    }
  };

  const handleApprove = (app: any) => {
    setSelectedApplication(app);
    setShowActionModal(true);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bgGradient} relative overflow-hidden`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className={`absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br ${theme.gradient} rounded-full mix-blend-multiply filter blur-3xl animate-blob`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br ${theme.gradient} rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000`}></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 bg-gradient-to-br ${theme.gradient} rounded-2xl flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform`}>
                <span className="text-3xl">{theme.icon}</span>
              </div>
              <div>
                <h1 className="text-gray-900 flex items-center gap-2">
                  Admin Dashboard
                  <Sparkles className={`w-5 h-5 ${theme.textColor} animate-pulse`} />
                </h1>
                <p className={`${theme.textColor} text-sm flex items-center gap-1`}>
                  <Shield className="w-3 h-3" />
                  {theme.name}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="relative p-2 hover:bg-gray-100 rounded-xl transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className={`absolute top-1 right-1 w-2 h-2 bg-gradient-to-br ${theme.gradient} rounded-full`}></span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                <Settings className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={onLogout}
                className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${theme.gradient} text-white rounded-xl hover:shadow-lg transition-all transform hover:scale-105`}
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6">
        {/* Welcome Banner */}
        <div className={`bg-gradient-to-r ${theme.gradient} rounded-2xl p-6 mb-6 shadow-xl text-white`}>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-white mb-2 flex items-center gap-2">
                Welcome back! <Award className="w-6 h-6" />
              </h2>
              <p className="text-white/90">
                You have 24 pending applications requiring your attention
              </p>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3">
                <p className="text-white/80 text-sm">Today's Date</p>
                <p className="text-white">December 1, 2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-600 text-sm">Total Applications</p>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
            </div>
            <p className="text-gray-900 mb-1">128</p>
            <div className="flex items-center gap-1 text-green-600 text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>12% increase</span>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-600 text-sm">Pending Review</p>
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
            </div>
            <p className="text-gray-900 mb-1">24</p>
            <div className="flex items-center gap-1 text-yellow-600 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>Needs attention</span>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-600 text-sm">Approved Today</p>
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
            </div>
            <p className="text-gray-900 mb-1">18</p>
            <div className="flex items-center gap-1 text-green-600 text-sm">
              <CheckCircle className="w-4 h-4" />
              <span>Great progress</span>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-600 text-sm">Success Rate</p>
              <div className={`w-10 h-10 bg-gradient-to-br ${theme.gradient} rounded-xl flex items-center justify-center`}>
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
            </div>
            <p className="text-gray-900 mb-1">94.2%</p>
            <div className="flex items-center gap-1 text-purple-600 text-sm">
              <Award className="w-4 h-4" />
              <span>Excellent</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-xl mb-6 overflow-hidden">
          <div className="border-b border-gray-200 bg-gray-50/50">
            <div className="flex gap-1 p-3 overflow-x-auto">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-5 py-2.5 rounded-xl transition-all whitespace-nowrap ${
                  activeTab === 'overview'
                    ? `bg-gradient-to-r ${theme.gradient} text-white shadow-lg`
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  Overview
                </span>
              </button>
              <button
                onClick={() => setActiveTab('applications')}
                className={`px-5 py-2.5 rounded-xl transition-all whitespace-nowrap ${
                  activeTab === 'applications'
                    ? `bg-gradient-to-r ${theme.gradient} text-white shadow-lg`
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Applications
                </span>
              </button>
              {role === 'library' && (
                <button
                  onClick={() => setActiveTab('library')}
                  className={`px-5 py-2.5 rounded-xl transition-all whitespace-nowrap ${
                    activeTab === 'library'
                      ? `bg-gradient-to-r ${theme.gradient} text-white shadow-lg`
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Library Records
                  </span>
                </button>
              )}
              {(role === 'registrar' || role === 'super-admin') && (
                <button
                  onClick={() => setActiveTab('uploads')}
                  className={`px-5 py-2.5 rounded-xl transition-all whitespace-nowrap ${
                    activeTab === 'uploads'
                      ? `bg-gradient-to-r ${theme.gradient} text-white shadow-lg`
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Upload className="w-4 h-4" />
                    Documents
                  </span>
                </button>
              )}
              {role === 'super-admin' && (
                <button
                  onClick={() => setActiveTab('analytics')}
                  className={`px-5 py-2.5 rounded-xl transition-all whitespace-nowrap ${
                    activeTab === 'analytics'
                      ? `bg-gradient-to-r ${theme.gradient} text-white shadow-lg`
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4" />
                    Analytics
                  </span>
                </button>
              )}
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && <OverviewContent role={role} theme={theme} />}
            {activeTab === 'applications' && (
              <ApplicationsContent 
                applications={applications} 
                onApprove={handleApprove}
                getStatusColor={getStatusColor}
                theme={theme}
              />
            )}
            {activeTab === 'library' && <LibraryContent theme={theme} />}
            {activeTab === 'uploads' && <UploadsContent theme={theme} />}
            {activeTab === 'analytics' && <AnalyticsContent theme={theme} />}
          </div>
        </div>
      </div>

      {/* Action Modal */}
      {showActionModal && selectedApplication && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 transform animate-scale-in">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-12 h-12 bg-gradient-to-br ${theme.gradient} rounded-xl flex items-center justify-center`}>
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-gray-900">Review Application</h3>
                <p className="text-gray-600 text-sm">Take action on this request</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-4 mb-4 space-y-2 border border-gray-200">
              <p className="text-gray-700 flex items-center justify-between">
                <span className="text-gray-600">Student:</span>
                <strong>{selectedApplication.studentName}</strong>
              </p>
              <p className="text-gray-700 flex items-center justify-between">
                <span className="text-gray-600">ID:</span>
                <strong>{selectedApplication.studentId}</strong>
              </p>
              <p className="text-gray-700 flex items-center justify-between">
                <span className="text-gray-600">Type:</span>
                <strong>{selectedApplication.type}</strong>
              </p>
              <p className="text-gray-700 flex items-center justify-between">
                <span className="text-gray-600">Date:</span>
                <strong>{selectedApplication.date}</strong>
              </p>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Remarks (Optional)</label>
              <textarea
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Add any remarks or notes..."
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowActionModal(false)}
                className="flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowActionModal(false);
                }}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:shadow-lg transition-all"
              >
                Reject
              </button>
              <button
                onClick={() => {
                  setShowActionModal(false);
                }}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-xl hover:shadow-lg transition-all"
              >
                Approve
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}

function OverviewContent({ role, theme }: any) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-gray-900 mb-4 flex items-center gap-2">
          <Clock className={`w-5 h-5 ${theme.textColor}`} />
          Recent Activity
        </h3>
        <div className="space-y-3">
          {[
            { id: 1, action: 'Application #1001 processed', time: '2 hours ago', status: 'Approved', color: 'green' },
            { id: 2, action: 'Application #1002 processed', time: '3 hours ago', status: 'Approved', color: 'green' },
            { id: 3, action: 'Application #1003 processed', time: '5 hours ago', status: 'Pending', color: 'yellow' }
          ].map((activity) => (
            <div key={activity.id} className="flex items-center justify-between p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200 hover:shadow-md transition-all">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full bg-${activity.color}-500`}></div>
                <div>
                  <p className="text-gray-900">{activity.action}</p>
                  <p className="text-gray-600 text-sm">{activity.time}</p>
                </div>
              </div>
              <span className={`px-4 py-1.5 bg-${activity.color}-100 text-${activity.color}-800 rounded-full text-sm border border-${activity.color}-200`}>
                {activity.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ApplicationsContent({ applications, onApprove, getStatusColor, theme }: any) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by student ID or name..."
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/70 backdrop-blur-sm"
          />
        </div>
        <select className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/70 backdrop-blur-sm">
          <option>All Status</option>
          <option>Pending</option>
          <option>Approved</option>
          <option>Rejected</option>
        </select>
      </div>

      <div className="overflow-x-auto bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200">
        <table className="w-full">
          <thead className="bg-gray-50/70 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-gray-700">Student ID</th>
              <th className="px-6 py-4 text-left text-gray-700">Student Name</th>
              <th className="px-6 py-4 text-left text-gray-700">Application Type</th>
              <th className="px-6 py-4 text-left text-gray-700">Date</th>
              <th className="px-6 py-4 text-left text-gray-700">No Dues</th>
              <th className="px-6 py-4 text-left text-gray-700">Status</th>
              <th className="px-6 py-4 text-left text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {applications.map((app: any) => (
              <tr key={app.id} className="hover:bg-white/50 transition-colors">
                <td className="px-6 py-4 text-blue-600">{app.studentId}</td>
                <td className="px-6 py-4 text-gray-900">{app.studentName}</td>
                <td className="px-6 py-4 text-gray-700">{app.type}</td>
                <td className="px-6 py-4 text-gray-700">{app.date}</td>
                <td className="px-6 py-4">
                  {app.noDuesCleared ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  )}
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1.5 rounded-full text-sm ${getStatusColor(app.status)}`}>
                    {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {app.status === 'pending' && (
                    <button
                      onClick={() => onApprove(app)}
                      className={`px-4 py-2 bg-gradient-to-r ${theme.gradient} text-white rounded-lg hover:shadow-lg transition-all text-sm transform hover:scale-105`}
                    >
                      Review
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function LibraryContent({ theme }: any) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-gray-900 mb-2 flex items-center gap-2">
          <BookOpen className={`w-5 h-5 ${theme.textColor}`} />
          Library Management
        </h3>
        <p className="text-gray-600">Manage library records, issued books, and fines for all students.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 border border-blue-300 rounded-xl p-5 text-white shadow-xl transform hover:scale-105 transition-all">
          <BookOpen className="w-8 h-8 mb-3" />
          <p className="text-white/90 mb-1">Total Books Issued</p>
          <p className="text-white">245</p>
        </div>
        <div className="bg-gradient-to-br from-red-500 to-rose-600 border border-red-300 rounded-xl p-5 text-white shadow-xl transform hover:scale-105 transition-all">
          <AlertCircle className="w-8 h-8 mb-3" />
          <p className="text-white/90 mb-1">Overdue Books</p>
          <p className="text-white">18</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 border border-green-300 rounded-xl p-5 text-white shadow-xl transform hover:scale-105 transition-all">
          <DollarSign className="w-8 h-8 mb-3" />
          <p className="text-white/90 mb-1">Fines Collected</p>
          <p className="text-white">₹3,450</p>
        </div>
      </div>
    </div>
  );
}

function UploadsContent({ theme }: any) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-gray-900 mb-2 flex items-center gap-2">
          <Upload className={`w-5 h-5 ${theme.textColor}`} />
          Upload Academic Documents
        </h3>
        <p className="text-gray-600">Upload marksheets and degree certificates for students with cleared dues.</p>
      </div>
      
      <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-blue-500 transition-all bg-white/50 backdrop-blur-sm">
        <div className={`w-16 h-16 bg-gradient-to-br ${theme.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
          <Upload className="w-8 h-8 text-white" />
        </div>
        <p className="text-gray-900 mb-2">Upload Documents</p>
        <p className="text-gray-600 text-sm mb-4">PDF files only (Max 10MB)</p>
        <button className={`px-8 py-3 bg-gradient-to-r ${theme.gradient} text-white rounded-xl hover:shadow-lg transition-all transform hover:scale-105`}>
          Select Files
        </button>
      </div>
    </div>
  );
}

function AnalyticsContent({ theme }: any) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-gray-900 mb-2 flex items-center gap-2">
          <BarChart3 className={`w-5 h-5 ${theme.textColor}`} />
          System Analytics
        </h3>
        <p className="text-gray-600">Comprehensive analytics and reports for all departments.</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        {[
          { label: 'Total Students Registered', value: '1,247', icon: Users, gradient: 'from-blue-500 to-blue-600' },
          { label: 'Applications This Month', value: '128', icon: FileText, gradient: 'from-purple-500 to-purple-600' },
          { label: 'Average Processing Time', value: '8.5 days', icon: Clock, gradient: 'from-orange-500 to-orange-600' },
          { label: 'Student Satisfaction', value: '4.6/5.0', icon: Award, gradient: 'from-green-500 to-green-600' }
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all">
              <div className="flex items-center justify-between mb-3">
                <p className="text-gray-700">{stat.label}</p>
                <div className={`w-10 h-10 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="text-gray-900">{stat.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
