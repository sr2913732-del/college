import { useState } from 'react';
import { FileText, Upload, Download, CheckCircle, XCircle, AlertCircle, Truck, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface MarksheetProps {
  studentData: any;
  onBack?: () => void;
}

export function Marksheet({ studentData, onBack }: MarksheetProps) {
  const [noDuesCleared, setNoDuesCleared] = useState(true); // Mock - should come from NoDues component
  const [deliveryMethod, setDeliveryMethod] = useState<'collect' | 'courier'>('collect');
  const [showCorrectionForm, setShowCorrectionForm] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  const [correctionData, setCorrectionData] = useState({
    currentMarksheet: null,
    collegeId: studentData.collegeId,
    rollNo: studentData.rollNo,
    tenthMarksheet: null,
    remarks: ''
  });

  const [courierAddress, setCourierAddress] = useState({
    address: '',
    city: '',
    state: '',
    pincode: '',
    phone: ''
  });

  const handleFileUpload = (field: string, file: File | null) => {
    setCorrectionData({
      ...correctionData,
      [field]: file
    });
  };

  const handleApply = () => {
    if (noDuesCleared) {
      setApplicationSubmitted(true);
    }
  };

  if (applicationSubmitted) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8">
          <div className="text-center max-w-md mx-auto">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-gray-900 mb-3">Application Submitted Successfully!</h2>
            <p className="text-gray-600 mb-6">
              Your marksheet application has been submitted and is under review. You will be notified once it's processed.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <p className="text-blue-900 mb-2">Application ID: <strong>MS2025{Math.floor(Math.random() * 10000)}</strong></p>
              <p className="text-blue-800 text-sm">Expected processing time: 7-10 working days</p>
            </div>
            <button
              onClick={() => setApplicationSubmitted(false)}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Apply for Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1658806300183-342fe517d68f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc2MzU1MjIzMHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Digital Technology"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-white mb-3">Marksheet Application</h1>
          <p className="text-purple-100 text-lg">Apply for your official marksheet certificate</p>
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
            Back to Academic Services
          </button>
        )}
        {/* Header */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-gray-900">Marksheet Application</h2>
              <p className="text-gray-600">Apply for official marksheet</p>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-blue-900 mb-3">Instructions</h3>
          <ol className="space-y-2 text-blue-800 text-sm list-decimal list-inside">
            <li>Kindly clear all the dues before applying for marksheet</li>
            <li>Submit all the details accurately</li>
            <li>Choose collection method - Self collect or Courier</li>
            <li>Soft copy will be available for download after approval</li>
          </ol>
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

        {/* Application Form */}
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
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-600 text-sm mb-1">Semester</p>
              <p className="text-gray-900">{studentData.semester}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-600 text-sm mb-1">Batch</p>
              <p className="text-gray-900">{studentData.batch}</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-gray-900 mb-4">Delivery Method</h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <button
                onClick={() => setDeliveryMethod('collect')}
                className={`p-4 border-2 rounded-lg text-left transition-all ${
                  deliveryMethod === 'collect'
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 mb-1">Collect from College</p>
                    <p className="text-gray-600 text-sm">Free - Visit college office to collect</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setDeliveryMethod('courier')}
                className={`p-4 border-2 rounded-lg text-left transition-all ${
                  deliveryMethod === 'courier'
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Truck className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 mb-1">Courier Service</p>
                    <p className="text-gray-600 text-sm">₹200 - Delivery within 7-10 days</p>
                  </div>
                </div>
              </button>
            </div>

            {deliveryMethod === 'courier' && (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-4">
                <h4 className="text-gray-900">Courier Address</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-2">Complete Address</label>
                    <input
                      type="text"
                      value={courierAddress.address}
                      onChange={(e) => setCourierAddress({...courierAddress, address: e.target.value})}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter complete delivery address"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      value={courierAddress.city}
                      onChange={(e) => setCourierAddress({...courierAddress, city: e.target.value})}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">State</label>
                    <input
                      type="text"
                      value={courierAddress.state}
                      onChange={(e) => setCourierAddress({...courierAddress, state: e.target.value})}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="State"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Pincode</label>
                    <input
                      type="text"
                      value={courierAddress.pincode}
                      onChange={(e) => setCourierAddress({...courierAddress, pincode: e.target.value})}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Pincode"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Contact Number</label>
                    <input
                      type="tel"
                      value={courierAddress.phone}
                      onChange={(e) => setCourierAddress({...courierAddress, phone: e.target.value})}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Contact number"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 flex gap-4">
            <button
              onClick={handleApply}
              disabled={!noDuesCleared}
              className={`flex-1 py-3 rounded-lg transition-all ${
                noDuesCleared
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {noDuesCleared ? 'Submit Application' : 'Clear Dues First'}
            </button>
          </div>
        </div>

        {/* Correction Section */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-gray-900 mb-1">Marksheet Correction</h3>
              <p className="text-gray-600 text-sm">Request for correction in existing marksheet</p>
            </div>
            <button
              onClick={() => setShowCorrectionForm(!showCorrectionForm)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {showCorrectionForm ? 'Hide Form' : 'Apply for Correction'}
            </button>
          </div>

          {showCorrectionForm && (
            <div className="border-t border-gray-200 pt-6 space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Upload Current Marksheet <span className="text-red-600">*</span></label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                  <p className="text-gray-500 text-sm">PDF, JPG or PNG (Max 5MB)</p>
                  <input
                    type="file"
                    onChange={(e) => handleFileUpload('currentMarksheet', e.target.files?.[0] || null)}
                    className="hidden"
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Upload 10th Marksheet (Supporting Document) <span className="text-red-600">*</span></label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                  <p className="text-gray-500 text-sm">PDF, JPG or PNG (Max 5MB)</p>
                  <input
                    type="file"
                    onChange={(e) => handleFileUpload('tenthMarksheet', e.target.files?.[0] || null)}
                    className="hidden"
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Remarks / Details of Correction Required</label>
                <textarea
                  value={correctionData.remarks}
                  onChange={(e) => setCorrectionData({...correctionData, remarks: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Please describe the correction required in detail..."
                />
              </div>

              <button
                className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Submit Correction Request
              </button>
            </div>
          )}
        </div>

        {/* Download Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Download className="w-6 h-6 text-blue-600" />
              <div>
                <p className="text-gray-900">Download Soft Copy</p>
                <p className="text-gray-600 text-sm">Available after application approval</p>
              </div>
            </div>
            <button
              disabled
              className="px-6 py-2.5 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed"
            >
              Not Available
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}