import { useState } from 'react';
import { 
  BookOpen, LogOut, Search, Users, DollarSign, 
  AlertCircle, CheckCircle, XCircle, Eye, Plus,
  Calendar, TrendingUp, Clock, Download, Shield
} from 'lucide-react';

interface LibraryDashboardProps {
  onLogout: () => void;
}

export function LibraryDashboard({ onLogout }: LibraryDashboardProps) {
  const [activeTab, setActiveTab] = useState('issued');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBook, setSelectedBook] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  
  const [issuedBooks, setIssuedBooks] = useState([
    {
      id: 1,
      studentId: 'HIMCS2024001',
      studentName: 'Rajesh Kumar',
      bookTitle: 'Data Structures and Algorithms',
      bookCode: 'CS-101',
      issueDate: '2025-11-15',
      dueDate: '2025-11-29',
      status: 'issued',
      fine: 0
    },
    {
      id: 2,
      studentId: 'HIMCS2024002',
      studentName: 'Priya Sharma',
      bookTitle: 'Database Management Systems',
      bookCode: 'CS-202',
      issueDate: '2025-11-10',
      dueDate: '2025-11-24',
      status: 'overdue',
      fine: 50
    },
    {
      id: 3,
      studentId: 'HIMCS2024003',
      studentName: 'Amit Singh',
      bookTitle: 'Operating Systems',
      bookCode: 'CS-303',
      issueDate: '2025-11-20',
      dueDate: '2025-12-04',
      status: 'issued',
      fine: 0
    },
    {
      id: 4,
      studentId: 'HIMCS2024004',
      studentName: 'Sneha Patel',
      bookTitle: 'Computer Networks',
      bookCode: 'CS-404',
      issueDate: '2025-11-01',
      dueDate: '2025-11-15',
      status: 'overdue',
      fine: 150
    },
  ]);

  const [noDuesRequests, setNoDuesRequests] = useState([
    {
      id: 1,
      studentId: 'HIMCS2024005',
      studentName: 'Rahul Verma',
      course: 'MCA',
      booksIssued: 0,
      pendingFines: 0,
      status: 'pending'
    },
    {
      id: 2,
      studentId: 'HIMCS2024006',
      studentName: 'Anita Desai',
      course: 'MBA',
      booksIssued: 1,
      pendingFines: 0,
      status: 'pending'
    },
    {
      id: 3,
      studentId: 'HIMCS2024007',
      studentName: 'Vikram Shah',
      course: 'MCA',
      booksIssued: 0,
      pendingFines: 25,
      status: 'pending'
    },
  ]);

  const stats = {
    totalIssued: issuedBooks.length,
    overdue: issuedBooks.filter(b => b.status === 'overdue').length,
    totalFines: issuedBooks.reduce((sum, b) => sum + b.fine, 0),
    noDuesPending: noDuesRequests.filter(r => r.status === 'pending').length,
  };

  const handleReturnBook = (book: any) => {
    setIssuedBooks(issuedBooks.filter(b => b.id !== book.id));
    setShowModal(false);
    alert(`Book "${book.bookTitle}" returned successfully!`);
  };

  const handleReissue = (book: any) => {
    const newDueDate = new Date();
    newDueDate.setDate(newDueDate.getDate() + 14);
    setIssuedBooks(issuedBooks.map(b => 
      b.id === book.id ? { ...b, dueDate: newDueDate.toISOString().split('T')[0], status: 'issued', fine: 0 } : b
    ));
    setShowModal(false);
    alert(`Book "${book.bookTitle}" reissued successfully!`);
  };

  const handleClearDues = (request: any) => {
    if (request.booksIssued > 0) {
      alert('Cannot clear dues - Student has books issued!');
      return;
    }
    if (request.pendingFines > 0) {
      alert('Cannot clear dues - Student has pending fines!');
      return;
    }
    setNoDuesRequests(noDuesRequests.map(r => 
      r.id === request.id ? { ...r, status: 'cleared' } : r
    ));
    alert(`No Dues cleared for ${request.studentName}`);
  };

  const handleRejectDues = (request: any) => {
    setNoDuesRequests(noDuesRequests.map(r => 
      r.id === request.id ? { ...r, status: 'rejected' } : r
    ));
    alert(`No Dues rejected for ${request.studentName}`);
  };

  const filteredBooks = issuedBooks.filter(book => 
    book.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.bookTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'issued': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'overdue': return 'bg-red-100 text-red-800 border-red-300';
      case 'cleared': return 'bg-green-100 text-green-800 border-green-300';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'rejected': return 'bg-red-100 text-red-800 border-red-300';
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
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white/90 backdrop-blur-xl border border-purple-200 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-600 text-sm">Books Issued</p>
              <BookOpen className="w-10 h-10 text-purple-600" />
            </div>
            <p className="text-3xl text-gray-900 mb-1">{stats.totalIssued}</p>
            <p className="text-purple-600 text-sm">Currently active</p>
          </div>

          <div className="bg-white/90 backdrop-blur-xl border border-red-200 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-600 text-sm">Overdue Books</p>
              <AlertCircle className="w-10 h-10 text-red-600" />
            </div>
            <p className="text-3xl text-gray-900 mb-1">{stats.overdue}</p>
            <p className="text-red-600 text-sm">Needs attention</p>
          </div>

          <div className="bg-white/90 backdrop-blur-xl border border-green-200 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-600 text-sm">Total Fines</p>
              <DollarSign className="w-10 h-10 text-green-600" />
            </div>
            <p className="text-3xl text-gray-900 mb-1">₹{stats.totalFines}</p>
            <p className="text-green-600 text-sm">Pending collection</p>
          </div>

          <div className="bg-white/90 backdrop-blur-xl border border-yellow-200 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-600 text-sm">No Dues</p>
              <Clock className="w-10 h-10 text-yellow-600" />
            </div>
            <p className="text-3xl text-gray-900 mb-1">{stats.noDuesPending}</p>
            <p className="text-yellow-600 text-sm">Pending clearance</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white/90 backdrop-blur-xl border border-purple-200 rounded-2xl shadow-xl overflow-hidden">
          {/* Tabs */}
          <div className="border-b border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50">
            <div className="flex gap-1 p-3">
              <button
                onClick={() => setActiveTab('issued')}
                className={`px-5 py-2.5 rounded-xl transition-all ${
                  activeTab === 'issued'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-white/50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Issued Books
                </span>
              </button>
              <button
                onClick={() => setActiveTab('nodues')}
                className={`px-5 py-2.5 rounded-xl transition-all ${
                  activeTab === 'nodues'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-white/50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  No Dues Requests
                </span>
              </button>
              <button
                onClick={() => setActiveTab('issue')}
                className={`px-5 py-2.5 rounded-xl transition-all ${
                  activeTab === 'issue'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-white/50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Issue New Book
                </span>
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'issued' && (
              <div className="space-y-4">
                {/* Search */}
                <div className="relative">
                  <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by student name, ID, or book title..."
                    className="w-full pl-12 pr-4 py-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white/70"
                  />
                </div>

                {/* Books Table */}
                <div className="overflow-x-auto bg-white/70 rounded-xl border border-purple-200">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-200">
                      <tr>
                        <th className="px-6 py-4 text-left text-gray-700">Student ID</th>
                        <th className="px-6 py-4 text-left text-gray-700">Name</th>
                        <th className="px-6 py-4 text-left text-gray-700">Book Title</th>
                        <th className="px-6 py-4 text-left text-gray-700">Code</th>
                        <th className="px-6 py-4 text-left text-gray-700">Issue Date</th>
                        <th className="px-6 py-4 text-left text-gray-700">Due Date</th>
                        <th className="px-6 py-4 text-left text-gray-700">Fine</th>
                        <th className="px-6 py-4 text-left text-gray-700">Status</th>
                        <th className="px-6 py-4 text-left text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-purple-100">
                      {filteredBooks.map((book) => (
                        <tr key={book.id} className="hover:bg-purple-50/50 transition-colors">
                          <td className="px-6 py-4 text-purple-600">{book.studentId}</td>
                          <td className="px-6 py-4 text-gray-900">{book.studentName}</td>
                          <td className="px-6 py-4 text-gray-700">{book.bookTitle}</td>
                          <td className="px-6 py-4 text-gray-700">{book.bookCode}</td>
                          <td className="px-6 py-4 text-gray-700">{book.issueDate}</td>
                          <td className="px-6 py-4 text-gray-700">{book.dueDate}</td>
                          <td className="px-6 py-4">
                            <span className={book.fine > 0 ? 'text-red-600' : 'text-green-600'}>
                              ₹{book.fine}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1.5 rounded-full text-sm border ${getStatusColor(book.status)}`}>
                              {book.status.charAt(0).toUpperCase() + book.status.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <button
                              onClick={() => {
                                setSelectedBook(book);
                                setShowModal(true);
                              }}
                              className="p-2 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 transition-colors"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'nodues' && (
              <div className="space-y-4">
                <h3 className="text-gray-900 mb-4">No Dues Clearance Requests</h3>
                <div className="overflow-x-auto bg-white/70 rounded-xl border border-purple-200">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-200">
                      <tr>
                        <th className="px-6 py-4 text-left text-gray-700">Student ID</th>
                        <th className="px-6 py-4 text-left text-gray-700">Name</th>
                        <th className="px-6 py-4 text-left text-gray-700">Course</th>
                        <th className="px-6 py-4 text-left text-gray-700">Books Issued</th>
                        <th className="px-6 py-4 text-left text-gray-700">Pending Fines</th>
                        <th className="px-6 py-4 text-left text-gray-700">Status</th>
                        <th className="px-6 py-4 text-left text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-purple-100">
                      {noDuesRequests.map((request) => (
                        <tr key={request.id} className="hover:bg-purple-50/50 transition-colors">
                          <td className="px-6 py-4 text-purple-600">{request.studentId}</td>
                          <td className="px-6 py-4 text-gray-900">{request.studentName}</td>
                          <td className="px-6 py-4 text-gray-700">{request.course}</td>
                          <td className="px-6 py-4">
                            <span className={request.booksIssued > 0 ? 'text-red-600' : 'text-green-600'}>
                              {request.booksIssued}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={request.pendingFines > 0 ? 'text-red-600' : 'text-green-600'}>
                              ₹{request.pendingFines}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1.5 rounded-full text-sm border ${getStatusColor(request.status)}`}>
                              {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            {request.status === 'pending' && (
                              <div className="flex gap-2">
                                <button
                                  onClick={() => handleClearDues(request)}
                                  className="px-3 py-1.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
                                >
                                  Clear
                                </button>
                                <button
                                  onClick={() => handleRejectDues(request)}
                                  className="px-3 py-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm"
                                >
                                  Reject
                                </button>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'issue' && (
              <div className="max-w-2xl mx-auto space-y-4">
                <h3 className="text-gray-900 mb-4">Issue New Book</h3>
                <div className="bg-purple-50/50 rounded-xl p-6 space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Student ID</label>
                    <input
                      type="text"
                      placeholder="Enter student ID"
                      className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Book Code</label>
                    <input
                      type="text"
                      placeholder="Enter book code"
                      className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <button 
                    onClick={() => alert('Book issued successfully!')}
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl hover:shadow-lg transition-all"
                  >
                    Issue Book
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Book Details Modal */}
      {showModal && selectedBook && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-gray-900">Book Details</h3>
                <p className="text-gray-600 text-sm">Manage this book</p>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-4 mb-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Student:</span>
                <strong className="text-gray-900">{selectedBook.studentName}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Book:</span>
                <strong className="text-gray-900">{selectedBook.bookTitle}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Issue Date:</span>
                <strong className="text-gray-900">{selectedBook.issueDate}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Due Date:</span>
                <strong className="text-gray-900">{selectedBook.dueDate}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Fine:</span>
                <strong className={selectedBook.fine > 0 ? 'text-red-600' : 'text-green-600'}>
                  ₹{selectedBook.fine}
                </strong>
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
                onClick={() => handleReissue(selectedBook)}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all"
              >
                Reissue
              </button>
              <button
                onClick={() => handleReturnBook(selectedBook)}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:shadow-lg transition-all"
              >
                Return
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
