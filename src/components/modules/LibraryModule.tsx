import { useState } from 'react';
import { BookOpen, Calendar, IndianRupee, RefreshCw, AlertTriangle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function LibraryModule() {
  const [issuedBooks] = useState([
    {
      id: 1,
      title: 'Data Structures and Algorithms',
      author: 'Thomas H. Cormen',
      issueDate: '2025-01-15',
      expectedReturnDate: '2025-02-15',
      reissueAvailable: true,
      fine: 0
    },
    {
      id: 2,
      title: 'Computer Networks',
      author: 'Andrew S. Tanenbaum',
      issueDate: '2025-01-10',
      expectedReturnDate: '2025-02-10',
      reissueAvailable: true,
      fine: 0
    },
    {
      id: 3,
      title: 'Operating System Concepts',
      author: 'Abraham Silberschatz',
      issueDate: '2024-12-20',
      expectedReturnDate: '2025-01-20',
      reissueAvailable: false,
      fine: 310
    },
  ]);

  const totalFine = issuedBooks.reduce((sum, book) => sum + book.fine, 0);

  const handleReissue = (bookId: number) => {
    alert(`Reissue request submitted for Book ID: ${bookId}`);
  };

  const handlePayFine = (bookId: number, fine: number) => {
    alert(`Payment of ₹${fine} initiated for Book ID: ${bookId}`);
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-blue-900 mb-2">Library Management</h2>
        <p className="text-gray-600">View your issued books, reissue requests, and pay fines</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-600">Total Books Issued</h3>
            <BookOpen className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-blue-900">{issuedBooks.length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-600">Total Fine Due</h3>
            <IndianRupee className="w-5 h-5 text-red-600" />
          </div>
          <p className="text-blue-900">₹{totalFine}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-600">Overdue Books</h3>
            <AlertTriangle className="w-5 h-5 text-orange-600" />
          </div>
          <p className="text-blue-900">{issuedBooks.filter(b => b.fine > 0).length}</p>
        </div>
      </div>

      {/* Library Image */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1643050079091-1d4a51e07ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3MlMjBzaGVsZnxlbnwxfHx8fDE3NjM1MDAwOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Library"
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Issued Books List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-blue-900">Issued Books</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {issuedBooks.map((book) => (
            <div key={book.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <h4 className="text-gray-900 mb-2">{book.title}</h4>
                  <p className="text-gray-600 mb-3">by {book.author}</p>
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Issued: {new Date(book.issueDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Return by: {new Date(book.expectedReturnDate).toLocaleDateString()}</span>
                    </div>
                    {book.fine > 0 && (
                      <div className="flex items-center text-red-600">
                        <IndianRupee className="w-4 h-4 mr-1" />
                        <span>Fine: ₹{book.fine}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  {book.reissueAvailable ? (
                    <button
                      onClick={() => handleReissue(book.id)}
                      className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <RefreshCw className="w-4 h-4" />
                      <span>Reissue</span>
                    </button>
                  ) : (
                    <div className="px-4 py-2 bg-gray-100 text-gray-500 rounded-lg text-center">
                      Reissue Not Available
                    </div>
                  )}
                  {book.fine > 0 && (
                    <button
                      onClick={() => handlePayFine(book.id, book.fine)}
                      className="flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <IndianRupee className="w-4 h-4" />
                      <span>Pay Fine</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="text-blue-900 mb-4">Instructions</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>Books can be reissued once before the expected return date</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>Late submission incurs a fine of ₹10 per day</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>Clear all library dues before applying for marksheet or degree certificate</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>For any queries, contact the library desk during working hours</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
