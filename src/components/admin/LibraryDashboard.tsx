import { useState } from 'react';
import { 
  BookOpen, LogOut, Search, Users, DollarSign, 
  AlertCircle, CheckCircle, XCircle, Eye, Plus,
  Calendar, TrendingUp, Clock, Download, Shield, FileText, X, Filter
} from 'lucide-react';

interface LibraryDashboardProps {
  onLogout: () => void;
}

export function LibraryDashboard({ onLogout }: LibraryDashboardProps) {
  const [activeTab, setActiveTab] = useState('book-issue');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBook, setSelectedBook] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const [libraryRecordView, setLibraryRecordView] = useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = useState(new Date().toISOString().slice(0, 7));
  
  // Book Issue Form State
  const [bookIssueForm, setBookIssueForm] = useState({
    bookId: '',
    bookName: '',
    studentId: '',
    studentName: '',
    issueDate: new Date().toISOString().split('T')[0],
    returnDate: '',
    reissued: false
  });

  const [issuedBooks, setIssuedBooks] = useState([
    {
      id: 1,
      studentId: 'HIMCS2024001',
      studentName: 'Rajesh Kumar',
      bookId: 'BK-001',
      bookTitle: 'Data Structures and Algorithms',
      bookCode: 'CS-101',
      issueDate: '2025-11-15',
      dueDate: '2025-11-29',
      returnDate: null,
      status: 'issued',
      fine: 0,
      reissued: false
    },
    {
      id: 2,
      studentId: 'HIMCS2024002',
      studentName: 'Priya Sharma',
      bookId: 'BK-002',
      bookTitle: 'Database Management Systems',
      bookCode: 'CS-202',
      issueDate: '2025-11-10',
      dueDate: '2025-11-24',
      returnDate: null,
      status: 'overdue',
      fine: 50,
      reissued: false
    },
    {
      id: 3,
      studentId: 'HIMCS2024003',
      studentName: 'Amit Singh',
      bookId: 'BK-003',
      bookTitle: 'Operating Systems',
      bookCode: 'CS-303',
      issueDate: '2025-11-20',
      dueDate: '2025-12-04',
      returnDate: null,
      status: 'issued',
      fine: 0,
      reissued: true
    },
    {
      id: 4,
      studentId: 'HIMCS2024004',
      studentName: 'Sneha Patel',
      bookId: 'BK-004',
      bookTitle: 'Computer Networks',
      bookCode: 'CS-404',
      issueDate: '2025-11-01',
      dueDate: '2025-11-15',
      returnDate: null,
      status: 'overdue',
      fine: 150,
      reissued: false
    },
  ]);

  const [applications, setApplications] = useState([
    {
      id: 1,
      studentId: 'HIMCS2024001',
      studentName: 'Rajesh Kumar',
      applicationType: 'Reissue',
      bookTitle: 'Data Structures and Algorithms',
      bookId: 'BK-001',
      status: 'pending',
      date: '2025-11-20'
    },
    {
      id: 2,
      studentId: 'HIMCS2024002',
      studentName: 'Priya Sharma',
      applicationType: 'Fine Relaxation',
      bookTitle: 'Database Management Systems',
      bookId: 'BK-002',
      status: 'pending',
      date: '2025-11-21',
      reason: 'Medical emergency',
      document: 'medical_certificate.pdf'
    },
    {
      id: 3,
      studentId: 'HIMCS2024003',
      studentName: 'Amit Singh',
      applicationType: 'Reissue',
      bookTitle: 'Operating Systems',
      bookId: 'BK-003',
      status: 'pending',
      date: '2025-11-22'
    }
  ]);

  const [finesCollected, setFinesCollected] = useState([
    {
      id: 1,
      studentId: 'HIMCS2024005',
      studentName: 'Rahul Verma',
      bookTitle: 'Software Engineering',
      fineAmount: 100,
      paymentDate: '2025-11-15',
      month: '2025-11'
    },
    {
      id: 2,
      studentId: 'HIMCS2024006',
      studentName: 'Anita Desai',
      bookTitle: 'Computer Networks',
      fineAmount: 75,
      paymentDate: '2025-11-18',
      month: '2025-11'
    },
    {
      id: 3,
      studentId: 'HIMCS2024007',
      studentName: 'Vikram Shah',
      bookTitle: 'Database Systems',
      fineAmount: 50,
      paymentDate: '2025-10-25',
      month: '2025-10'
    }
  ]);

  const stats = {
    totalIssued: issuedBooks.filter(b => !b.returnDate).length,
    overdue: issuedBooks.filter(b => b.status === 'overdue' && !b.returnDate).length,
    totalFines: issuedBooks.reduce((sum, b) => sum + b.fine, 0),
    finesCollected: finesCollected.reduce((sum, f) => sum + f.fineAmount, 0),
  };

  const handleIssueBook = () => {
    if (!bookIssueForm.bookId || !bookIssueForm.bookName || !bookIssueForm.studentId || !bookIssueForm.studentName) {
      alert('Please fill all required fields');
      return;
    }
    
    const returnDate = new Date(bookIssueForm.issueDate);
    returnDate.setDate(returnDate.getDate() + 14);
    
    const newBook = {
      id: issuedBooks.length + 1,
      studentId: bookIssueForm.studentId,
      studentName: bookIssueForm.studentName,
      bookId: bookIssueForm.bookId,
      bookTitle: bookIssueForm.bookName,
      bookCode: bookIssueForm.bookId,
      issueDate: bookIssueForm.issueDate,
      dueDate: returnDate.toISOString().split('T')[0],
      returnDate: null,
      status: 'issued',
      fine: 0,
      reissued: bookIssueForm.reissued
    };
    
    setIssuedBooks([...issuedBooks, newBook]);
    setBookIssueForm({
      bookId: '',
      bookName: '',
      studentId: '',
      studentName: '',
      issueDate: new Date().toISOString().split('T')[0],
      returnDate: '',
      reissued: false
    });
    alert('Book issued successfully!');
  };

  const handleUpdateBook = (book: any) => {
    const updatedBooks = issuedBooks.map(b => 
      b.id === book.id ? { ...b, ...book } : b
    );
    setIssuedBooks(updatedBooks);
    setShowModal(false);
    alert('Book details updated successfully!');
  };

  const handleApproveReturn = (book: any) => {
    setIssuedBooks(issuedBooks.map(b => 
      b.id === book.id ? { ...b, returnDate: new Date().toISOString().split('T')[0], status: 'returned' } : b
    ));
    setShowModal(false);
    alert('Return approved successfully!');
  };

  const handleReissue = (app: any) => {
    const book = issuedBooks.find(b => b.bookId === app.bookId);
    if (book) {
      const newDueDate = new Date();
      newDueDate.setDate(newDueDate.getDate() + 14);
      setIssuedBooks(issuedBooks.map(b => 
        b.id === book.id ? { ...b, dueDate: newDueDate.toISOString().split('T')[0], reissued: true, fine: 0, status: 'issued' } : b
      ));
      setApplications(applications.filter(a => a.id !== app.id));
      alert('Book reissued successfully!');
    }
  };

  const handleAdjustFine = (app: any) => {
    const book = issuedBooks.find(b => b.bookId === app.bookId);
    if (book) {
      const newFine = prompt('Enter adjusted fine amount:', book.fine.toString());
      if (newFine !== null) {
        setIssuedBooks(issuedBooks.map(b => 
          b.id === book.id ? { ...b, fine: parseFloat(newFine) || 0 } : b
        ));
        setApplications(applications.filter(a => a.id !== app.id));
        alert('Fine adjusted successfully!');
      }
    }
  };

  const filteredBooks = issuedBooks.filter(book => 
    book.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.bookTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const overdueBooks = issuedBooks.filter(b => {
    const dueDate = new Date(b.dueDate);
    const today = new Date();
    return dueDate < today && !b.returnDate;
  });

  const activeIssuedBooks = issuedBooks.filter(b => !b.returnDate);

  const filteredFines = finesCollected.filter(f => f.month === selectedMonth);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'issued': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'overdue': return 'bg-red-100 text-red-800 border-red-300';
      case 'returned': return 'bg-green-100 text-green-800 border-green-300';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/90 backdrop-blur-xl border-b border-purple-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-gray-900">Library Dashboard</h1>
                <p className="text-purple-600 text-sm flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  Book Management & Library Dues
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
        {/* Stats Cards - Clickable for Library Records */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <button
            onClick={() => {
              setActiveTab('library-records');
              setLibraryRecordView('issued');
            }}
            className="bg-white/90 backdrop-blur-xl border border-purple-200 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-left"
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-600 text-sm">Total Books Issued</p>
              <BookOpen className="w-10 h-10 text-purple-600" />
            </div>
            <p className="text-3xl text-gray-900 mb-1">{stats.totalIssued}</p>
            <p className="text-purple-600 text-sm">Click to view details</p>
          </button>

          <button
            onClick={() => {
              setActiveTab('library-records');
              setLibraryRecordView('overdue');
            }}
            className="bg-white/90 backdrop-blur-xl border border-red-200 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-left"
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-600 text-sm">Overdue Books</p>
              <AlertCircle className="w-10 h-10 text-red-600" />
            </div>
            <p className="text-3xl text-gray-900 mb-1">{stats.overdue}</p>
            <p className="text-red-600 text-sm">Click to view details</p>
          </button>

          <button
            onClick={() => {
              setActiveTab('library-records');
              setLibraryRecordView('fines');
            }}
            className="bg-white/90 backdrop-blur-xl border border-green-200 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-left"
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-600 text-sm">Fines Collected</p>
              <DollarSign className="w-10 h-10 text-green-600" />
            </div>
            <p className="text-3xl text-gray-900 mb-1">₹{stats.finesCollected}</p>
            <p className="text-green-600 text-sm">Click to view details</p>
          </button>
        </div>

        {/* Main Content */}
        <div className="bg-white/90 backdrop-blur-xl border border-purple-200 rounded-2xl shadow-xl overflow-hidden">
          {/* Tabs */}
          <div className="border-b border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50">
            <div className="flex gap-1 p-3 overflow-x-auto">
              <button
                onClick={() => setActiveTab('book-issue')}
                className={`px-5 py-2.5 rounded-xl transition-all whitespace-nowrap ${
                  activeTab === 'book-issue'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-white/50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Book Issue
                </span>
              </button>
              <button
                onClick={() => setActiveTab('applications')}
                className={`px-5 py-2.5 rounded-xl transition-all whitespace-nowrap ${
                  activeTab === 'applications'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-white/50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Applications
                </span>
              </button>
              <button
                onClick={() => {
                  setActiveTab('library-records');
                  setLibraryRecordView(null);
                }}
                className={`px-5 py-2.5 rounded-xl transition-all whitespace-nowrap ${
                  activeTab === 'library-records'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-white/50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Library Records
                </span>
              </button>
              <button
                onClick={() => setActiveTab('payment-details')}
                className={`px-5 py-2.5 rounded-xl transition-all whitespace-nowrap ${
                  activeTab === 'payment-details'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-white/50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  Payment Details
                </span>
              </button>
            </div>
          </div>

          <div className="p-6">
            {/* Book Issue Tab */}
            {activeTab === 'book-issue' && (
              <div className="max-w-2xl mx-auto space-y-4">
                <h3 className="text-gray-900 mb-4">Issue Book</h3>
                <div className="bg-purple-50/50 rounded-xl p-6 space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Book ID *</label>
                    <input
                      type="text"
                      value={bookIssueForm.bookId}
                      onChange={(e) => setBookIssueForm({...bookIssueForm, bookId: e.target.value})}
                      placeholder="Enter book ID"
                      className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Book Name *</label>
                    <input
                      type="text"
                      value={bookIssueForm.bookName}
                      onChange={(e) => setBookIssueForm({...bookIssueForm, bookName: e.target.value})}
                      placeholder="Enter book name"
                      className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Student ID *</label>
                    <input
                      type="text"
                      value={bookIssueForm.studentId}
                      onChange={(e) => setBookIssueForm({...bookIssueForm, studentId: e.target.value})}
                      placeholder="Enter student ID"
                      className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Student Name *</label>
                    <input
                      type="text"
                      value={bookIssueForm.studentName}
                      onChange={(e) => setBookIssueForm({...bookIssueForm, studentName: e.target.value})}
                      placeholder="Enter student name"
                      className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Issue Date *</label>
                    <input
                      type="date"
                      value={bookIssueForm.issueDate}
                      onChange={(e) => {
                        const date = e.target.value;
                        setBookIssueForm({...bookIssueForm, issueDate: date});
                        const returnDate = new Date(date);
                        returnDate.setDate(returnDate.getDate() + 14);
                        setBookIssueForm(prev => ({...prev, returnDate: returnDate.toISOString().split('T')[0]}));
                      }}
                      className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Return Date</label>
                    <input
                      type="date"
                      value={bookIssueForm.returnDate}
                      onChange={(e) => setBookIssueForm({...bookIssueForm, returnDate: e.target.value})}
                      className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                      readOnly
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="reissued"
                      checked={bookIssueForm.reissued}
                      onChange={(e) => setBookIssueForm({...bookIssueForm, reissued: e.target.checked})}
                      className="w-4 h-4"
                    />
                    <label htmlFor="reissued" className="text-gray-700">Reissued</label>
                  </div>
                  <button 
                    onClick={handleIssueBook}
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl hover:shadow-lg transition-all"
                  >
                    Issue Book
                  </button>
                </div>
              </div>
            )}

            {/* Applications Tab */}
            {activeTab === 'applications' && (
              <div className="space-y-4">
                <h3 className="text-gray-900 mb-4">Applications</h3>
                <div className="overflow-x-auto bg-white/70 rounded-xl border border-purple-200">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-200">
                      <tr>
                        <th className="px-6 py-4 text-left text-gray-700">Student ID</th>
                        <th className="px-6 py-4 text-left text-gray-700">Student Name</th>
                        <th className="px-6 py-4 text-left text-gray-700">Application Type</th>
                        <th className="px-6 py-4 text-left text-gray-700">Book</th>
                        <th className="px-6 py-4 text-left text-gray-700">Date</th>
                        <th className="px-6 py-4 text-left text-gray-700">Status</th>
                        <th className="px-6 py-4 text-left text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-purple-100">
                      {applications.map((app) => (
                        <tr key={app.id} className="hover:bg-purple-50/50 transition-colors">
                          <td className="px-6 py-4 text-purple-600">{app.studentId}</td>
                          <td className="px-6 py-4 text-gray-900">{app.studentName}</td>
                          <td className="px-6 py-4 text-gray-700">{app.applicationType}</td>
                          <td className="px-6 py-4 text-gray-700">{app.bookTitle}</td>
                          <td className="px-6 py-4 text-gray-700">{app.date}</td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1.5 rounded-full text-sm border ${getStatusColor(app.status)}`}>
                              {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            {app.applicationType === 'Reissue' ? (
                              <button
                                onClick={() => handleReissue(app)}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                              >
                                Reissue
                              </button>
                            ) : app.applicationType === 'Fine Relaxation' ? (
                              <div className="flex gap-2">
                                <button
                                  onClick={() => alert(`Reason: ${app.reason || 'Not provided'}`)}
                                  className="px-3 py-1.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
                                >
                                  View Request
                                </button>
                                <button
                                  onClick={() => alert(`Document: ${app.document || 'No document uploaded'}`)}
                                  className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm"
                                >
                                  View Document
                                </button>
                                <button
                                  onClick={() => handleAdjustFine(app)}
                                  className="px-3 py-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                                >
                                  Adjust Fine
                                </button>
                              </div>
                            ) : null}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Library Records Tab */}
            {activeTab === 'library-records' && (
              <div className="space-y-4">
                {libraryRecordView === null && (
                  <div className="text-center py-8">
                    <p className="text-gray-600 mb-4">Click on a stat card above to view details</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <button
                        onClick={() => setLibraryRecordView('issued')}
                        className="p-6 border-2 border-purple-200 rounded-xl hover:border-purple-500 hover:bg-purple-50 transition-all"
                      >
                        <BookOpen className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                        <p className="text-gray-900">Total Books Issued</p>
                      </button>
                      <button
                        onClick={() => setLibraryRecordView('overdue')}
                        className="p-6 border-2 border-red-200 rounded-xl hover:border-red-500 hover:bg-red-50 transition-all"
                      >
                        <AlertCircle className="w-8 h-8 text-red-600 mx-auto mb-2" />
                        <p className="text-gray-900">Overdue Books</p>
                      </button>
                      <button
                        onClick={() => setLibraryRecordView('fines')}
                        className="p-6 border-2 border-green-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all"
                      >
                        <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
                        <p className="text-gray-900">Fines Collected</p>
                      </button>
                    </div>
                  </div>
                )}

                {libraryRecordView === 'issued' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-gray-900">Total Books Issued</h3>
                      <button
                        onClick={() => setLibraryRecordView(null)}
                        className="text-gray-600 hover:text-gray-900"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="overflow-x-auto bg-white/70 rounded-xl border border-purple-200">
                      <table className="w-full">
                        <thead className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-200">
                          <tr>
                            <th className="px-6 py-4 text-left text-gray-700">Student ID</th>
                            <th className="px-6 py-4 text-left text-gray-700">Student Name</th>
                            <th className="px-6 py-4 text-left text-gray-700">Book Title</th>
                            <th className="px-6 py-4 text-left text-gray-700">Issue Date</th>
                            <th className="px-6 py-4 text-left text-gray-700">Return Date</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-purple-100">
                          {activeIssuedBooks.map((book) => (
                            <tr key={book.id} className="hover:bg-purple-50/50 transition-colors">
                              <td className="px-6 py-4 text-purple-600">{book.studentId}</td>
                              <td className="px-6 py-4 text-gray-900">{book.studentName}</td>
                              <td className="px-6 py-4 text-gray-700">{book.bookTitle}</td>
                              <td className="px-6 py-4 text-gray-700">{book.issueDate}</td>
                              <td className="px-6 py-4 text-gray-700">{book.dueDate}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {libraryRecordView === 'overdue' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-gray-900">Overdue Books</h3>
                      <button
                        onClick={() => setLibraryRecordView(null)}
                        className="text-gray-600 hover:text-gray-900"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="overflow-x-auto bg-white/70 rounded-xl border border-purple-200">
                      <table className="w-full">
                        <thead className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-200">
                          <tr>
                            <th className="px-6 py-4 text-left text-gray-700">Student ID</th>
                            <th className="px-6 py-4 text-left text-gray-700">Student Name</th>
                            <th className="px-6 py-4 text-left text-gray-700">Book Title</th>
                            <th className="px-6 py-4 text-left text-gray-700">Issue Date</th>
                            <th className="px-6 py-4 text-left text-gray-700">Return Date</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-purple-100">
                          {overdueBooks.map((book) => (
                            <tr key={book.id} className="hover:bg-purple-50/50 transition-colors">
                              <td className="px-6 py-4 text-purple-600">{book.studentId}</td>
                              <td className="px-6 py-4 text-gray-900">{book.studentName}</td>
                              <td className="px-6 py-4 text-gray-700">{book.bookTitle}</td>
                              <td className="px-6 py-4 text-gray-700">{book.issueDate}</td>
                              <td className="px-6 py-4 text-red-600">{book.dueDate}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {libraryRecordView === 'fines' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-gray-900">Fines Collected</h3>
                      <button
                        onClick={() => setLibraryRecordView(null)}
                        className="text-gray-600 hover:text-gray-900"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="overflow-x-auto bg-white/70 rounded-xl border border-purple-200">
                      <table className="w-full">
                        <thead className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-200">
                          <tr>
                            <th className="px-6 py-4 text-left text-gray-700">Student ID</th>
                            <th className="px-6 py-4 text-left text-gray-700">Student Name</th>
                            <th className="px-6 py-4 text-left text-gray-700">Book Title</th>
                            <th className="px-6 py-4 text-left text-gray-700">Fine Amount</th>
                            <th className="px-6 py-4 text-left text-gray-700">Payment Date</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-purple-100">
                          {finesCollected.map((fine) => (
                            <tr key={fine.id} className="hover:bg-purple-50/50 transition-colors">
                              <td className="px-6 py-4 text-purple-600">{fine.studentId}</td>
                              <td className="px-6 py-4 text-gray-900">{fine.studentName}</td>
                              <td className="px-6 py-4 text-gray-700">{fine.bookTitle}</td>
                              <td className="px-6 py-4 text-green-600">₹{fine.fineAmount}</td>
                              <td className="px-6 py-4 text-gray-700">{fine.paymentDate}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Payment Details Tab */}
            {activeTab === 'payment-details' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-900">Payment Details</h3>
                  <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-gray-600" />
                    <input
                      type="month"
                      value={selectedMonth}
                      onChange={(e) => setSelectedMonth(e.target.value)}
                      className="px-4 py-2 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
                <div className="overflow-x-auto bg-white/70 rounded-xl border border-purple-200">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-200">
                      <tr>
                        <th className="px-6 py-4 text-left text-gray-700">Student ID</th>
                        <th className="px-6 py-4 text-left text-gray-700">Student Name</th>
                        <th className="px-6 py-4 text-left text-gray-700">Book Title</th>
                        <th className="px-6 py-4 text-left text-gray-700">Fine Amount</th>
                        <th className="px-6 py-4 text-left text-gray-700">Payment Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-purple-100">
                      {filteredFines.length > 0 ? (
                        filteredFines.map((fine) => (
                          <tr key={fine.id} className="hover:bg-purple-50/50 transition-colors">
                            <td className="px-6 py-4 text-purple-600">{fine.studentId}</td>
                            <td className="px-6 py-4 text-gray-900">{fine.studentName}</td>
                            <td className="px-6 py-4 text-gray-700">{fine.bookTitle}</td>
                            <td className="px-6 py-4 text-green-600">₹{fine.fineAmount}</td>
                            <td className="px-6 py-4 text-gray-700">{fine.paymentDate}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                            No payments found for selected month
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Book Update Modal */}
      {showModal && selectedBook && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-gray-900">Update Book Details</h3>
                <p className="text-gray-600 text-sm">Manage this book</p>
              </div>
            </div>

            <div className="space-y-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">Book ID</label>
                <input
                  type="text"
                  value={selectedBook.bookId}
                  onChange={(e) => setSelectedBook({...selectedBook, bookId: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Book Name</label>
                <input
                  type="text"
                  value={selectedBook.bookTitle}
                  onChange={(e) => setSelectedBook({...selectedBook, bookTitle: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Student Name</label>
                <input
                  type="text"
                  value={selectedBook.studentName}
                  onChange={(e) => setSelectedBook({...selectedBook, studentName: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Issue Date</label>
                <input
                  type="date"
                  value={selectedBook.issueDate}
                  onChange={(e) => setSelectedBook({...selectedBook, issueDate: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Return Date</label>
                <input
                  type="date"
                  value={selectedBook.dueDate}
                  onChange={(e) => setSelectedBook({...selectedBook, dueDate: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Fine</label>
                <input
                  type="number"
                  value={selectedBook.fine}
                  onChange={(e) => setSelectedBook({...selectedBook, fine: parseFloat(e.target.value) || 0})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedBook.reissued}
                  onChange={(e) => setSelectedBook({...selectedBook, reissued: e.target.checked})}
                  className="w-4 h-4"
                />
                <label className="text-gray-700">Reissued</label>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleUpdateBook(selectedBook)}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all"
              >
                Update
              </button>
              <button
                onClick={() => handleApproveReturn(selectedBook)}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:shadow-lg transition-all"
              >
                Approve Return
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
