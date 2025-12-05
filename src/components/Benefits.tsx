import { Clock, FileCheck, Shield, Smartphone, TrendingUp, Users, Zap, CheckCircle, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BenefitsProps {
  onBack: () => void;
}

export function Benefits({ onBack }: BenefitsProps) {
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
    },
    {
      icon: Users,
      title: 'Centralized Support',
      description: 'Single point of contact for all queries and support needs',
      color: 'teal'
    },
    {
      icon: CheckCircle,
      title: 'Transparent Process',
      description: 'Clear visibility into application status and processing timelines',
      color: 'amber'
    }
  ];

  const studentBenefits = [
    'Save time by avoiding multiple visits to different departments',
    'Submit applications from the comfort of your home or hostel',
    'Track all your applications and dues in one place',
    'Receive instant notifications for status updates',
    'Access digital copies of certificates and documents',
    'Pay fines and fees online securely',
    'Submit grievances and get timely resolutions',
    'View complete history of all transactions'
  ];

  const adminBenefits = [
    'Reduce manual paperwork and administrative burden',
    'Automated workflow reduces processing time',
    'Better tracking and accountability of applications',
    'Generate reports and analytics easily',
    'Improved communication with students',
    'Reduced chances of errors in manual processing'
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1632834380561-d1e05839a33a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzYzNTMxMjcxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Benefits"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white hover:text-green-200 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </button>
          <h1 className="text-white mb-3">Benefits & Advantages</h1>
          <p className="text-green-100 text-lg">Discover how our portal makes your academic life easier</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
        {/* Key Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-t-4 hover:-translate-y-1"
                style={{ borderTopColor: `var(--${benefit.color}-500, #3B82F6)` }}
              >
                <div className={`w-14 h-14 bg-${benefit.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`w-7 h-7 text-${benefit.color}-600`} />
                </div>
                <h3 className="text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* For Students Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-gray-900">Benefits for Students</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {studentBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* For Administration Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-gray-900">Benefits for Administration</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {adminBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-8 text-white text-center">
            <div className="text-white mb-2">70%</div>
            <p className="text-blue-100">Reduction in Processing Time</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-8 text-white text-center">
            <div className="text-white mb-2">90%</div>
            <p className="text-green-100">Student Satisfaction Rate</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-8 text-white text-center">
            <div className="text-white mb-2">100%</div>
            <p className="text-purple-100">Paperless Operations</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg p-8 text-white text-center">
          <h3 className="text-white mb-4">Ready to Experience the Benefits?</h3>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            Start using our services today and join hundreds of students who have already simplified 
            their academic journey with our digital platform.
          </p>
          <button
            onClick={onBack}
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors shadow-lg"
          >
            Explore Services
          </button>
        </div>
      </div>
    </div>
  );
}
