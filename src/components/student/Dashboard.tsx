import { useState } from "react";
import {
  BookOpen,
  FileText,
  GraduationCap,
  DollarSign,
  AlertCircle,
  Bus,
  User,
  LogOut,
  Menu,
  X,
  CheckCircle,
  Bell,
  ChevronDown,
  Home,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Info,
  HelpCircle,
  MessageSquare,
  TrendingUp,
  Users,
  Award,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ImageSlider } from "../ImageSlider";
import { YourActivity } from "./YourActivity";
import { Library } from "./Library";
import { NoDues } from "./NoDues";
import { Marksheet } from "./Marksheet";
import { Degree } from "./Degree";
import { CautionMoney } from "./CautionMoney";
import { Hygiene } from "./Hygiene";
import { Profile } from "./Profile";
import { About } from "../About";
import { Suggestions } from "../Suggestions";
import { FAQ } from "../FAQ";
import { Notifications } from "../Notifications";
import collegeLogo from "figma:asset/cd3b27340c6ef6d210b3d3bdc4e7911da0e8e5f8.png";
import campusBackground from "figma:asset/622040f8ab38ec1d5bd4d97452219a578b57da8e.png";

interface DashboardProps {
  studentData: any;
  onLogout: () => void;
}

type ActiveModule =
  | "overview"
  | "activity"
  | "library"
  | "no-dues"
  | "marksheet"
  | "degree"
  | "caution-money"
  | "hygiene"
  | "bus"
  | "profile"
  | "about"
  | "academic-services"
  | "financial-services"
  | "suggestions"
  | "faq"
  | "notifications";

