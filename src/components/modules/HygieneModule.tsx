import { useState } from 'react';
import { AlertCircle, Upload, Send, Clock, CheckCircle2 } from 'lucide-react';

export function HygieneModule() {
  const [complaints, setComplaints] = useState([
    {
      id: 'HYG2025001',
      category: 'Cleanliness',
      location: 'Computer Lab - Block A',
      description: 'Washroom maintenance required',
      status: 'In Progress',
      dateSubmitted: '2025-11-15',
      lastUpdated: '2025-11-18'
    },
    {
      id: 'HYG2025002',
      category: 'Infrastructure',
      location: 'Library Building',
      description: 'Broken window pane in reading hall',
      status: 'Resolved',
      dateSubmitted: '2025-11-10',
      lastUpdated: '2025-11-12'
    }
  ]);

  const [showComplaintForm, setShowComplaintForm] = useState(false);
  const [formData, setFormData] = useState({
    category: '',
    location: '',
    description: '',
    urgency: 'normal'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newComplaint = {
      id: `HYG2025${String(complaints.length + 1).padStart(3, '0')}`,
      ...formData,
      status: 'Pending',
      dateSubmitted: new Date().toISOString().split('T')[0],
      lastUpdated: new Date().toISOString().split('T')[0]
    };
    setComplaints([newComplaint, ...complaints]);
    setFormData({ category: '', location: '', description: '', urgency: 'normal' });
    setShowComplaintForm(false);
    alert('Complaint submitted successfully!');
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Resolved':
        return 'bg-green-100 text-green-700';
      case 'In Progress':
        return 'bg-blue-100 text-blue-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Resolved':
        return <CheckCircle2 className="w-4 h-4" />;
      case 'In Progress':
        return <Clock className="w-4 h-4" />;
      case 'Pending':
        return <AlertCircle className="w-4 h-4" />;
      default:
        return <AlertCircle className="w-4 h-4" />;
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-blue-900 mb-2">Hygiene & Complaints</h2>
        <p className="text-gray-600">Report issues related to cleanliness, infrastructure, and facilities</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-600">Total Complaints</h3>
            <AlertCircle className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-blue-900">{complaints.length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-600">In Progress</h3>
            <Clock className="w-5 h-5 text-yellow-600" />
          </div>
          <p className="text-blue-900">{complaints.filter(c => c.status === 'In Progress' || c.status === 'Pending').length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-600">Resolved</h3>
            <CheckCircle2 className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-blue-900">{complaints.filter(c => c.status === 'Resolved').length}</p>
        </div>
      </div>

      {/* New Complaint Button */}
      <div className="mb-8">
        <button
          onClick={() => setShowComplaintForm(!showComplaintForm)}
          className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Send className="w-5 h-5" />
          <span>{showComplaintForm ? 'Cancel' : 'Lodge New Complaint'}</span>
        </button>
      </div>

      {/* Complaint Form */}
      {showComplaintForm && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h3 className="text-blue-900 mb-6">Submit New Complaint</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => updateField('category', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Cleanliness">Cleanliness</option>
                  <option value="Infrastructure">Infrastructure</option>
                  <option value="Plumbing">Plumbing</option>
                  <option value="Electrical">Electrical</option>
                  <option value="Waste Management">Waste Management</option>
                  <option value="Pest Control">Pest Control</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => updateField('location', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Computer Lab - Block A"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Urgency Level <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => updateField('urgency', 'low')}
                  className={`py-3 px-4 rounded-lg border-2 transition-all ${
                    formData.urgency === 'low'
                      ? 'border-green-600 bg-green-50 text-green-900'
                      : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                  }`}
                >
                  Low
                </button>
                <button
                  type="button"
                  onClick={() => updateField('urgency', 'normal')}
                  className={`py-3 px-4 rounded-lg border-2 transition-all ${
                    formData.urgency === 'normal'
                      ? 'border-blue-600 bg-blue-50 text-blue-900'
                      : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                  }`}
                >
                  Normal
                </button>
                <button
                  type="button"
                  onClick={() => updateField('urgency', 'high')}
                  className={`py-3 px-4 rounded-lg border-2 transition-all ${
                    formData.urgency === 'high'
                      ? 'border-red-600 bg-red-50 text-red-900'
                      : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                  }`}
                >
                  High
                </button>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => updateField('description', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={4}
                placeholder="Describe the issue in detail..."
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Upload Supporting Documents/Photos (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                <p className="text-gray-500">JPG, PNG, PDF (Max 5MB)</p>
                <input type="file" className="hidden" accept=".jpg,.jpeg,.png,.pdf" multiple />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit Complaint
            </button>
          </form>
        </div>
      )}

      {/* Complaint History */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-blue-900">My Complaints</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {complaints.map((complaint) => (
            <div key={complaint.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-gray-900">Complaint #{complaint.id}</span>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full ${getStatusColor(complaint.status)}`}>
                      {getStatusIcon(complaint.status)}
                      <span className="ml-1">{complaint.status}</span>
                    </span>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <p><span className="text-gray-900">Category:</span> {complaint.category}</p>
                    <p><span className="text-gray-900">Location:</span> {complaint.location}</p>
                    <p><span className="text-gray-900">Description:</span> {complaint.description}</p>
                    <div className="flex flex-wrap gap-4 text-gray-600">
                      <span>Submitted: {new Date(complaint.dateSubmitted).toLocaleDateString()}</span>
                      <span>Last Updated: {new Date(complaint.lastUpdated).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="text-blue-900 mb-4">Guidelines for Complaints</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>Provide clear and detailed description of the issue</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>Upload photos/documents to help resolve the issue faster</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>Track your complaint status regularly</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>Resolution time: 10-20 working days depending on complexity</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>For urgent issues, mark urgency as 'High'</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
