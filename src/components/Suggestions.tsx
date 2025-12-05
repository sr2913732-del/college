import { useState } from 'react';
import { MessageSquare, Send, CheckCircle, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface SuggestionsProps {
  onBack: () => void;
}

export function Suggestions({ onBack }: SuggestionsProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the feedback to a backend
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setCategory('');
      setFeedback('');
    }, 3000);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtd29yayUyMGZlZWRiYWNrfGVufDF8fHx8MTc2MzU5ODc1NHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Suggestions"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white hover:text-purple-200 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </button>
          <h1 className="text-white mb-3">Suggestions & Feedback</h1>
          <p className="text-purple-100 text-lg">Help us improve our services with your valuable feedback</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-gray-900">We Value Your Feedback</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Your suggestions and feedback are crucial in helping us improve the Student Services Portal. 
            Whether you have ideas for new features, improvements to existing services, or have encountered 
            any issues, we want to hear from you.
          </p>
          <p className="text-gray-700 leading-relaxed">
            All feedback is reviewed by our development team and considered for future updates. Your input 
            directly influences how we enhance the portal to better serve the student community.
          </p>
        </div>

        {/* Feedback Form */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-gray-900 mb-6">Submit Your Feedback</h3>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h4 className="text-gray-900 mb-2">Thank You!</h4>
                  <p className="text-gray-700">
                    Your feedback has been successfully submitted. We appreciate your input and will review it carefully.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Your Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email ID <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="category" className="block text-gray-700 mb-2">
                      Feedback Category <span className="text-red-600">*</span>
                    </label>
                    <select
                      id="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
                    >
                      <option value="">Select a category</option>
                      <option value="website">Website Design & Usability</option>
                      <option value="library">Library Services</option>
                      <option value="academic">Academic Services</option>
                      <option value="financial">Financial Services</option>
                      <option value="grievance">Grievance Portal</option>
                      <option value="feature">New Feature Request</option>
                      <option value="bug">Bug Report</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="feedback" className="block text-gray-700 mb-2">
                      Your Feedback <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="feedback"
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white resize-none"
                      placeholder="Please share your suggestions, feedback, or report any issues you've encountered..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3.5 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Submit Feedback
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
              <h4 className="text-white mb-3">Quick Tips</h4>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li>• Be specific about the issue or suggestion</li>
                <li>• Include screenshots if reporting a bug</li>
                <li>• Mention which service/page you're referring to</li>
                <li>• Check FAQ before submitting</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h4 className="text-gray-900 mb-3">Recent Improvements</h4>
              <div className="space-y-3">
                <div className="pb-3 border-b border-gray-200">
                  <p className="text-gray-900 text-sm mb-1">Enhanced UI/UX</p>
                  <p className="text-gray-600 text-xs">Based on student feedback</p>
                </div>
                <div className="pb-3 border-b border-gray-200">
                  <p className="text-gray-900 text-sm mb-1">Faster Processing</p>
                  <p className="text-gray-600 text-xs">Reduced application time</p>
                </div>
                <div>
                  <p className="text-gray-900 text-sm mb-1">Mobile Optimization</p>
                  <p className="text-gray-600 text-xs">Better mobile experience</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white">
              <h4 className="text-white mb-2">Response Time</h4>
              <p className="text-green-100 text-sm">
                We typically review and respond to feedback within 3-5 business days.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 text-center">
            <div className="text-blue-600 mb-2">250+</div>
            <p className="text-gray-700">Suggestions Received</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 text-center">
            <div className="text-green-600 mb-2">180+</div>
            <p className="text-gray-700">Features Implemented</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 text-center">
            <div className="text-purple-600 mb-2">95%</div>
            <p className="text-gray-700">Positive Response Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}
