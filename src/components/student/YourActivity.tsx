import { TrendingUp, CheckCircle, BookOpen, Clock, IndianRupee, FileText, AlertCircle } from 'lucide-react';

interface ActivityProps {
  studentData: any;
}

export function YourActivity({ studentData }: ActivityProps) {
  const stats = [
    { label: 'Active Applications', value: '3', icon: TrendingUp, color: 'blue', bgColor: 'bg-blue-100', textColor: 'text-blue-600' },
    { label: 'Pending Dues', value: '₹0', icon: IndianRupee, color: 'green', bgColor: 'bg-green-100', textColor: 'text-green-600' },
    { label: 'Books Issued', value: '2', icon: BookOpen, color: 'purple', bgColor: 'bg-purple-100', textColor: 'text-purple-600' },
    { label: 'Processing Time', value: '8 days', icon: Clock, color: 'amber', bgColor: 'bg-amber-100', textColor: 'text-amber-600' },
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'application',
      title: 'Marksheet Application Submitted',
      description: 'Application for 5th Semester marksheet',
      time: '2 hours ago',
      status: 'In Progress',
      icon: FileText,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: 2,
      type: 'dues',
      title: 'Library Dues Cleared',
      description: 'Paid ₹50 fine for overdue books',
      time: '1 day ago',
      status: 'Completed',
      icon: CheckCircle,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      id: 3,
      type: 'book',
      title: 'Book Issued',
      description: 'Data Structures and Algorithms - Cormen',
      time: '3 days ago',
      status: 'Active',
      icon: BookOpen,
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      id: 4,
      type: 'warning',
      title: 'Book Return Due Soon',
      description: 'Database Systems - due in 2 days',
      time: '5 days ago',
      status: 'Pending',
      icon: AlertCircle,
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-900 mb-2">Your Activity</h2>
          <p className="text-gray-600">Overview of your academic activities and status</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${stat.textColor}`} />
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
              <p className="text-gray-900">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Activity Timeline */}
      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
        <h3 className="text-gray-900 mb-6">Recent Activity</h3>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div key={activity.id} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className={`w-12 h-12 rounded-lg ${activity.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-6 h-6 ${activity.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <h4 className="text-gray-900">{activity.title}</h4>
                    <span className="text-gray-500 text-sm whitespace-nowrap">{activity.time}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{activity.description}</p>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs ${
                    activity.status === 'Completed' ? 'bg-green-100 text-green-700' :
                    activity.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                    activity.status === 'Active' ? 'bg-purple-100 text-purple-700' :
                    'bg-amber-100 text-amber-700'
                  }`}>
                    {activity.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
          <h4 className="text-white mb-2">Pending Applications</h4>
          <p className="text-blue-100 mb-4">You have 3 applications in progress</p>
          <button className="text-white hover:underline text-sm">View All →</button>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
          <h4 className="text-white mb-2">Library Status</h4>
          <p className="text-purple-100 mb-4">2 books issued, all within due date</p>
          <button className="text-white hover:underline text-sm">Manage Books →</button>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white">
          <h4 className="text-white mb-2">Dues Status</h4>
          <p className="text-green-100 mb-4">All dues cleared ✓</p>
          <button className="text-white hover:underline text-sm">View Details →</button>
        </div>
      </div>
    </div>
  );
}
