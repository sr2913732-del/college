import { useState } from 'react';
import { AlertCircle, Upload, CheckCircle, Clock } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HygieneProps {
  studentData: any;
}

export function Hygiene({ studentData }: HygieneProps) {
  const [complaintSubmitted, setComplaintSubmitted] = useState(false);
  const [complaint, setComplaint] = useState({
    category: '',
    subject: '',
    description: '',
    location: '',
    priority: 'medium',
    document: null as File | null
  });

  const [previousComplaints, setPreviousComplaints] = useState([
    {
      id: 1,
      ticketId: 'GRV2025001',
      category: 'Hygiene',
      subject: 'Washroom cleanliness issue',
      status: 'resolved',
      date: '2025-11-10',
      resolvedDate: '2025-11-12'
    },
    {
      id: 2,
      ticketId: 'GRV2025045',
      category: 'Maintenance',
      subject: 'Broken furniture in classroom',
      status: 'in-progress',
      date: '2025-11-18',
      resolvedDate: null
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setComplaintSubmitted(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'pending':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'resolved':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-yellow-600" />;
      default:
        return <AlertCircle className="w-5 h-5 text-blue-600" />;
    }
  };

  if (complaintSubmitted) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
        <div className="text-center max-w-md mx-auto">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-gray-900 mb-3">Complaint Submitted Successfully!</h2>
          <p className="text-gray-600 mb-6">
            Your grievance has been registered and will be reviewed by the concerned department.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <p className="text-blue-900 mb-2">Ticket ID: <strong>GRV2025{Math.floor(Math.random() * 1000)}</strong></p>
            <p className="text-blue-800 text-sm">You will be notified of any updates via email</p>
          </div>
          <button
            onClick={() => setComplaintSubmitted(false)}
            className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Submit Another Complaint
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1632834380561-d1e05839a33a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzYzNTMxMjcxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Campus"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-white mb-3">Hygiene & Grievance Portal</h1>
          <p className="text-red-100 text-lg">Report issues and submit complaints for quick resolution</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
        {/* Header */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h2 className="text-gray-900">Hygiene & Grievance Portal</h2>
              <p className="text-gray-600">Report issues and complaints</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-900 mb-1">Total Complaints</p>
              <p className="text-blue-900">{previousComplaints.length}</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-900 mb-1">In Progress</p>
              <p className="text-yellow-900">{previousComplaints.filter(c => c.status === 'in-progress').length}</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-900 mb-1">Resolved</p>
              <p className="text-green-900">{previousComplaints.filter(c => c.status === 'resolved').length}</p>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-blue-900 mb-3">Guidelines for Filing Complaints</h3>
          <ul className="space-y-2 text-blue-800 text-sm">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></div>
              <span>Provide clear and specific details about the issue</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></div>
              <span>Upload supporting documents or photos if available</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></div>
              <span>All complaints are time-bound with SLA of 10-20 working days</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5"></div>
              <span>Track your complaint status using the ticket ID</span>
            </li>
          </ul>
        </div>

        {/* Complaint Form */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
          <h3 className="text-gray-900 mb-4">Submit New Complaint</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">
                  Category <span className="text-red-600">*</span>
                </label>
                <select
                  required
                  value={complaint.category}
                  onChange={(e) => setComplaint({...complaint, category: e.target.value})}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select Category</option>
                  <option value="hygiene">Hygiene & Cleanliness</option>
                  <option value="maintenance">Maintenance & Repair</option>
                  <option value="infrastructure">Infrastructure</option>
                  <option value="facilities">Facilities</option>
                  <option value="safety">Safety & Security</option>
                  <option value="canteen">Canteen & Mess</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Priority <span className="text-red-600">*</span>
                </label>
                <select
                  required
                  value={complaint.priority}
                  onChange={(e) => setComplaint({...complaint, priority: e.target.value})}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Location / Area <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                value={complaint.location}
                onChange={(e) => setComplaint({...complaint, location: e.target.value})}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="e.g., Library 2nd Floor, Computer Lab A, etc."
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Subject <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                value={complaint.subject}
                onChange={(e) => setComplaint({...complaint, subject: e.target.value})}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Brief subject of the complaint"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Detailed Description <span className="text-red-600">*</span>
              </label>
              <textarea
                required
                value={complaint.description}
                onChange={(e) => setComplaint({...complaint, description: e.target.value})}
                rows={5}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Provide detailed description of the issue..."
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Upload Supporting Document / Photo (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-red-500 transition-colors">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                <p className="text-gray-500 text-sm">PDF, JPG or PNG (Max 5MB)</p>
                <input
                  type="file"
                  onChange={(e) => setComplaint({...complaint, document: e.target.files?.[0] || null})}
                  className="hidden"
                  accept=".pdf,.jpg,.jpeg,.png"
                />
              </div>
              {complaint.document && (
                <p className="text-green-600 text-sm mt-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  File uploaded: {complaint.document.name}
                </p>
              )}
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-900 text-sm">
                <strong>Note:</strong> Your complaint will be reviewed by the concerned department. 
                You will receive updates on your registered email ID and can track status using the ticket ID.
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Submit Complaint
            </button>
          </form>
        </div>

        {/* Previous Complaints */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-gray-900">Your Previous Complaints</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-gray-700">Ticket ID</th>
                  <th className="px-6 py-3 text-left text-gray-700">Category</th>
                  <th className="px-6 py-3 text-left text-gray-700">Subject</th>
                  <th className="px-6 py-3 text-left text-gray-700">Status</th>
                  <th className="px-6 py-3 text-left text-gray-700">Filed On</th>
                  <th className="px-6 py-3 text-left text-gray-700">Resolved On</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {previousComplaints.map((comp) => (
                  <tr key={comp.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <span className="text-blue-600">{comp.ticketId}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-700">{comp.category}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-900">{comp.subject}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(comp.status)}
                        <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(comp.status)}`}>
                          {comp.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-700">{comp.date}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-700">{comp.resolvedDate || '-'}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}