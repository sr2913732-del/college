import { useState } from 'react';
import { ArrowLeft, CheckCircle, GraduationCap } from 'lucide-react';

interface RegisterPageProps {
  onBack: () => void;
}

export function RegisterPage({ onBack }: RegisterPageProps) {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    fatherName: '',
    collegeId: '',
    rollNo: '',
    course: '',
    semester: '',
    year: '',
    batch: '',
    address: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock registration
    setShowSuccess(true);
    setTimeout(() => {
      onBack();
    }, 2000);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-gray-900 mb-2">Registration Successful!</h2>
          <p className="text-gray-600 mb-4">
            Your account has been created successfully. You can now login with your credentials.
          </p>
          <p className="text-gray-500 text-sm">Redirecting to login page...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-gray-900">MyHIMCS</h1>
              <p className="text-gray-600 text-sm">Student Registration</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Login
        </button>

        <div className="bg-white rounded-lg border border-gray-200 shadow-lg p-8">
          <div className="mb-6">
            <h2 className="text-gray-900 mb-2">New Student Registration</h2>
            <p className="text-gray-600">Please fill all the required details to create your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-gray-900 mb-4 pb-2 border-b border-gray-200">Personal Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Father's Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter father's name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Email ID <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Mobile Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="10-digit mobile number"
                  />
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div>
              <h3 className="text-gray-900 mb-4 pb-2 border-b border-gray-200">Academic Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">
                    College ID <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="collegeId"
                    value={formData.collegeId}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., HIMCS2024001"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Roll Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="rollNo"
                    value={formData.rollNo}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter roll number"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Course <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Course</option>
                    <option value="MCA">MCA</option>
                    <option value="MBA">MBA</option>
                    <option value="BCA">BCA</option>
                    <option value="BBA">BBA</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Semester <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="semester"
                    value={formData.semester}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Semester</option>
                    <option value="1st">1st Semester</option>
                    <option value="2nd">2nd Semester</option>
                    <option value="3rd">3rd Semester</option>
                    <option value="4th">4th Semester</option>
                    <option value="5th">5th Semester</option>
                    <option value="6th">6th Semester</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Year <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Year</option>
                    <option value="1st">1st Year</option>
                    <option value="2nd">2nd Year</option>
                    <option value="3rd">3rd Year</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Batch <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="batch"
                    value={formData.batch}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., 2023-2025"
                  />
                </div>
              </div>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-gray-900 mb-4 pb-2 border-b border-gray-200">Contact Information</h3>
              <div>
                <label className="block text-gray-700 mb-2">
                  Permanent Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your complete permanent address"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <h3 className="text-gray-900 mb-4 pb-2 border-b border-gray-200">Set Password</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">
                    Password <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Create a strong password"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Confirm Password <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Re-enter your password"
                  />
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <label className="flex items-start gap-3">
                <input type="checkbox" required className="w-4 h-4 mt-1 text-blue-600 border-gray-300 rounded" />
                <span className="text-gray-700 text-sm">
                  I hereby declare that all the information provided above is true and correct to the best of my knowledge. 
                  I agree to the terms and conditions of MyHIMCS portal.
                </span>
              </label>
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={onBack}
                className="flex-1 bg-white text-gray-700 border-2 border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg"
              >
                Register Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
