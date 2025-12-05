import { useState } from 'react';
import { 
  BookOpen, 
  FileText, 
  GraduationCap, 
  DollarSign, 
  AlertCircle, 
  Bus, 
  User, 
  LogOut,
  Shield,
  Bell,
  Menu,
  X,
  FileCheck,
  CheckCircle2
} from 'lucide-react';
import { LibraryModule } from './modules/LibraryModule';
import { NoDuesModule } from './modules/NoDuesModule';
import { MarksheetModule } from './modules/MarksheetModule';
import { DegreeModule } from './modules/DegreeModule';
import { CautionMoneyModule } from './modules/CautionMoneyModule';
import { HygieneModule } from './modules/HygieneModule';
import { BusNavigationModule } from './modules/BusNavigationModule';
import { ProfileModule } from './modules/ProfileModule';
import { ActiveApplicationsModule } from './modules/ActiveApplicationsModule';

interface StudentDashboardProps {
  user: any;
  onLogout: () => void;
}

export function StudentDashboard({ user, onLogout }: StudentDashboardProps) {
  const [activeModule, setActiveModule] = useState<string>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Shield },
    { id: 'library', label: 'Library', icon: BookOpen },
    { id: 'no-dues', label: 'No Dues', icon: FileCheck },
    { id: 'marksheet', label: 'Marksheet', icon: FileText },
    { id: 'degree', label: 'Degree Certificate', icon: GraduationCap },
    { id: 'caution-money', label: 'Caution Money', icon: DollarSign },
    { id: 'hygiene', label: 'Hygiene & Complaints', icon: AlertCircle },
    { id: 'bus', label: 'Bus Navigation', icon: Bus },
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'active-applications', label: 'Active Applications', icon: CheckCircle2 },
  ];

  const renderModule = () => {
    switch (activeModule) {
      case 'library':
        return <LibraryModule />;
      case 'no-dues':
        return <NoDuesModule />;
      case 'marksheet':
        return <MarksheetModule />;
      case 'degree':
        return <DegreeModule />;
      case 'caution-money':
        return <CautionMoneyModule />;
      case 'hygiene':
        return <HygieneModule />;
      case 'bus':
        return <BusNavigationModule />;
      case 'profile':
        return <ProfileModule />;
      case 'active-applications':
        return <ActiveApplicationsModule />;
      default:
        return <DashboardHome setActiveModule={setActiveModule} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-30">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              >
                {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-blue-900">MYHIMCS</h1>
                  <p className="text-gray-600">Student Portal</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="relative p-2 rounded-lg hover:bg-gray-100">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="hidden md:flex items-center space-x-3 px-4 py-2 bg-gray-50 rounded-lg">
                <User className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="text-gray-900">Student</p>
                  <p className="text-gray-600">{user?.email}</p>
                </div>
              </div>
              <button
                onClick={onLogout}
                className="flex items-center space-x-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span className="hidden md:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 z-20 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out mt-[73px] lg:mt-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <nav className="h-full overflow-y-auto p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        setActiveModule(item.id);
                        setSidebarOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        activeModule === item.id
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          {renderModule()}
        </main>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

function DashboardHome({ setActiveModule }: { setActiveModule: (module: string) => void }) {
  const quickActions = [
    { id: 'library', label: 'Library Services', icon: BookOpen, color: 'from-blue-500 to-blue-600', description: 'View issued books & pay fines' },
    { id: 'no-dues', label: 'Clear No Dues', icon: FileCheck, color: 'from-green-500 to-green-600', description: 'Clear department dues' },
    { id: 'marksheet', label: 'Apply for Marksheet', icon: FileText, color: 'from-purple-500 to-purple-600', description: 'Request marksheet copies' },
    { id: 'degree', label: 'Degree Certificate', icon: GraduationCap, color: 'from-orange-500 to-orange-600', description: 'Apply for degree certificate' },
    { id: 'caution-money', label: 'Caution Money', icon: DollarSign, color: 'from-yellow-500 to-yellow-600', description: 'Withdraw caution money' },
    { id: 'hygiene', label: 'Lodge Complaint', icon: AlertCircle, color: 'from-red-500 to-red-600', description: 'Report hygiene issues' },
    { id: 'bus', label: 'Bus Navigation', icon: Bus, color: 'from-indigo-500 to-indigo-600', description: 'Track college buses' },
    { id: 'active-applications', label: 'My Applications', icon: CheckCircle2, color: 'from-teal-500 to-teal-600', description: 'Track application status' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-blue-900 mb-2">Welcome to Your Dashboard</h2>
        <p className="text-gray-600">Access all student services from one place</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-600">Books Issued</h3>
            <BookOpen className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-blue-900">3</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-600">Pending Dues</h3>
            <DollarSign className="w-5 h-5 text-red-600" />
          </div>
          <p className="text-blue-900">₹250</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-600">Active Applications</h3>
            <FileCheck className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-blue-900">2</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-600">Complaints</h3>
            <AlertCircle className="w-5 h-5 text-orange-600" />
          </div>
          <p className="text-blue-900">1 Pending</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h3 className="text-blue-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.id}
                onClick={() => setActiveModule(action.id)}
                className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-lg transition-all text-left group"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-gray-900 mb-2">{action.label}</h4>
                <p className="text-gray-600">{action.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Important Notices */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="text-blue-900 mb-4">Important Notices</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
            <div>
              <p className="text-gray-900">Marksheet Applications</p>
              <p className="text-gray-600">Clear all dues before applying for marksheet or degree certificate</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
            <div>
              <p className="text-gray-900">Library Books</p>
              <p className="text-gray-600">Overdue books will incur a fine of ₹10 per day</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
            <div>
              <p className="text-gray-900">Caution Money</p>
              <p className="text-gray-600">Ensure your bank account details match your registered name</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
