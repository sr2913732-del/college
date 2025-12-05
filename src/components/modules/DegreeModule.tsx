import { useState } from 'react';
import { GraduationCap, Download, Truck, AlertCircle, Upload, CheckCircle2, XCircle } from 'lucide-react';

export function DegreeModule() {
  const [hasClearedDues, setHasClearedDues] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState<'pickup' | 'courier'>('pickup');
  const [showCorrectionForm, setShowCorrectionForm] = useState(false);

  const handleApply = () => {
    if (!hasClearedDues) {
      alert('Please clear all dues before applying for degree certificate');
      return;
    }
    alert('Degree certificate application submitted successfully!');
  };

  const handleDownload = () => {
    alert('Downloading soft copy of degree certificate...');
  };

  const handleCorrectionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Degree correction request submitted successfully!');
    setShowCorrectionForm(false);
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-blue-900 mb-2">Degree Certificate Application</h2>
        <p className="text-gray-600">Apply for your degree certificate</p>
      </div>

      {/* Instructions */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
        <h3 className="text-blue-900 mb-4">Application Steps</h3>
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
              <p className="text-gray-900">Submit Application</p>
              <p className="text-gray-600">Fill in all required details and submit your application</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</div>
            <div>
              <p className="text-gray-900">Choose Delivery Method</p>
              <p className="text-gray-600">Collect from college or opt for courier service</p>
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
        <h3 className="text-blue-900 mb-6">Application Form</h3>
        <form className="space-y-6">
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
              <div>
                <label className="block text-gray-700 mb-2">Roll Number</label>
                <input
                  type="text"
                  value="21MCA001"
                  disabled
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Course</label>
                <input
                  type="text"
                  value="MCA"
                  disabled
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Year of Completion</label>
                <input
                  type="text"
                  value="2023"
                  disabled
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Batch</label>
                <input
                  type="text"
                  value="2021-2023"
                  disabled
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>
            </div>
          </div>

          {/* Delivery Method */}
          <div>
            <h4 className="text-gray-900 mb-4">Delivery Method</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setDeliveryMethod('pickup')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  deliveryMethod === 'pickup'
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-300 bg-white hover:border-gray-400'
                }`}
              >
                <GraduationCap className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <p className="text-gray-900 mb-1">Collect from College</p>
                <p className="text-gray-600">Free</p>
              </button>
              <button
                type="button"
                onClick={() => setDeliveryMethod('courier')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  deliveryMethod === 'courier'
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-300 bg-white hover:border-gray-400'
                }`}
              >
                <Truck className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <p className="text-gray-900 mb-1">Courier Service</p>
                <p className="text-gray-600">₹200 delivery charges</p>
              </button>
            </div>
          </div>

          {/* Courier Address (if courier selected) */}
          {deliveryMethod === 'courier' && (
            <div>
              <h4 className="text-gray-900 mb-4">Delivery Address</h4>
              <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={4}
                placeholder="Enter complete delivery address"
                required
              />
            </div>
          )}

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={handleApply}
              disabled={!hasClearedDues}
              className={`flex-1 py-3 px-6 rounded-lg transition-all ${
                hasClearedDues
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Submit Application
            </button>
            <button
              type="button"
              onClick={handleDownload}
              className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Download className="w-5 h-5" />
              <span>Download Soft Copy</span>
            </button>
          </div>
        </form>
      </div>

      {/* Degree Correction */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-blue-900 mb-2">Degree Certificate Correction</h3>
            <p className="text-gray-600">Request correction for any errors in your degree certificate</p>
          </div>
          <button
            onClick={() => setShowCorrectionForm(!showCorrectionForm)}
            className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
          >
            {showCorrectionForm ? 'Cancel' : 'Request Correction'}
          </button>
        </div>

        {showCorrectionForm && (
          <form onSubmit={handleCorrectionSubmit} className="space-y-6 border-t border-gray-200 pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">
                  College ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your college ID"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Roll Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your roll number"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Upload Current Degree Certificate <span className="text-red-500">*</span>
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                <p className="text-gray-500">PDF, JPG, PNG (Max 5MB)</p>
                <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Upload 10th Marksheet (Supporting Document) <span className="text-red-500">*</span>
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                <p className="text-gray-500">PDF, JPG, PNG (Max 5MB)</p>
                <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Description of Error <span className="text-red-500">*</span>
              </label>
              <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={4}
                placeholder="Describe the error that needs correction"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit Correction Request
            </button>
          </form>
        )}
      </div>

      {/* Notice */}
      <div className="mt-8 bg-orange-50 border border-orange-200 rounded-xl p-6">
        <div className="flex items-start">
          <AlertCircle className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-orange-900 mb-2">Important Notice</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Processing time for degree certificate is 15-20 working days</li>
              <li>• Courier delivery takes additional 3-5 business days</li>
              <li>• Degree certificates are issued only after final semester results</li>
              <li>• Soft copy will be available for download after application approval</li>
              <li>• Correction requests will be reviewed within 20 working days</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
