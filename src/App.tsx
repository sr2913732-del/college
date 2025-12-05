import { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';
import { StudentDashboard } from './components/student/Dashboard';
import { AdminLogin } from './components/admin/AdminLogin';
import { AdminDashboard } from './components/admin/AdminDashboard';

type Page = 'login' | 'register' | 'student-dashboard' | 'admin-login' | 'admin-dashboard';
type UserRole = 'registrar' | 'library' | 'accounts' | 'mba' | 'mca' | 'super-admin' | null;

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('login');
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [studentData, setStudentData] = useState<any>(null);

  const handleLogin = (data: any) => {
    setStudentData(data);
    setCurrentPage('student-dashboard');
  };

  const handleAdminLogin = (role: UserRole) => {
    setUserRole(role);
    setCurrentPage('admin-dashboard');
  };

  const handleLogout = () => {
    setStudentData(null);
    setUserRole(null);
    setCurrentPage('login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage === 'login' && (
        <LoginPage 
          onLogin={handleLogin}
          onRegister={() => setCurrentPage('register')}
          onAdminLogin={() => setCurrentPage('admin-login')}
        />
      )}
      {currentPage === 'register' && (
        <RegisterPage onBack={() => setCurrentPage('login')} />
      )}
      {currentPage === 'student-dashboard' && (
        <StudentDashboard 
          studentData={studentData}
          onLogout={handleLogout}
        />
      )}
      {currentPage === 'admin-login' && (
        <AdminLogin 
          onLogin={handleAdminLogin}
          onBack={() => setCurrentPage('login')}
        />
      )}
      {currentPage === 'admin-dashboard' && (
        <AdminDashboard 
          role={userRole}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
}
