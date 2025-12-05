import { Bell, CheckCircle, AlertCircle, Info, X, Clock, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

interface NotificationsProps {
  onBack: () => void;
}

interface Notification {
  id: number;
  type: 'success' | 'warning' | 'info';
  title: string;
  message: string;
  time: string;
  read: boolean;
}

export function Notifications({ onBack }: NotificationsProps) {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: 'success',
      title: 'Application Approved',
      message: 'Your marksheet application has been approved and is ready for collection.',
      time: '2 hours ago',
      read: false
    },
    {
      id: 2,
      type: 'warning',
      title: 'Library Fine Due',
      message: 'You have a pending fine of ₹50 for "Data Structures" book. Please clear it soon.',
      time: '5 hours ago',
      read: false
    },
    {
      id: 3,
      type: 'info',
      title: 'No Dues Update',
      message: 'Library department has cleared your dues. 10 out of 11 departments cleared.',
      time: '1 day ago',
      read: true
    },
    {
      id: 4,
      type: 'success',
      title: 'Payment Successful',
      message: 'Your payment of ₹500 for semester fees has been received successfully.',
      time: '2 days ago',
      read: true
    },
    {
      id: 5,
      type: 'info',
      title: 'New Feature Available',
      message: 'Bus navigation tracking feature is now available in your dashboard.',
      time: '3 days ago',
      read: true
    },
    {
      id: 6,
      type: 'warning',
      title: 'Document Pending',
      message: 'Please upload your ID proof to complete your degree application.',
      time: '4 days ago',
      read: true
    }
  ]);

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-6 h-6 text-green-600" />;
      case 'warning':
        return <AlertCircle className="w-6 h-6 text-amber-600" />;
      case 'info':
        return <Info className="w-6 h-6 text-blue-600" />;
      default:
        return <Bell className="w-6 h-6 text-gray-600" />;
    }
  };

  const getBgColor = (type: string, read: boolean) => {
    if (read) return 'bg-gray-50';
    switch (type) {
      case 'success':
        return 'bg-green-50';
      case 'warning':
        return 'bg-amber-50';
      case 'info':
        return 'bg-blue-50';
      default:
        return 'bg-white';
    }
  };

  const getBorderColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'border-green-200';
      case 'warning':
        return 'border-amber-200';
      case 'info':
        return 'border-blue-200';
      default:
        return 'border-gray-200';
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="relative max-w-7xl mx-auto px-4 py-12">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white hover:text-blue-200 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-white mb-3">Notifications</h1>
              <p className="text-blue-100 text-lg">Stay updated with your activities and alerts</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
              <p className="text-white">{unreadCount} Unread</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Actions Bar */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="text-gray-900">
              {notifications.length} Total Notification{notifications.length !== 1 ? 's' : ''}
            </span>
          </div>
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="text-blue-600 hover:text-blue-700 text-sm transition-colors"
            >
              Mark all as read
            </button>
          )}
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {notifications.length === 0 ? (
            <div className="bg-white rounded-xl shadow-md p-12 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-600">No notifications yet</p>
            </div>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`rounded-xl shadow-md border transition-all hover:shadow-lg ${getBgColor(notification.type, notification.read)} ${getBorderColor(notification.type)}`}
              >
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      {getIcon(notification.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-gray-900">{notification.title}</h3>
                        <button
                          onClick={() => deleteNotification(notification.id)}
                          className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                      <p className="text-gray-700 mb-3">{notification.message}</p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <Clock className="w-4 h-4" />
                          <span>{notification.time}</span>
                        </div>
                        {!notification.read && (
                          <button
                            onClick={() => markAsRead(notification.id)}
                            className="text-blue-600 hover:text-blue-700 text-sm transition-colors"
                          >
                            Mark as read
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Settings */}
        <div className="mt-8 bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <h3 className="text-gray-900 mb-4">Notification Settings</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 border-gray-300 rounded" />
              <span className="text-gray-700">Email notifications for application updates</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 border-gray-300 rounded" />
              <span className="text-gray-700">SMS alerts for payment confirmations</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 border-gray-300 rounded" />
              <span className="text-gray-700">Push notifications for important updates</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded" />
              <span className="text-gray-700">Daily digest of all activities</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
