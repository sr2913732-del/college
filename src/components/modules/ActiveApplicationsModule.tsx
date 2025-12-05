import { FileText, Clock, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

export function ActiveApplicationsModule() {
  const applications = [
    {
      id: 'APP2025001',
      type: 'Marksheet',
      status: 'In Progress',
      submittedDate: '2025-11-15',
      expectedCompletion: '2025-11-30',
      deliveryMethod: 'Courier',
      remarks: 'Application under review by registrar'
    },
    {
      id: 'APP2025002',
      type: 'Caution Money',
      status: 'Pending',
      submittedDate: '2025-11-18',
      expectedCompletion: '2025-12-05',
      deliveryMethod: 'Bank Transfer',
      remarks: 'Awaiting no dues verification'
    },
    {
      id: 'APP2024156',
      type: 'Degree Certificate',
      status: 'Approved',
      submittedDate: '2025-10-20',
      expectedCompletion: '2025-11-10',
      deliveryMethod: 'College Pickup',
      remarks: 'Ready for collection from administration office'
    },
    {
      id: 'APP2024145',
      type: 'Marksheet Correction',
      status: 'Rejected',
      submittedDate: '2025-10-15',
      expectedCompletion: 'N/A',
      deliveryMethod: 'N/A',
      remarks: 'Insufficient supporting documents. Please resubmit with valid proof'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-700';
      case 'In Progress':
        return 'bg-blue-100 text-blue-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'Rejected':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Approved':
        return <CheckCircle2 className="w-4 h-4" />;
      case 'In Progress':
        return <Clock className="w-4 h-4" />;
      case 'Pending':
        return <AlertCircle className="w-4 h-4" />;
      case 'Rejected':
        return <XCircle className="w-4 h-4" />;
      default:
        return <AlertCircle className="w-4 h-4" />;
    }
  };

  const stats = {
    total: applications.length,
    pending: applications.filter(a => a.status === 'Pending').length,
    inProgress: applications.filter(a => a.status === 'In Progress').length,
    approved: applications.filter(a => a.status === 'Approved').length,
    rejected: applications.filter(a => a.status === 'Rejected').length
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-blue-900 mb-2">Active Applications</h2>
        <p className="text-gray-600">Track the status of all your submitted applications</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-600">Total</h3>
            <FileText className="w-5 h-5 text-gray-600" />
          </div>
          <p className="text-blue-900">{stats.total}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-600">Pending</h3>
            <AlertCircle className="w-5 h-5 text-yellow-600" />
          </div>
          <p className="text-blue-900">{stats.pending}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-600">In Progress</h3>
            <Clock className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-blue-900">{stats.inProgress}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-600">Approved</h3>
            <CheckCircle2 className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-blue-900">{stats.approved}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-600">Rejected</h3>
            <XCircle className="w-5 h-5 text-red-600" />
          </div>
          <p className="text-blue-900">{stats.rejected}</p>
        </div>
      </div>

      {/* Applications List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-blue-900">Application History</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {applications.map((app) => (
            <div key={app.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <h4 className="text-gray-900">{app.type}</h4>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full ${getStatusColor(app.status)}`}>
                      {getStatusIcon(app.status)}
                      <span className="ml-1">{app.status}</span>
                    </span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3 text-gray-700 mb-3">
                    <p><span className="text-gray-900">Application ID:</span> {app.id}</p>
                    <p><span className="text-gray-900">Submitted:</span> {new Date(app.submittedDate).toLocaleDateString()}</p>
                    <p><span className="text-gray-900">Expected Completion:</span> {app.expectedCompletion}</p>
                    <p><span className="text-gray-900">Delivery Method:</span> {app.deliveryMethod}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${
                    app.status === 'Rejected' ? 'bg-red-50' : 'bg-blue-50'
                  }`}>
                    <p className={`flex items-start ${
                      app.status === 'Rejected' ? 'text-red-700' : 'text-blue-700'
                    }`}>
                      <AlertCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                      <span><span className="text-gray-900">Remarks:</span> {app.remarks}</span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {app.status === 'Approved' && (
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap">
                      View Details
                    </button>
                  )}
                  {app.status === 'Rejected' && (
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
                      Resubmit
                    </button>
                  )}
                  {(app.status === 'Pending' || app.status === 'In Progress') && (
                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors whitespace-nowrap">
                      Track Status
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Information */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="text-blue-900 mb-4">Application Processing Timeline</h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</div>
            <div>
              <p className="text-gray-900">Application Submitted</p>
              <p className="text-gray-600">Your application is received and queued for processing</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</div>
            <div>
              <p className="text-gray-900">Under Review</p>
              <p className="text-gray-600">Relevant department reviews your application and documents</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</div>
            <div>
              <p className="text-gray-900">Processing</p>
              <p className="text-gray-600">Application is being processed and documents are prepared</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">4</div>
            <div>
              <p className="text-gray-900">Approved/Ready</p>
              <p className="text-gray-600">Application approved and ready for delivery or collection</p>
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-8 bg-orange-50 border border-orange-200 rounded-xl p-6">
        <h3 className="text-orange-900 mb-4">Need Help?</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-orange-600 mr-2">•</span>
            <span>Check application status regularly for updates</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-2">•</span>
            <span>If status hasn't changed after expected completion date, contact the respective department</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-2">•</span>
            <span>For rejected applications, review remarks and resubmit with required documents</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-600 mr-2">•</span>
            <span>For urgent queries, visit the administration office or call the helpdesk</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
