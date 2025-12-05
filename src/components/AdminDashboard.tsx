import { useState } from 'react';
import {
  Shield,
  LogOut,
  Users,
  BookOpen,
  GraduationCap,
  FileText,
  DollarSign,
  BarChart3,
  Bell,
  Menu,
  X,
  Building2,
  Settings
} from 'lucide-react';
import { RegistrarModule } from './admin/RegistrarModule';
import { LibraryAdminModule } from './admin/LibraryAdminModule';
import { AccountsModule } from './admin/AccountsModule';
import { MBAModule } from './admin/MBAModule';
import { MCAModule } from './admin/MCAModule';
import { SuperAdminModule } from './admin/SuperAdminModule';

interface AdminDashboardProps {
  user: any;
  onLogout: () => void;
}

export function AdminDashboard({ user, onLogout }: AdminDashboardProps) {
  const [activeRole, setActiveRole] = useState<string>('dashboard');
  const [selectedRole, setSelectedRole] = useState<string>('registrar');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const roles = [
    { id: 'registrar', label: 'Registrar Section', icon: FileText, description: 'Manage marksheet, degree, and corrections' },
    { id: 'library', label: 'Library Section', icon: BookOpen, description: 'Manage books, dues, and fines' },
    { id: 'accounts', label: 'Account Section', icon: DollarSign, description: 'Manage no dues and caution money' },
    { id: 'mba', label: 'MBA Section', icon: GraduationCap, description: 'MBA department management' },
    { id: 'mca', label: 'MCA Section', icon: Building2, description: 'MCA department management' },
    { id: 'super-admin', label: 'Super Admin', icon: Shield, description: 'Full system access and control' },
  ];

  const renderModule = () => {
    switch (activeRole) {
      case 'registrar':
        return <RegistrarModule />;
      case 'library':
        return <LibraryAdminModule />;
      case 'accounts':
        return <AccountsModule />;
      case 'mba':
        return <MBAModule />;
      case 'mca':
        return <MCAModule />;
      case 'super-admin':
        return <SuperAdminModule />;
      default:
        return <AdminDashboardHome roles={roles} setActiveRole={setActiveRole} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-800 text-white shadow-lg sticky top-0 z-30">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-blue-600"
              >
                {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-white">MYHIMCS Admin</h1>
                  <p className="text-blue-100">Administrative Portal</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="relative p-2 rounded-lg hover:bg-blue-600">
                <Bell className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="hidden md:flex items-center space-x-3 px-4 py-2 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
                <Settings className="w-5 h-5" />
                <div>
                  <p className="text-white">Admin User</p>
                  <p className="text-blue-100">{user?.email}</p>
                </div>
              </div>
              <button
                onClick={onLogout}
                className="flex items-center space-x-2 px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
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
            <button
              onClick={() => {
                setActiveRole('dashboard');
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors mb-2 ${
                activeRole === 'dashboard'
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <BarChart3 className="w-5 h-5" />
              <span>Dashboard</span>
            </button>

            <div className="my-4 border-t border-gray-200 pt-4">
              <p className="px-4 mb-2 text-gray-500">Select Role</p>
              <ul className="space-y-2">
                {roles.map((role) => {
                  const Icon = role.icon;
                  return (
                    <li key={role.id}>
                      <button
                        onClick={() => {
                          setActiveRole(role.id);
                          setSelectedRole(role.id);
                          setSidebarOpen(false);
                        }}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                          activeRole === role.id
                            ? 'bg-blue-50 text-blue-700'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{role.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
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

function AdminDashboardHome({ roles, setActiveRole }: { roles: any[], setActiveRole: (role: string) => void }) {
  const stats = [
    { label: 'Total Students', value: '1,247', icon: Users, color: 'text-blue-600' },
    { label: 'Pending Applications', value: '34', icon: FileText, color: 'text-orange-600' },
    { label: 'Dues Pending', value: '₹45,600', icon: DollarSign, color: 'text-red-600' },
    { label: 'Complaints', value: '12', icon: Bell, color: 'text-yellow-600' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-blue-900 mb-2">Admin Dashboard</h2>
        <p className="text-gray-600">Manage student services and applications</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-gray-600">{stat.label}</h3>
                <Icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <p className="text-blue-900">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Role Selection */}
      <div className="mb-8">
        <h3 className="text-blue-900 mb-4">Select Your Role</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <button
                key={role.id}
                onClick={() => setActiveRole(role.id)}
                className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-lg hover:border-blue-500 transition-all text-left group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-gray-900 mb-2">{role.label}</h4>
                <p className="text-gray-600">{role.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-blue-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { action: 'New marksheet application', student: 'John Doe (21MCA001)', time: '2 hours ago', type: 'application' },
            { action: 'Dues cleared', student: 'Jane Smith (21MBA045)', time: '3 hours ago', type: 'payment' },
            { action: 'Hygiene complaint', student: 'Robert Johnson (21BCA023)', time: '5 hours ago', type: 'complaint' },
            { action: 'Degree certificate approved', student: 'Sarah Williams (20MCA089)', time: '1 day ago', type: 'approval' },
          ].map((activity, index) => (
            <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <p className="text-gray-900 mb-1">{activity.action}</p>
                <p className="text-gray-600">{activity.student}</p>
              </div>
              <span className="text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
