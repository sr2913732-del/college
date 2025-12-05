import { useState } from 'react';
import { DollarSign, Building2, CreditCard, AlertCircle, CheckCircle2, XCircle } from 'lucide-react';

export function CautionMoneyModule() {
  const [hasClearedDues, setHasClearedDues] = useState(false);
  const [formData, setFormData] = useState({
    accountNumber: '',
    confirmAccountNumber: '',
    ifscCode: '',
    accountHolderName: '',
    bankName: '',
    branchName: ''
  });

  const cautionMoneyAmount = 10000;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hasClearedDues) {
      alert('Please clear all dues before applying for caution money withdrawal');
      return;
    }
    if (formData.accountNumber !== formData.confirmAccountNumber) {
      alert('Account numbers do not match!');
      return;
    }
    alert('Caution money withdrawal request submitted successfully!');
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-blue-900 mb-2">Caution Money Withdrawal</h2>
        <p className="text-gray-600">Apply to withdraw your caution money deposit</p>
      </div>

      {/* Caution Money Info */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="mb-2">Available Caution Money</p>
            <h2 className="text-white">₹{cautionMoneyAmount.toLocaleString('en-IN')}</h2>
          </div>
          <DollarSign className="w-16 h-16 opacity-50" />
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
        <h3 className="text-blue-900 mb-4">Withdrawal Steps</h3>
        <div className="space-y-3">
          <div className="flex items-start">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</div>
            <div>
              <p className="text-gray-900">Clear All Dues</p>
              <p className="text-gray-600">Ensure all department dues are cleared before proceeding</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</div>
            <div>
              <p className="text-gray-900">Submit Bank Details</p>
              <p className="text-gray-600">Provide accurate bank account information</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</div>
            <div>
              <p className="text-gray-900">Wait for Verification</p>
              <p className="text-gray-600">Amount will be transferred after verification</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dues Status Check */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <h3 className="text-blue-900 mb-4">Eligibility Check</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              {hasClearedDues ? (
                <CheckCircle2 className="w-6 h-6 text-green-600 mr-3" />
              ) : (
                <XCircle className="w-6 h-6 text-red-600 mr-3" />
              )}
              <div>
                <p className="text-gray-900">No Dues Certificate</p>
                <p className="text-gray-600">All department dues must be cleared</p>
              </div>
            </div>
            <button
              onClick={() => setHasClearedDues(!hasClearedDues)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                hasClearedDues
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              }`}
            >
              {hasClearedDues ? 'Cleared' : 'Pending'}
            </button>
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <h3 className="text-blue-900 mb-6">Bank Account Details</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Student Details (Auto-filled) */}
          <div>
            <h4 className="text-gray-900 mb-4">Student Details (Auto-filled from registration)</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  value="John Doe"
                  disabled
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">College ID</label>
                <input
                  type="text"
                  value="HIMCS2021001"
                  disabled
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>
            </div>
          </div>

          {/* Bank Details */}
          <div>
            <h4 className="text-gray-900 mb-4">Bank Account Information</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">
                  Account Holder Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.accountHolderName}
                    onChange={(e) => updateField('accountHolderName', e.target.value)}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Name as per bank account"
                    required
                  />
                </div>
                <p className="text-gray-600 mt-1">Note: Must match the applicant's name</p>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Bank Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.bankName}
                    onChange={(e) => updateField('bankName', e.target.value)}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter bank name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Account Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.accountNumber}
                  onChange={(e) => updateField('accountNumber', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter account number"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Confirm Account Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.confirmAccountNumber}
                  onChange={(e) => updateField('confirmAccountNumber', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Re-enter account number"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  IFSC Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.ifscCode}
                  onChange={(e) => updateField('ifscCode', e.target.value.toUpperCase())}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter IFSC code"
                  pattern="[A-Z]{4}0[A-Z0-9]{6}"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Branch Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.branchName}
                  onChange={(e) => updateField('branchName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter branch name"
                  required
                />
              </div>
            </div>
          </div>

          {/* Important Note */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start">
              <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-yellow-900 mb-1">Important Note</p>
                <p className="text-yellow-800">
                  The bank account holder name must match exactly with the candidate's name who is applying for caution money withdrawal. 
                  Requests with mismatched names will be rejected.
                </p>
              </div>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="bg-gray-50 rounded-lg p-4">
            <label className="flex items-start">
              <input type="checkbox" className="w-5 h-5 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500" required />
              <span className="ml-3 text-gray-700">
                I confirm that all the bank account details provided are accurate and belong to me. I understand that incorrect information may delay or reject my withdrawal request.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!hasClearedDues}
            className={`w-full py-3 px-6 rounded-lg transition-all ${
              hasClearedDues
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Submit Withdrawal Request
          </button>
        </form>
      </div>

      {/* Notice */}
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
        <div className="flex items-start">
          <AlertCircle className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-orange-900 mb-2">Processing Information</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Caution money will be processed after verification of all documents</li>
              <li>• Processing time: 15-20 working days</li>
              <li>• Amount will be transferred directly to the provided bank account</li>
              <li>• Ensure your bank account is active and details are correct</li>
              <li>• For any queries, contact the accounts section</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
