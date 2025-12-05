import { useState } from 'react';
import { User, Edit2, Save, X } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ProfileProps {
  studentData: any;
}

export function Profile({ studentData }: ProfileProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: studentData.name || '',
    email: studentData.email || '',
    mobile: '9876543210',
    address: 'Sample Address, City',
    fatherName: 'Father Name',
    course: studentData.course || '',
    semester: studentData.semester || '',
    year: studentData.year || '',
    batch: studentData.batch || ''
  });

  const handleSave = () => {
    // Save logic here
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset to original data
    setIsEditing(false);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1632834380561-d1e05839a33a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzYzNTMxMjcxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-white mb-3">Student Profile</h1>
          <p className="text-blue-100 text-lg">View and manage your personal information</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
        {/* Header */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <User className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-gray-900">Student Profile</h2>
                <p className="text-gray-600">View and edit your information</p>
              </div>
            </div>
            
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Edit2 className="w-4 h-4" />
                Edit Profile
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={handleCancel}
                  className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <X className="w-4 h-4" />
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Profile Photo */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl">
              {studentData.name?.charAt(0) || 'S'}
            </div>
            <div>
              <h3 className="text-gray-900 mb-1">{studentData.name}</h3>
              <p className="text-gray-600 mb-3">{studentData.collegeId} | {studentData.rollNo}</p>
              {isEditing && (
                <button className="px-4 py-2 text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm">
                  Change Photo
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
          <h3 className="text-gray-900 mb-4 pb-3 border-b border-gray-200">Personal Information</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              {isEditing ? (
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="px-4 py-2.5 bg-gray-50 rounded-lg text-gray-900">{formData.name}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Father's Name</label>
              {isEditing ? (
                <input
                  type="text"
                  value={formData.fatherName}
                  onChange={(e) => setFormData({...formData, fatherName: e.target.value})}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="px-4 py-2.5 bg-gray-50 rounded-lg text-gray-900">{formData.fatherName}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email ID</label>
              {isEditing ? (
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="px-4 py-2.5 bg-gray-50 rounded-lg text-gray-900">{formData.email}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Mobile Number</label>
              {isEditing ? (
                <input
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="px-4 py-2.5 bg-gray-50 rounded-lg text-gray-900">{formData.mobile}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">Permanent Address</label>
              {isEditing ? (
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="px-4 py-2.5 bg-gray-50 rounded-lg text-gray-900">{formData.address}</p>
              )}
            </div>
          </div>
        </div>

        {/* Academic Information */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
          <h3 className="text-gray-900 mb-4 pb-3 border-b border-gray-200">Academic Information</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">College ID</label>
              <p className="px-4 py-2.5 bg-gray-100 rounded-lg text-gray-600">{studentData.collegeId}</p>
              <p className="text-gray-500 text-sm mt-1">Cannot be changed</p>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Roll Number</label>
              <p className="px-4 py-2.5 bg-gray-100 rounded-lg text-gray-600">{studentData.rollNo}</p>
              <p className="text-gray-500 text-sm mt-1">Cannot be changed</p>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Course</label>
              <p className="px-4 py-2.5 bg-gray-50 rounded-lg text-gray-900">{formData.course}</p>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Semester</label>
              {isEditing ? (
                <select
                  value={formData.semester}
                  onChange={(e) => setFormData({...formData, semester: e.target.value})}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="1st">1st Semester</option>
                  <option value="2nd">2nd Semester</option>
                  <option value="3rd">3rd Semester</option>
                  <option value="4th">4th Semester</option>
                  <option value="5th">5th Semester</option>
                  <option value="6th">6th Semester</option>
                </select>
              ) : (
                <p className="px-4 py-2.5 bg-gray-50 rounded-lg text-gray-900">{formData.semester}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Year</label>
              <p className="px-4 py-2.5 bg-gray-50 rounded-lg text-gray-900">{formData.year}</p>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Batch</label>
              <p className="px-4 py-2.5 bg-gray-50 rounded-lg text-gray-900">{formData.batch}</p>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
          <h3 className="text-gray-900 mb-4 pb-3 border-b border-gray-200">Security Settings</h3>
          
          <div className="space-y-4">
            <div>
              <button className="px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Change Password
              </button>
              <p className="text-gray-600 text-sm mt-2">Update your account password</p>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <button className="px-4 py-2.5 text-red-600 border-2 border-red-600 rounded-lg hover:bg-red-50 transition-colors">
                Deactivate Account
              </button>
              <p className="text-gray-600 text-sm mt-2">Temporarily disable your account access</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}