export function StudentDashboard({
  studentData,
  onLogout,
}: DashboardProps) {
  const [activeModule, setActiveModule] =
    useState<ActiveModule>("overview");
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] =
    useState(false);
  const [showSupportModal, setShowSupportModal] =
    useState(false);
  const [showNoticeModal, setShowNoticeModal] = useState(false);

  const modules = [
    {
      id: "library",
      name: "Library Service",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600",
      description: "Manage issued books and fines",
    },
    {
      id: "academic-services",
      name: "Academic Services",
      icon: GraduationCap,
      color: "from-purple-500 to-purple-600",
      description: "Marksheet & Degree applications",
      children: ["marksheet", "degree"],
    },
    {
      id: "financial-services",
      name: "Financial Services",
      icon: DollarSign,
      color: "from-amber-500 to-amber-600",
      description: "Caution Money & No Dues",
      children: ["caution-money", "no-dues"],
    },
    {
      id: "hygiene",
      name: "Grievance Portal",
      icon: AlertCircle,
      color: "from-red-500 to-red-600",
      description: "Submit complaints",
    },
    {
      id: "bus",
      name: "Bus Navigation",
      icon: Bus,
      color: "from-teal-500 to-teal-600",
      description: "Track campus buses",
    },
  ];

  const renderModule = () => {
    switch (activeModule) {
      case "activity":
        return <YourActivity studentData={studentData} />;
      case "library":
        return <Library studentData={studentData} onBack={() => setActiveModule("overview")} />;
      case "no-dues":
        return <NoDues studentData={studentData} onBack={() => setActiveModule("financial-services")} />;
      case "marksheet":
        return <Marksheet studentData={studentData} onBack={() => setActiveModule("academic-services")} />;
      case "degree":
        return <Degree studentData={studentData} onBack={() => setActiveModule("academic-services")} />;
      case "caution-money":
        return <CautionMoney studentData={studentData} onBack={() => setActiveModule("financial-services")} />;
      case "hygiene":
        return <Hygiene studentData={studentData} onBack={() => setActiveModule("overview")} />;
      case "bus":
        return <BusNavigation onBack={() => setActiveModule("overview")} />;
      case "profile":
        return <Profile studentData={studentData} />;
      case "about":
        return (
          <About onBack={() => setActiveModule("overview")} />
        );
      case "academic-services":
        return (
          <AcademicServices
            onBack={(module: any) =>
              setActiveModule(module || "overview")
            }
          />
        );
      case "financial-services":
        return (
          <FinancialServices
            onBack={(module: any) =>
              setActiveModule(module || "overview")
            }
          />
        );
      case "suggestions":
        return (
          <Suggestions
            onBack={() => setActiveModule("overview")}
          />
        );
      case "faq":
        return (
          <FAQ onBack={() => setActiveModule("overview")} />
        );
      case "notifications":
        return (
          <Notifications
            onBack={() => setActiveModule("overview")}
          />
        );
      default:
        return (
          <Overview
            modules={modules}
            onModuleClick={setActiveModule}
            studentData={studentData}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Info Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center text-sm gap-3">
          <div className="flex flex-wrap gap-6">
            <a
              href="mailto:info@himcs.edu.in"
              className="flex items-center gap-2 hover:text-blue-200"
            >
              <Mail className="w-3 h-3" />
              info@himcs.edu.in
            </a>
            <a
              href="tel:+919319155553"
              className="flex items-center gap-2 hover:text-blue-200"
            >
              <Phone className="w-3 h-3" />
              +91-9319155553
            </a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-200">
              Screen Reader
            </a>
            <a href="#" className="hover:text-blue-200">
              Skip to Main
            </a>
          </div>
        </div>
      </div>

      {/* Top Navigation Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setActiveModule("overview")}
                  className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img
                    src={collegeLogo}
                    alt="HIMCS Logo"
                    className="h-16 w-auto object-contain"
                  />
                </button>
              </div>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                {menuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>

              <nav className="hidden lg:flex items-center gap-1">
                <button
                  onClick={() => setActiveModule("overview")}
                  className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                    activeModule === "overview"
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Home className="w-4 h-4" />
                  Home
                </button>

                <button
                  onClick={() => setActiveModule("activity")}
                  className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                    activeModule === "activity"
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <TrendingUp className="w-4 h-4" />
                  Your Activity
                </button>

                <button
                  onClick={() => setActiveModule("about")}
                  className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                    activeModule === "about"
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Info className="w-4 h-4" />
                  About
                </button>

                <button
                  onClick={() => setActiveModule("suggestions")}
                  className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                    activeModule === "suggestions"
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  Suggestions
                </button>

                <button
                  onClick={() => setActiveModule("faq")}
                  className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                    activeModule === "faq"
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <HelpCircle className="w-4 h-4" />
                  FAQ
                </button>

                <div className="relative">
                  <button
                    onClick={() =>
                      setServicesDropdown(!servicesDropdown)
                    }
                    className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-all flex items-center gap-2"
                  >
                    Services
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {servicesDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                      {modules.map((module) => {
                        const Icon = module.icon;
                        return (
                          <button
                            key={module.id}
                            onClick={() => {
                              setActiveModule(
                                module.id as ActiveModule,
                              );
                              setServicesDropdown(false);
                            }}
                            className="w-full px-4 py-3 hover:bg-gray-50 flex items-center gap-3 text-left transition-colors"
                          >
                            <Icon className="w-5 h-5 text-blue-600" />
                            <span className="text-gray-900">
                              {module.name}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setActiveModule("profile")}
                  className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                    activeModule === "profile"
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <User className="w-4 h-4" />
                  Profile
                </button>

                <button
                  onClick={() =>
                    setActiveModule("notifications")
                  }
                  className="relative p-2 hover:bg-gray-100 rounded-lg ml-2"
                >
                  <Bell className="w-5 h-5 text-gray-600" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                <button
                  onClick={onLogout}
                  className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg ml-2 transition-all"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </nav>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <nav className="px-4 py-4 space-y-2">
              <button
                onClick={() => {
                  setActiveModule("overview");
                  setMenuOpen(false);
                }}
                className="w-full px-4 py-3 text-left rounded-lg hover:bg-gray-50 flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                Home
              </button>
              <button
                onClick={() => {
                  setActiveModule("activity");
                  setMenuOpen(false);
                }}
                className="w-full px-4 py-3 text-left rounded-lg hover:bg-gray-50 flex items-center gap-2"
              >
                <TrendingUp className="w-4 h-4" />
                Your Activity
              </button>
              <button
                onClick={() => {
                  setActiveModule("about");
                  setMenuOpen(false);
                }}
                className="w-full px-4 py-3 text-left rounded-lg hover:bg-gray-50 flex items-center gap-2"
              >
                <Info className="w-4 h-4" />
                About
              </button>
              <button
                onClick={() => {
                  setActiveModule("suggestions");
                  setMenuOpen(false);
                }}
                className="w-full px-4 py-3 text-left rounded-lg hover:bg-gray-50 flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Suggestions
              </button>
              <button
                onClick={() => {
                  setActiveModule("faq");
                  setMenuOpen(false);
                }}
                className="w-full px-4 py-3 text-left rounded-lg hover:bg-gray-50 flex items-center gap-2"
              >
                <HelpCircle className="w-4 h-4" />
                FAQ
              </button>
              {modules.map((module) => {
                const Icon = module.icon;
                return (
                  <button
                    key={module.id}
                    onClick={() => {
                      setActiveModule(
                        module.id as ActiveModule,
                      );
                      setMenuOpen(false);
                    }}
                    className="w-full px-4 py-3 text-left rounded-lg hover:bg-gray-50 flex items-center gap-2"
                  >
                    <Icon className="w-4 h-4" />
                    {module.name}
                  </button>
                );
              })}
              <button
                onClick={() => {
                  setActiveModule("profile");
                  setMenuOpen(false);
                }}
                className="w-full px-4 py-3 text-left rounded-lg hover:bg-gray-50 flex items-center gap-2"
              >
                <User className="w-4 h-4" />
                Profile
              </button>
              <button
                onClick={() => {
                  setActiveModule("notifications");
                  setMenuOpen(false);
                }}
                className="w-full px-4 py-3 text-left rounded-lg hover:bg-gray-50 flex items-center gap-2"
              >
                <Bell className="w-4 h-4" />
                Notifications
              </button>
              <button
                onClick={onLogout}
                className="w-full px-4 py-3 text-left rounded-lg text-red-600 hover:bg-red-50 flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pb-12">{renderModule()}</main>

      {/* Support Modal */}
      {showSupportModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-900">Contact Support</h3>
              <button
                onClick={() => setShowSupportModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-gray-700 mb-2">
                  Email Support
                </p>
                <a
                  href="mailto:info@himcs.edu.in"
                  className="text-blue-600 hover:underline"
                >
                  info@himcs.edu.in
                </a>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-gray-700 mb-2">
                  Phone Support
                </p>
                <a
                  href="tel:+919319155553"
                  className="text-green-600 hover:underline"
                >
                  +91-9319155553
                </a>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <p className="text-gray-700 mb-2">
                  Working Hours
                </p>
                <p className="text-gray-900">Monday - Friday</p>
                <p className="text-gray-600 text-sm">
                  9:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notice Modal */}
      {showNoticeModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-900">
                Important Notice
              </h3>
              <button
                onClick={() => setShowNoticeModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-amber-900 mb-2">
                  Dues Clearance Required
                </p>
                <p className="text-amber-700 text-sm">
                  Please clear all departmental dues before
                  applying for marksheet and degree
                  certificates.
                </p>
              </div>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-900 mb-2">
                  Library Books Due
                </p>
                <p className="text-blue-700 text-sm">
                  Return or renew your library books before the
                  due date to avoid fines.
                </p>
              </div>
              <button
                onClick={() => {
                  setShowNoticeModal(false);
                  setActiveModule("no-dues");
                }}
                className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Check Dues Status
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white mb-4">About HIMCS</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
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
              <ul className="space-y-2 text-gray-400 text-sm">
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
              </ul>
            </div>

            <div>
              <h3 className="text-white mb-4">
                Student Services
              </h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Library Management
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Document Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Grievance Portal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    No Dues Clearance
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white mb-4">
                Contact Information
              </h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>
                    Hindustan Institute of Management & Computer
                    Studies,
                    <br />
                    Kosi Kalan, Farah, Mathura - 281122, Uttar
                    Pradesh
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
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Overview({
  modules,
  onModuleClick,
  studentData,
}: any) {
  return (
    <div>
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <ImageWithFallback
            src={campusBackground}
            alt="University Campus"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-white mb-4">
              Welcome, {studentData.name}
            </h1>
            <p className="text-blue-100 text-xl mb-6 leading-relaxed">
              Access all your academic services in one place.
              Apply for documents, manage library books, clear
              dues, and track your applications seamlessly.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
                <p className="text-blue-100 text-sm">
                  College ID
                </p>
                <p className="text-white">
                  {studentData.collegeId}
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
                <p className="text-blue-100 text-sm">Course</p>
                <p className="text-white">
                  {studentData.course}
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
                <p className="text-blue-100 text-sm">
                  Semester
                </p>
                <p className="text-white">
                  {studentData.semester}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
        {/* Image Slider */}
        <div className="mb-12">
          <ImageSlider />
        </div>

        {/* About HIMCS College Section */}
        <div className="mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-gray-900">About HIMCS</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Hindustan Institute of Management & Computer
                  Studies (HIMCS) is a premier educational
                  institution located in Kosi Kalan, Farah,
                  Mathura, Uttar Pradesh. Established with a
                  vision to provide world-class education in
                  management and computer applications, HIMCS
                  has been a beacon of academic excellence.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The institute offers comprehensive programs in
                  MCA (Master of Computer Applications) and MBA
                  (Master of Business Administration), designed
                  to nurture future leaders and technology
                  professionals.
                </p>
                <a
                  href="https://himcs.edu.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Learn More About HIMCS
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="text-gray-900 mb-2">
                    Our Vision
                  </h4>
                  <p className="text-gray-600 text-sm">
                    To be a center of excellence in management
                    and computer education, producing competent
                    professionals who contribute to society.
                  </p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="text-gray-900 mb-2">
                    Our Mission
                  </h4>
                  <p className="text-gray-600 text-sm">
                    To provide quality education with emphasis
                    on practical knowledge, research, and
                    innovation in the fields of management and
                    information technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Portal Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl shadow-lg p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-white">
                About Student Services Portal
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-white mb-3">
                  Digital Transformation
                </h4>
                <p className="text-purple-100 text-sm leading-relaxed">
                  Our portal digitizes all student services,
                  from library management to document
                  applications, making your academic journey
                  paperless and efficient.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-white mb-3">
                  24/7 Accessibility
                </h4>
                <p className="text-purple-100 text-sm leading-relaxed">
                  Access all services anytime, anywhere. Submit
                  applications, track status, and manage your
                  academic needs without visiting multiple
                  departments.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-white mb-3">
                  Transparent Process
                </h4>
                <p className="text-purple-100 text-sm leading-relaxed">
                  Real-time tracking of your applications,
                  instant notifications, and complete
                  transparency in all administrative processes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Latest News Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-gray-900">
              Latest News & Updates
            </h2>
            <a
              href="https://himcs.edu.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-2"
            >
              View All News
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 relative">
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm text-blue-600">
                  2 days ago
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <FileText className="w-16 h-16 text-white/30" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-gray-900 mb-2">
                  Admission Open for Academic Year 2025-26
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  HIMCS announces admission for MCA and MBA
                  programs. Limited seats available. Apply now!
                </p>
                <a
                  href="https://himcs.edu.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-2"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 relative">
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm text-green-600">
                  5 days ago
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Award className="w-16 h-16 text-white/30" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-gray-900 mb-2">
                  Annual Tech Fest 2025 Successfully Concluded
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Students showcased innovative projects and
                  participated in various technical
                  competitions.
                </p>
                <a
                  href="https://himcs.edu.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-2"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-600 relative">
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm text-purple-600">
                  1 week ago
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white/30" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-gray-900 mb-2">
                  Placement Drive 2025 - 100% Success Rate
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  All eligible students from final year MCA and
                  MBA secured placements in top companies.
                </p>
                <a
                  href="https://himcs.edu.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-2"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Video/Slideshow Section */}
        <div className="mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-gray-900 mb-6">Campus Life</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl overflow-hidden shadow-md">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative group cursor-pointer">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNjMyODM0MzgwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Campus Video"
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-blue-600 border-b-8 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white">
                      Campus Tour - Virtual Walkthrough
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-600 relative">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBsZWFybmluZ3xlbnwxfHx8fDE2MzI4MzQzODB8MA&ixlib=rb-4.1.0&q=80&w=800"
                      alt="Academic Excellence"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                      <p className="text-white text-sm">
                        Academic Excellence
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-green-500 to-green-600 relative">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZmVzdGl2YWx8ZW58MXx8fHwxNjMyODM0MzgwfDA&ixlib=rb-4.1.0&q=80&w=800"
                      alt="Student Activities"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                      <p className="text-white text-sm">
                        Student Activities & Events
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instagram Feed Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-xl shadow-lg p-8 text-white">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-pink-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-white">
                    Follow Us on Instagram
                  </h2>
                  <p className="text-purple-100 text-sm">
                    @himcs_official
                  </p>
                </div>
              </div>
              <a
                href="https://instagram.com/himcs_official"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-pink-600 px-4 py-2 rounded-lg hover:bg-pink-50 transition-colors text-sm flex items-center gap-2"
              >
                Follow
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400",
                "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400",
                "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400",
                "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400",
                "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400",
                "https://images.unsplash.com/photo-1562774053-701939374585?w=400",
                "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400",
                "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400",
              ].map((src, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform"
                >
                  <ImageWithFallback
                    src={src}
                    alt={`Instagram post ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Information Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <button
            onClick={() => setShowSupportModal(true)}
            className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-8 text-white relative overflow-hidden text-left hover:shadow-2xl transition-all"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="relative">
              <h3 className="text-white mb-3">Quick Support</h3>
              <p className="text-blue-100 mb-6">
                Need help? Our support team is available Monday
                to Friday, 9 AM to 5 PM
              </p>
              <div className="inline-flex items-center text-white">
                Contact Support →
              </div>
            </div>
          </button>

          <button
            onClick={() => onModuleClick("no-dues")}
            className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-8 text-white relative overflow-hidden text-left hover:shadow-2xl transition-all"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="relative">
              <h3 className="text-white mb-3">
                Important Notice
              </h3>
              <p className="text-purple-100 mb-6">
                Clear all departmental dues to access marksheet
                and degree services
              </p>
              <div className="inline-flex items-center text-white">
                Check Dues Status →
              </div>
            </div>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

function BusNavigation({ onBack }: { onBack?: () => void }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Back Button */}
      {onBack && (
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </button>
      )}
      <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-12 text-center">
        <div className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Bus className="w-12 h-12 text-teal-600" />
        </div>
        <h2 className="text-gray-900 mb-3">
          Bus Navigation System
        </h2>
        <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
          This feature is currently under development and will
          be available soon. Track campus buses in real-time and
          plan your commute efficiently.
        </p>
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-teal-50 text-teal-700 rounded-lg">
          <AlertCircle className="w-5 h-5" />
          Coming Soon
        </div>
      </div>
    </div>
  );
}

function AcademicServices({ onBack }: any) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-gray-900">Academic Services</h2>
          <button
            onClick={onBack}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white">
                Marksheet Application
              </h3>
            </div>
            <p className="text-purple-100 text-sm leading-relaxed">
              Apply for your marksheet to receive a copy of your
              academic records.
            </p>
            <button
              onClick={() => onBack("marksheet")}
              className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors mt-4"
            >
              Apply for Marksheet
            </button>
          </div>
          <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl shadow-lg p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white">
                Degree Certificate Application
              </h3>
            </div>
            <p className="text-indigo-100 text-sm leading-relaxed">
              Apply for your degree certificate to receive a
              formal recognition of your academic achievement.
            </p>
            <button
              onClick={() => onBack("degree")}
              className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors mt-4"
            >
              Apply for Degree
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FinancialServices({ onBack }: any) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-gray-900">Financial Services</h2>
          <button
            onClick={onBack}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl shadow-lg p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white">
                Caution Money Withdrawal
              </h3>
            </div>
            <p className="text-amber-100 text-sm leading-relaxed">
              Withdraw your caution money after completing your
              academic obligations.
            </p>
            <button
              onClick={() => onBack("caution-money")}
              className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors mt-4"
            >
              Withdraw Caution Money
            </button>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white">
                No Dues Certificate
              </h3>
            </div>
            <p className="text-green-100 text-sm leading-relaxed">
              Obtain a no dues certificate to clear all
              departmental dues and proceed with your academic
              journey.
            </p>
            <button
              onClick={() => onBack("no-dues")}
              className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors mt-4"
            >
              Check Dues Status
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}