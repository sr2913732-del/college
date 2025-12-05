import { useState } from 'react';
import { User, Mail, Phone, MapPin, GraduationCap, Edit2, Save } from 'lucide-react';

export function ProfileModule() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'John Doe',
    fatherName: 'Robert Doe',
    email: 'john.doe@example.com',
    mobileNo: '9876543210',
    collegeId: 'HIMCS2021001',
    rollNo: '21MCA001',
    course: 'MCA',
    semester: '4',
    year: '2024-2025',
    batch: '2021-2023',
    permanentAddress: '123 Main Street, City Name, State - 123456'
  });

  const handleSave = () => {
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-blue-900 mb-2">My Profile</h2>
          <p className="text-gray-600">View and edit your personal information</p>
        </div>
        <button
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors ${
            isEditing
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isEditing ? (
            <>
              <Save className="w-5 h-5" />
              <span>Save Changes</span>
            </>
          ) : (
            <>
              <Edit2 className="w-5 h-5" />
              <span>Edit Profile</span>
            </>
          )}
        </button>
      </div>

      {/* Profile Picture */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
            <User className="w-12 h-12 text-white" />
          </div>
          <div>
            <h3 className="text-blue-900 mb-1">{formData.name}</h3>
            <p className="text-gray-600 mb-2">{formData.collegeId}</p>
            <p className="text-gray-600">{formData.course} - Semester {formData.semester}</p>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <h3 className="text-blue-900 mb-6">Personal Information</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-2">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Full Name</span>
              </div>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => updateField('name', e.target.value)}
              disabled={!isEditing}
              className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${
                isEditing ? 'focus:ring-2 focus:ring-blue-500 focus:border-transparent' : 'bg-gray-50'
              }`}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Father's Name</span>
              </div>
            </label>
            <input
              type="text"
              value={formData.fatherName}
              onChange={(e) => updateField('fatherName', e.target.value)}
              disabled={!isEditing}
              className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${
                isEditing ? 'focus:ring-2 focus:ring-blue-500 focus:border-transparent' : 'bg-gray-50'
              }`}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>Email Address</span>
              </div>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              disabled={!isEditing}
              className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${
                isEditing ? 'focus:ring-2 focus:ring-blue-500 focus:border-transparent' : 'bg-gray-50'
              }`}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Mobile Number</span>
              </div>
            </label>
            <input
              type="tel"
              value={formData.mobileNo}
              onChange={(e) => updateField('mobileNo', e.target.value)}
              disabled={!isEditing}
              className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${
                isEditing ? 'focus:ring-2 focus:ring-blue-500 focus:border-transparent' : 'bg-gray-50'
              }`}
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-gray-700 mb-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Permanent Address</span>
              </div>
            </label>
            <textarea
              value={formData.permanentAddress}
              onChange={(e) => updateField('permanentAddress', e.target.value)}
              disabled={!isEditing}
              className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${
                isEditing ? 'focus:ring-2 focus:ring-blue-500 focus:border-transparent' : 'bg-gray-50'
              }`}
              rows={3}
            />
          </div>
        </div>
      </div>

      {/* Academic Information */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-blue-900 mb-6">Academic Information</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-2">
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-4 h-4" />
                <span>College ID</span>
              </div>
            </label>
            <input
              type="text"
              value={formData.collegeId}
              disabled
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
            />
            <p className="text-gray-500 mt-1">Cannot be modified</p>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-4 h-4" />
                <span>Roll Number</span>
              </div>
            </label>
            <input
              type="text"
              value={formData.rollNo}
              disabled
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
            />
            <p className="text-gray-500 mt-1">Cannot be modified</p>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Course</label>
            <input
              type="text"
              value={formData.course}
              disabled
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Current Semester</label>
            <input
              type="text"
              value={formData.semester}
              onChange={(e) => updateField('semester', e.target.value)}
              disabled={!isEditing}
              className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${
                isEditing ? 'focus:ring-2 focus:ring-blue-500 focus:border-transparent' : 'bg-gray-50'
              }`}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Academic Year</label>
            <input
              type="text"
              value={formData.year}
              onChange={(e) => updateField('year', e.target.value)}
              disabled={!isEditing}
              className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${
                isEditing ? 'focus:ring-2 focus:ring-blue-500 focus:border-transparent' : 'bg-gray-50'
              }`}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Batch</label>
            <input
              type="text"
              value={formData.batch}
              disabled
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
            />
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="text-blue-900 mb-4">Profile Update Guidelines</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>You can update your contact information and address at any time</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>College ID, Roll Number, Course, and Batch cannot be modified</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>Ensure all information is accurate as it will be used for official communications</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>For any errors in fixed fields, contact the administration</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
