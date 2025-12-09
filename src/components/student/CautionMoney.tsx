import { useState } from 'react';
import { DollarSign, CheckCircle, XCircle, AlertCircle, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface CautionMoneyProps {
  studentData: any;
  onBack?: () => void;
}

export function CautionMoney({ studentData, onBack }: CautionMoneyProps) {
  const [noDuesCleared, setNoDuesCleared] = useState(true);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  
  const [bankDetails, setBankDetails] = useState({
    accountName: '',
    accountNumber: '',
    confirmAccountNumber: '',
    ifscCode: '',
    bankName: '',
    branchName: ''
  });

  const cautionAmount = 5000; // Mock caution money amount

  const handleApply = () => {
    if (noDuesCleared && bankDetails.accountNumber === bankDetails.confirmAccountNumber) {
      setApplicationSubmitted(true);
    }
  };

  if (applicationSubmitted) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
        <div className="text-center max-w-md mx-auto">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-gray-900 mb-3">Application Submitted Successfully!</h2>
          <p className="text-gray-600 mb-6">
            Your caution money withdrawal request has been submitted for processing.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <p className="text-blue-900 mb-2">Application ID: <strong>CM2025{Math.floor(Math.random() * 10000)}</strong></p>
            <p className="text-blue-900 mb-2">Amount: <strong>₹{cautionAmount}</strong></p>
            <p className="text-blue-800 text-sm">Expected processing time: 15-20 working days</p>
          </div>
          <button
            onClick={() => setApplicationSubmitted(false)}
            className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Form
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1658806300183-342fe517d68f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc2MzU1MjIzMHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Digital"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-white mb-3">Caution Money Withdrawal</h1>
          <p className="text-amber-100 text-lg">Apply for refund of your caution money deposit</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
        {/* Back Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Financial Services
          </button>
        )}
        {/* Header */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h2 className="text-gray-900">Caution Money Withdrawal</h2>
              <p className="text-gray-600">Apply for refund of caution money deposit</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-amber-900 mb-1">Caution Money Deposited</p>
              <p className="text-amber-900">₹{cautionAmount}</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-900 mb-1">Withdrawal Status</p>
              <p className="text-blue-900">Not Applied</p>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-blue-900 mb-3">Instructions</h3>
          <ol className="space-y-2 text-blue-800 text-sm list-decimal list-inside">
            <li>Kindly clear all the dues before applying for caution money withdrawal</li>
            <li>Provide accurate bank account details</li>
            <li>Account holder name must match with the student name</li>
            <li>Double-check IFSC code and account number</li>
            <li>Processing time may vary based on verification</li>
          </ol>
        </div>

        {/* Important Note */}
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-yellow-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-yellow-900 mb-1">Important Note</p>
            <p className="text-yellow-800 text-sm">
              The bank account name must be the same as the candidate who is applying for the caution money refund. 
              Accounts in different names will be rejected.
            </p>
          </div>
        </div>

        {/* No Dues Status */}
        <div className={`border-2 rounded-lg p-4 ${
          noDuesCleared 
            ? 'bg-green-50 border-green-200' 
            : 'bg-red-50 border-red-200'
        }`}>
          <div className="flex items-center gap-3">
            {noDuesCleared ? (
              <CheckCircle className="w-6 h-6 text-green-600" />
            ) : (
              <XCircle className="w-6 h-6 text-red-600" />
            )}
            <div>
              <p className="text-gray-900">No Dues Status</p>
              <p className={`text-sm ${noDuesCleared ? 'text-green-700' : 'text-red-700'}`}>
                {noDuesCleared 
                  ? 'All dues cleared. You can proceed with the application.' 
                  : 'Please clear all departmental dues before applying.'}
              </p>
            </div>
          </div>
        </div>

        {/* Student Details */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
          <h3 className="text-gray-900 mb-4">Student Details</h3>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-600 text-sm mb-1">Name</p>
              <p className="text-gray-900">{studentData.name}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-600 text-sm mb-1">College ID</p>
              <p className="text-gray-900">{studentData.collegeId}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-600 text-sm mb-1">Roll Number</p>
              <p className="text-gray-900">{studentData.rollNo}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-600 text-sm mb-1">Course</p>
              <p className="text-gray-900">{studentData.course}</p>
            </div>
          </div>
        </div>

        {/* Bank Details Form */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
          <h3 className="text-gray-900 mb-4">Bank Account Details</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">
                Account Holder Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                value={bankDetails.accountName}
                onChange={(e) => setBankDetails({...bankDetails, accountName: e.target.value})}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Name as per bank account"
              />
              <p className="text-gray-500 text-sm mt-1">Must match with student name: {studentData.name}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">
                  Bank Account Number <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  value={bankDetails.accountNumber}
                  onChange={(e) => setBankDetails({...bankDetails, accountNumber: e.target.value})}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Enter account number"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Confirm Account Number <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  value={bankDetails.confirmAccountNumber}
                  onChange={(e) => setBankDetails({...bankDetails, confirmAccountNumber: e.target.value})}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Re-enter account number"
                />
              </div>
            </div>

            {bankDetails.accountNumber && bankDetails.confirmAccountNumber && 
             bankDetails.accountNumber !== bankDetails.confirmAccountNumber && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <p className="text-red-800 text-sm">Account numbers do not match</p>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">
                  IFSC Code <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  value={bankDetails.ifscCode}
                  onChange={(e) => setBankDetails({...bankDetails, ifscCode: e.target.value.toUpperCase()})}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="e.g., SBIN0001234"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Bank Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  value={bankDetails.bankName}
                  onChange={(e) => setBankDetails({...bankDetails, bankName: e.target.value})}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Enter bank name"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Branch Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                value={bankDetails.branchName}
                onChange={(e) => setBankDetails({...bankDetails, branchName: e.target.value})}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Enter branch name"
              />
            </div>
          </div>

          <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
            <label className="flex items-start gap-3">
              <input type="checkbox" required className="w-4 h-4 mt-1 text-amber-600 border-gray-300 rounded" />
              <span className="text-gray-700 text-sm">
                I hereby declare that the above bank account details are correct and the account holder name matches with my name. 
                I understand that any mismatch will result in rejection of my application.
              </span>
            </label>
          </div>

          <div className="mt-6 flex gap-4">
            <button
              onClick={handleApply}
              disabled={!noDuesCleared || bankDetails.accountNumber !== bankDetails.confirmAccountNumber}
              className={`flex-1 py-3 rounded-lg transition-all ${
                noDuesCleared && bankDetails.accountNumber === bankDetails.confirmAccountNumber
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Submit Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}