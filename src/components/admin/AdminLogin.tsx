import { useState } from 'react';
import { Shield, ArrowLeft, GraduationCap, Lock, User, Sparkles } from 'lucide-react';

interface AdminLoginProps {
  onLogin: (role: any) => void;
  onBack: () => void;
}

export function AdminLogin({ onLogin, onBack }: AdminLoginProps) {
  const [selectedRole, setSelectedRole] = useState('');
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const roles = [
    { 
      id: 'registrar', 
      name: 'Registrar Section', 
      gradient: 'from-blue-500 via-blue-600 to-indigo-600',
      icon: '📋',
      description: 'Manage certificates & documents'
    },
    { 
      id: 'library', 
      name: 'Library Section', 
      gradient: 'from-purple-500 via-purple-600 to-pink-600',
      icon: '📚',
      description: 'Library records & dues'
    },
    { 
      id: 'accounts', 
      name: 'Account Section', 
      gradient: 'from-green-500 via-emerald-600 to-teal-600',
      icon: '💰',
      description: 'Financial dues & payments'
    },
    { 
      id: 'mba', 
      name: 'MBA Section (HOD)', 
      gradient: 'from-orange-500 via-amber-600 to-yellow-600',
      icon: '🎓',
      description: 'MBA department clearance'
    },
    { 
      id: 'mca', 
      name: 'MCA Section (HOD)', 
      gradient: 'from-cyan-500 via-sky-600 to-blue-600',
      icon: '💻',
      description: 'MCA department clearance'
    },
    { 
      id: 'super-admin', 
      name: 'Super Admin (Director)', 
      gradient: 'from-red-500 via-rose-600 to-pink-600',
      icon: '👑',
      description: 'Full system access'
    }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedRole && credentials.username && credentials.password) {
      onLogin(selectedRole);
    }
  };

  const selectedRoleData = roles.find(r => r.id === selectedRole);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-white">HIMCS SWS</h1>
              <p className="text-blue-200 text-sm flex items-center gap-1">
                <Shield className="w-3 h-3" />
                Admin Access Portal
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-white hover:text-blue-200 mb-6 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Student Login
        </button>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Side - Role Selection */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-white">Select Your Role</h2>
                <p className="text-blue-200 text-sm">Choose your department</p>
              </div>
            </div>

            <div className="space-y-3">
              {roles.map((role) => (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => setSelectedRole(role.id)}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-300 transform hover:scale-[1.02] ${
                    selectedRole === role.id
                      ? `bg-gradient-to-r ${role.gradient} shadow-lg border-2 border-white/50`
                      : 'bg-white/5 hover:bg-white/10 border-2 border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`text-3xl ${selectedRole === role.id ? 'animate-bounce' : ''}`}>
                      {role.icon}
                    </div>
                    <div className="flex-1">
                      <p className={`${selectedRole === role.id ? 'text-white' : 'text-white/90'} transition-colors`}>
                        {role.name}
                      </p>
                      <p className={`text-sm ${selectedRole === role.id ? 'text-white/90' : 'text-white/60'}`}>
                        {role.description}
                      </p>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      selectedRole === role.id 
                        ? 'border-white bg-white' 
                        : 'border-white/30'
                    }`}>
                      {selectedRole === role.id && (
                        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-blue-600 to-purple-600"></div>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-6">
            <div className="mb-6">
              {selectedRoleData ? (
                <div className={`bg-gradient-to-r ${selectedRoleData.gradient} rounded-xl p-4 mb-4 shadow-lg animate-fade-in`}>
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{selectedRoleData.icon}</span>
                    <div>
                      <p className="text-white">Logging in as</p>
                      <p className="text-white">{selectedRoleData.name}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white/5 rounded-xl p-4 mb-4 border border-white/10">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-8 h-8 text-blue-300 animate-pulse" />
                    <div>
                      <p className="text-white">Welcome!</p>
                      <p className="text-blue-200 text-sm">Please select your role to continue</p>
                    </div>
                  </div>
                </div>
              )}

              <h2 className="text-white mb-2">Admin Credentials</h2>
              <p className="text-blue-200 text-sm">Enter your login details</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              {/* Username Input */}
              <div>
                <label className="block text-white mb-2 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Username / Employee ID
                  <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={credentials.username}
                  onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-white/50 backdrop-blur-sm transition-all"
                  placeholder="Enter your username"
                />
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-white mb-2 flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Password
                  <span className="text-red-400">*</span>
                </label>
                <input
                  type="password"
                  required
                  value={credentials.password}
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-white/50 backdrop-blur-sm transition-all"
                  placeholder="Enter your password"
                />
              </div>

              {/* Security Notice */}
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex gap-3">
                  <Shield className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-yellow-200 text-sm">
                      <strong>Security Notice:</strong> This portal is for authorized personnel only. 
                      All activities are logged and monitored.
                    </p>
                  </div>
                </div>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={!selectedRole}
                className={`w-full py-3.5 rounded-xl transition-all duration-300 transform ${
                  selectedRole
                    ? `bg-gradient-to-r ${selectedRoleData?.gradient} text-white hover:scale-[1.02] hover:shadow-2xl shadow-lg`
                    : 'bg-white/10 text-white/50 cursor-not-allowed border border-white/20'
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  <Shield className="w-5 h-5" />
                  Login to Admin Dashboard
                </span>
              </button>
            </form>

            {/* Additional Info */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-center text-blue-200 text-sm">
                Forgot credentials? Contact IT Support
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
