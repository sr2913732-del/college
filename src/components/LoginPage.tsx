import { useState } from "react";
import {
  Shield,
  GraduationCap,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import collegeLogo from "figma:asset/cd3b27340c6ef6d210b3d3bdc4e7911da0e8e5f8.png";
import campusBackground from "figma:asset/622040f8ab38ec1d5bd4d97452219a578b57da8e.png";

interface LoginPageProps {
  onLogin: (data: any) => void;
  onRegister: () => void;
  onAdminLogin: () => void;
}

export function LoginPage({
  onLogin,
  onRegister,
  onAdminLogin,
}: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    // Mock login - in real app, validate against backend
    onLogin({
      email,
      name: "Sample Student",
      collegeId: "HIMCS2024001",
      rollNo: "CS001",
      course: "MCA",
      semester: "3rd",
      year: "2nd",
      batch: "2023-2025",
    });
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0">
        <ImageWithFallback
          src={campusBackground}
          alt="Campus Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-blue-800/45 to-indigo-900/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Top Info Bar */}
        <div className="bg-white/95 backdrop-blur-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-2">
            <div className="flex flex-wrap items-center justify-between text-sm gap-3">
              <div className="flex flex-wrap items-center gap-6">
                <a
                  href="tel:+919319155553"
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +91-9319155553
                </a>
                <a
                  href="mailto:info@himcs.edu.in"
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@himcs.edu.in
                </a>
              </div>
              <div className="flex gap-4 text-gray-600">
                <a
                  href="#"
                  className="hover:text-blue-600 transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  className="hover:text-blue-600 transition-colors"
                >
                  About
                </a>
                <a
                  href="#"
                  className="hover:text-blue-600 transition-colors"
                >
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Header */}
        <header className="bg-white/95 backdrop-blur-sm shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* College Logo */}
                <img
                  src={collegeLogo}
                  alt="HIMCS Logo"
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700">
                  Secure Portal
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Side - Information */}
            <div className="space-y-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl border border-gray-200 shadow-xl p-8">
                <h2 className="text-gray-900 mb-4">
                  Welcome to Student Services Portal
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  A unified digital platform providing
                  comprehensive services for students including
                  library management, document applications,
                  dues clearance, and grievance resolution.
                </p>

                <div className="space-y-4">
                  <h3 className="text-gray-900">
                    Available Services
                  </h3>
                  <div className="grid gap-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                      <div>
                        <p className="text-gray-900">
                          Library Services
                        </p>
                        <p className="text-gray-600 text-sm">
                          Issue, reissue books and pay fines
                          online
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
                      <div className="w-2 h-2 rounded-full bg-green-600 mt-2"></div>
                      <div>
                        <p className="text-gray-900">
                          No Dues Certificate
                        </p>
                        <p className="text-gray-600 text-sm">
                          Clear dues from all departments
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border border-purple-100">
                      <div className="w-2 h-2 rounded-full bg-purple-600 mt-2"></div>
                      <div>
                        <p className="text-gray-900">
                          Academic Documents
                        </p>
                        <p className="text-gray-600 text-sm">
                          Apply for marksheet and degree
                          certificates
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg border border-amber-100">
                      <div className="w-2 h-2 rounded-full bg-amber-600 mt-2"></div>
                      <div>
                        <p className="text-gray-900">
                          Caution Money Withdrawal
                        </p>
                        <p className="text-gray-600 text-sm">
                          Request refund of security deposit
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                      <div className="w-2 h-2 rounded-full bg-red-600 mt-2"></div>
                      <div>
                        <p className="text-gray-900">
                          Grievance Portal
                        </p>
                        <p className="text-gray-600 text-sm">
                          Submit and track complaints
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-xl p-6 text-white">
                <p className="text-blue-100 mb-2">
                  Data Security Notice
                </p>
                <p className="text-white text-sm leading-relaxed">
                  All student information is encrypted and
                  securely stored. We comply with data
                  protection regulations to ensure your privacy
                  and security.
                </p>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl border border-gray-200 shadow-xl p-8">
              <div className="mb-6">
                <h2 className="text-gray-900 mb-2">
                  Student Login
                </h2>
                <p className="text-gray-600">
                  Access your dashboard with registered
                  credentials
                </p>
              </div>

              {error && (
                <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className="text-red-800 text-sm">
                    {error}
                  </p>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 mb-2"
                  >
                    Email ID / College ID{" "}
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    placeholder="Enter your email or college ID"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-gray-700 mb-2"
                  >
                    Password{" "}
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    placeholder="Enter your password"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                    />
                    <span className="text-gray-700 text-sm">
                      Remember me
                    </span>
                  </label>
                  <a
                    href="#"
                    className="text-blue-600 text-sm hover:text-blue-700 hover:underline"
                  >
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3.5 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
                >
                  Login to Dashboard
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-center text-gray-600 mb-3">
                  Don't have an account?
                </p>
                <button
                  onClick={onRegister}
                  className="w-full bg-white text-blue-600 border-2 border-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-all"
                >
                  Register as New Student
                </button>
              </div>

              <div className="mt-4">
                <button
                  onClick={onAdminLogin}
                  className="w-full bg-gray-700 text-white border border-gray-600 py-3 rounded-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
                >
                  <Shield className="w-4 h-4" />
                  Admin & Staff Login
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900/95 backdrop-blur-sm text-white mt-12">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-white mb-4">About HIMCS</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  Hindustan Institute of Management & Computer
                  Studies is a premier educational institution
                  offering quality education in management and
                  computer applications.
                </p>
                <a
                  href="https://himcs.edu.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-2"
                >
                  Visit Website
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div>
                <h3 className="text-white mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>
                    <a
                      href="https://himcs.edu.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors flex items-center gap-2"
                    >
                      <ExternalLink className="w-3 h-3" />
                      HIMCS Website
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Academic Calendar
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Admission Portal
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Faculty Directory
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      Student Resources
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white mb-4">
                  Contact Information
                </h3>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>
                      Hindustan Institute of Management &
                      Computer Studies,
                      <br />
                      Kosi Kalan, Farah,
                      <br />
                      Mathura - 281122, Uttar Pradesh
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+91-9319155553</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>info@himcs.edu.in</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white mb-4">
                  Location Map
                </h3>
                <div className="bg-gray-800 rounded-lg overflow-hidden h-40">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.123!2d77.73456!3d27.34567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDIwJzQ0LjQiTiA3N8KwNDQnMDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-sm text-center md:text-left">
                  © 2025 Hindustan Institute of Management &
                  Computer Studies. All Rights Reserved.
                </p>
                <div className="flex gap-6 text-gray-400 text-sm">
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Accessibility
                  </a>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Sitemap
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}