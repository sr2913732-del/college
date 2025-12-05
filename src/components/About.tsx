import { GraduationCap, Target, Users, Award, ArrowLeft, Clock, FileCheck, Shield, Smartphone, TrendingUp, Zap, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AboutProps {
  onBack: () => void;
}

export function About({ onBack }: AboutProps) {
  const benefits = [
    {
      icon: Clock,
      title: '24/7 Accessibility',
      description: 'Access services anytime, anywhere without being constrained by office hours',
      color: 'blue'
    },
    {
      icon: Zap,
      title: 'Instant Processing',
      description: 'Automated workflows ensure faster processing of applications and requests',
      color: 'yellow'
    },
    {
      icon: FileCheck,
      title: 'Paperless Transactions',
      description: 'Go green with digital applications, reducing paper usage and environmental impact',
      color: 'green'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your data is protected with industry-standard encryption and security measures',
      color: 'purple'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Tracking',
      description: 'Monitor status of your applications and requests with live updates',
      color: 'indigo'
    },
    {
      icon: Smartphone,
      title: 'Mobile Friendly',
      description: 'Responsive design ensures smooth experience on all devices and screen sizes',
      color: 'pink'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1665860754719-2a060f4287b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlZHVjYXRpb24lMjBidWlsZGluZ3xlbnwxfHx8fDE3NjM1OTg3NTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="About"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white hover:text-blue-200 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </button>
          <h1 className="text-white mb-3">About the Portal</h1>
          <p className="text-blue-100 text-lg">Learn about our student services platform and its benefits</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <h2 className="text-gray-900 mb-6">About Student Services Portal</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The Integrated Student Services Portal is a comprehensive digital platform designed to streamline 
              and simplify various academic and administrative services for students at Hindustan Institute of 
              Management & Computer Studies.
            </p>
            <p>
              Our portal brings together multiple services under one unified interface, eliminating the need 
              for students to navigate different systems or physically visit multiple departments. This saves 
              time, reduces paperwork, and provides transparency in all transactions.
            </p>
            <p>
              Built with modern web technologies and following best practices in security and user experience, 
              the portal ensures that your academic journey is smooth, efficient, and hassle-free.
            </p>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-gray-900 mb-2">Digital First</h3>
            <p className="text-gray-600 text-sm">
              Complete digital transformation of student services for paperless operations
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-500">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-gray-900 mb-2">Centralized</h3>
            <p className="text-gray-600 text-sm">
              All services accessible from a single dashboard with unified authentication
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-purple-500">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-gray-900 mb-2">User Friendly</h3>
            <p className="text-gray-600 text-sm">
              Intuitive interface designed with student needs and feedback in mind
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-amber-500">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-gray-900 mb-2">Secure</h3>
            <p className="text-gray-600 text-sm">
              Industry-standard encryption and security measures to protect your data
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-white mb-6">Key Benefits & Advantages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white mb-2">{benefit.title}</h4>
                  <p className="text-green-100 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Student Benefits */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-gray-900">Benefits for Students</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Save time by avoiding multiple visits to different departments',
              'Submit applications from the comfort of your home or hostel',
              'Track all your applications and dues in one place',
              'Receive instant notifications for status updates',
              'Access digital copies of certificates and documents',
              'Pay fines and fees online securely'
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-8 text-white">
            <h3 className="text-white mb-4">Our Mission</h3>
            <p className="text-blue-100 leading-relaxed">
              To provide students with a seamless, efficient, and transparent platform for accessing 
              all academic and administrative services, enabling them to focus on their education and 
              personal growth.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-8 text-white">
            <h3 className="text-white mb-4">Our Vision</h3>
            <p className="text-purple-100 leading-relaxed">
              To become a model for educational institutions by demonstrating how technology can 
              enhance student experience, reduce administrative overhead, and promote transparency 
              in all operations.
            </p>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <h3 className="text-gray-900 mb-6">Technology & Features</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-gray-900 mb-3">Built With Modern Tech</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>React & TypeScript for robust frontend</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Responsive design for all devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Real-time application tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Automated workflow management</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 mb-3">Security Features</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">•</span>
                  <span>End-to-end encryption</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">•</span>
                  <span>Secure authentication system</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">•</span>
                  <span>Role-based access control</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">•</span>
                  <span>Regular security audits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}