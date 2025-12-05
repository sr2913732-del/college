import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FAQProps {
  onBack: () => void;
}

export function FAQ({ onBack }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'How do I access the Student Services Portal?',
          a: 'You can access the portal by visiting the login page and entering your college ID or registered email address along with your password. If you haven\'t registered yet, click on "Register as New Student" to create your account.'
        },
        {
          q: 'What should I do if I forget my password?',
          a: 'Click on the "Forgot Password?" link on the login page. Enter your registered email address, and you will receive instructions to reset your password via email.'
        },
        {
          q: 'Can I access the portal on my mobile phone?',
          a: 'Yes! The portal is fully responsive and works seamlessly on all devices including smartphones, tablets, and desktop computers.'
        },
        {
          q: 'Is my personal information secure?',
          a: 'Absolutely. We use industry-standard encryption and security measures to protect your data. All transactions are secure and your information is never shared with third parties.'
        }
      ]
    },
    {
      category: 'Library Services',
      questions: [
        {
          q: 'How can I check which books I have issued?',
          a: 'Navigate to the Library Services module from your dashboard. You will see a list of all books currently issued to you, along with due dates and fine status if any.'
        },
        {
          q: 'How do I pay library fines online?',
          a: 'In the Library Services module, you can view any pending fines. Click on "Pay Fine" next to the respective book and follow the payment instructions to pay online.'
        },
        {
          q: 'Can I request a reissue for my books?',
          a: 'Yes, you can request a reissue for books that are about to expire. Go to Library Services, find the book you want to reissue, and click on "Request Reissue". The request will be processed by the library staff.'
        }
      ]
    },
    {
      category: 'No Dues Certificate',
      questions: [
        {
          q: 'What is a No Dues Certificate?',
          a: 'A No Dues Certificate is an official document certifying that you have cleared all financial and material obligations to various departments of the college. It is typically required for degree issuance, migration, or other official purposes.'
        },
        {
          q: 'How do I apply for No Dues?',
          a: 'Go to the No Dues Certificate module and click "Apply for No Dues". The system will automatically check your dues status across all departments. If you have pending dues, you can clear them online before proceeding.'
        },
        {
          q: 'Which departments are included in No Dues?',
          a: 'The No Dues process includes clearance from 11 departments: Library, Accounts, Academic Section, Hostel, Sports, Exam Cell, Training & Placement, Lab, Canteen, Transport, and Student Welfare.'
        },
        {
          q: 'How long does it take to get No Dues clearance?',
          a: 'Once all dues are cleared, the processing typically takes 5-7 working days. You can track the status of your application in real-time through the portal.'
        }
      ]
    },
    {
      category: 'Certificates & Documents',
      questions: [
        {
          q: 'How do I apply for a marksheet?',
          a: 'Navigate to the Marksheet module, select the semester/year for which you need the marksheet, choose delivery method (courier or self-collection), and submit your application. You can also request corrections if needed.'
        },
        {
          q: 'How do I apply for a degree certificate?',
          a: 'Go to the Degree Certificate module and submit your application. Note that you must have cleared all departmental dues (obtained No Dues Certificate) before applying for a degree certificate.'
        },
        {
          q: 'What are the delivery options for certificates?',
          a: 'You can choose either courier delivery (we will ship the certificate to your registered address) or self-collection (you can collect it from the office). Courier charges may apply.'
        },
        {
          q: 'Can I request corrections in my certificates?',
          a: 'Yes, if you notice any errors in your name, date of birth, or other details, you can submit a correction request along with supporting documents. The request will be reviewed by the concerned department.'
        }
      ]
    },
    {
      category: 'Caution Money',
      questions: [
        {
          q: 'What is Caution Money?',
          a: 'Caution Money is a refundable security deposit collected from students at the time of admission. It can be withdrawn after completing your course and clearing all dues.'
        },
        {
          q: 'When can I apply for Caution Money refund?',
          a: 'You can apply for refund after completing your course and obtaining the No Dues Certificate from all departments.'
        },
        {
          q: 'How will I receive the refund?',
          a: 'The refund will be processed through bank transfer to your registered bank account. Make sure your bank details are correctly updated in your profile.'
        }
      ]
    },
    {
      category: 'Grievance Portal',
      questions: [
        {
          q: 'How do I submit a complaint or grievance?',
          a: 'Go to the Hygiene & Grievance Portal module, select the complaint category, describe your issue in detail, attach supporting documents if needed, and submit. You will receive a ticket number for tracking.'
        },
        {
          q: 'How can I track my complaint status?',
          a: 'Use your ticket number to track the status of your complaint in the Grievance Portal. You will also receive notifications for any updates.'
        },
        {
          q: 'What is the expected resolution time?',
          a: 'Most complaints are resolved within 7-10 working days depending on the nature and complexity of the issue. Critical issues are prioritized and addressed faster.'
        }
      ]
    },
    {
      category: 'Technical Support',
      questions: [
        {
          q: 'What browsers are supported?',
          a: 'The portal works best on modern browsers like Google Chrome, Mozilla Firefox, Safari, and Microsoft Edge. Make sure your browser is updated to the latest version.'
        },
        {
          q: 'I am facing technical issues. Who should I contact?',
          a: 'For technical support, please email support@himcs.edu.in or call our helpline at +91-9319155553 during working hours (Mon-Fri, 9 AM - 5 PM).'
        },
        {
          q: 'Why am I unable to upload documents?',
          a: 'Ensure that your documents are in PDF, JPG, or PNG format and do not exceed 5MB in size. If the issue persists, try clearing your browser cache or using a different browser.'
        }
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1544822688-c5f41d2c1972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3MlMjBzdHVkeXxlbnwxfHx8fDE3NjM1OTA0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="FAQ"
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
          <h1 className="text-white mb-3">Frequently Asked Questions</h1>
          <p className="text-purple-100 text-lg">Find answers to common questions about our services</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <HelpCircle className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-gray-900">How can we help you?</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Browse through our frequently asked questions below. If you can't find the answer you're looking for, 
            please contact our support team at <a href="mailto:support@himcs.edu.in" className="text-blue-600 hover:underline">support@himcs.edu.in</a>
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-gray-900 mb-4">{category.category}</h3>
              <div className="space-y-3">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  const isOpen = openIndex === globalIndex;
                  
                  return (
                    <div 
                      key={faqIndex}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full px-5 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                      >
                        <span className="text-gray-900 pr-4">{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-5 py-4 bg-white border-t border-gray-200">
                          <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg p-8 text-white text-center">
          <h3 className="text-white mb-3">Still have questions?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our support team is here to help. Reach out to us via email or phone, and we'll get back to you as soon as possible.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:info@himcs.edu.in"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Email Support
            </a>
            <a 
              href="tel:+919319155553"
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-colors border border-white/30"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
