import { useState } from 'react';
import { BookOpen, Calendar, AlertCircle, CheckCircle, IndianRupee, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface LibraryProps {
  studentData: any;
}

export function Library({ studentData }: LibraryProps) {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Data Structures and Algorithms',
      author: 'Cormen, Leiserson',
      issueDate: '2025-10-15',
      expectedReturn: '2025-11-14',
      reissueCount: 1,
      fine: 0,
      status: 'active'
    },
    {
      id: 2,
      title: 'Database Management Systems',
      author: 'Ramakrishnan, Gehrke',
      issueDate: '2025-10-20',
      expectedReturn: '2025-11-10',
      reissueCount: 0,
      fine: 50,
      status: 'overdue'
    }
  ]);

  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState<any>(null);

  const handleReissue = (bookId: number) => {
    setBooks(books.map(book => {
      if (book.id === bookId) {
        const newDate = new Date();
        newDate.setDate(newDate.getDate() + 30);
        return {
          ...book,
          reissueCount: book.reissueCount + 1,
          expectedReturn: newDate.toISOString().split('T')[0],
          status: 'active'
        };
      }
      return book;
    }));
  };

  const handlePayFine = (book: any) => {
    setSelectedBook(book);
    setShowPaymentModal(true);
  };

  const processPayment = () => {
    if (selectedBook) {
      setBooks(books.map(book => {
        if (book.id === selectedBook.id) {
          return { ...book, fine: 0, status: 'active' };
        }
        return book;
      }));
      setShowPaymentModal(false);
      setSelectedBook(null);
    }
  };

  const totalFine = books.reduce((sum, book) => sum + book.fine, 0);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1544822688-c5f41d2c1972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3MlMjBzdHVkeXxlbnwxfHx8fDE3NjM1OTA0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Library"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-white mb-3">Library Management</h1>
          <p className="text-blue-100 text-lg">Manage your issued books, reissues, and fines</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 mb-1">Total Books Issued</p>
                <p className="text-gray-900">{books.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 mb-1">Books Overdue</p>
                <p className="text-gray-900">{books.filter(b => b.status === 'overdue').length}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 mb-1">Total Fine Due</p>
                <p className="text-gray-900">₹{totalFine}</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <IndianRupee className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-blue-900 mb-2">Important Information</h3>
          <ul className="space-y-2 text-blue-800 text-sm">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></div>
              <span>Books can be reissued up to 2 times before returning</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></div>
              <span>Fine of ₹5 per day will be charged for overdue books</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></div>
              <span>Clear all library fines to access other services</span>
            </li>
          </ul>
        </div>

        {/* Books List */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-gray-900">Issued Books</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-gray-700">Book Details</th>
                  <th className="px-6 py-3 text-left text-gray-700">Issue Date</th>
                  <th className="px-6 py-3 text-left text-gray-700">Expected Return</th>
                  <th className="px-6 py-3 text-left text-gray-700">Reissues</th>
                  <th className="px-6 py-3 text-left text-gray-700">Fine</th>
                  <th className="px-6 py-3 text-left text-gray-700">Status</th>
                  <th className="px-6 py-3 text-left text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {books.map((book) => (
                  <tr key={book.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <p className="text-gray-900">{book.title}</p>
                      <p className="text-gray-600 text-sm">{book.author}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Calendar className="w-4 h-4" />
                        {book.issueDate}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Calendar className="w-4 h-4" />
                        {book.expectedReturn}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-700">{book.reissueCount} / 2</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`${book.fine > 0 ? 'text-red-600' : 'text-green-600'}`}>
                        ₹{book.fine}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        book.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {book.status === 'active' ? 'Active' : 'Overdue'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        {book.reissueCount < 2 && (
                          <button
                            onClick={() => handleReissue(book.id)}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                          >
                            Reissue
                          </button>
                        )}
                        {book.fine > 0 && (
                          <button
                            onClick={() => handlePayFine(book)}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
                          >
                            Pay Fine
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

        {/* Payment Modal */}
        {showPaymentModal && selectedBook && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
              <h3 className="text-gray-900 mb-4">Pay Library Fine</h3>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 mb-2">Book: {selectedBook.title}</p>
                <p className="text-gray-600 text-sm mb-3">Fine Amount</p>
                <p className="text-gray-900">₹{selectedBook.fine}</p>
              </div>

              <div className="space-y-3 mb-6">
                <div>
                  <label className="block text-gray-700 mb-2">Payment Method</label>
                  <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>UPI</option>
                    <option>Net Banking</option>
                    <option>Debit Card</option>
                    <option>Credit Card</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowPaymentModal(false)}
                  className="flex-1 px-4 py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={processPayment}
                  className="flex-1 px-4 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <IndianRupee className="w-4 h-4" />
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}