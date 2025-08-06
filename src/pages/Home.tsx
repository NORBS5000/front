import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CreditCard, 
  DollarSign, 
  FileText, 
  Shield, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Users,
  TrendingUp,
  Award
} from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [showSectorModal, setShowSectorModal] = useState(false);

  const handleSectorSelect = (sector: 'formal' | 'informal') => {
    setShowSectorModal(false);
    navigate(`/loan/request/${sector}`);
  };

  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Approval",
      description: "Get approved in as little as 24 hours"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Process",
      description: "Your data is protected with bank-level security"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Competitive Rates",
      description: "Low interest rates starting from 12% per annum"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Support",
      description: "Dedicated support team to help you through the process"
    }
  ];

  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "$50M+", label: "Loans Disbursed" },
    { number: "98%", label: "Approval Rate" },
    { number: "4.9★", label: "Customer Rating" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  LoanFlow
                </h1>
                <p className="text-xs text-gray-500">Your Financial Partner</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => navigate('/loans')} 
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                Loan History
              </button>
              <button 
                onClick={() => navigate('/loan/pay')} 
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                Pay Loan
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Trusted by 10,000+ customers
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Get Your Loan
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                In Minutes
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Whether you're from the formal or informal sector, we provide quick, 
              secure loans tailored to your needs. No hidden fees, transparent process.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button
                onClick={() => setShowSectorModal(true)}
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center"
              >
                Apply for Loan
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => navigate('/loan/pay')}
                className="bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all duration-200 flex items-center"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Pay Existing Loan
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 right-0 -z-10 opacity-20">
          <div className="w-96 h-96 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 -z-10 opacity-20">
          <div className="w-96 h-96 bg-gradient-to-tr from-purple-400 to-pink-400 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose LoanFlow?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We make lending simple, fast, and accessible for everyone
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-blue-100">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Get your loan in 3 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Choose Your Sector",
                description: "Select whether you're from the formal or informal sector to get personalized requirements"
              },
              {
                step: "02", 
                title: "Submit Documents",
                description: "Upload required documents including assets, bank statements, and guarantor information"
              },
              {
                step: "03",
                title: "Get Approved",
                description: "Receive approval within 24 hours and get funds transferred to your account"
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-5xl font-bold text-blue-100 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join thousands of satisfied customers who trust LoanFlow for their financial needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowSectorModal(true)}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
            >
              Start Your Application
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button
              onClick={() => navigate('/uploadPDF')}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
            >
              <FileText className="w-5 h-5 mr-2" />
              Upload Documents
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">LoanFlow</span>
              </div>
              <p className="text-gray-400 mb-4">
                Making financial services accessible to everyone, regardless of sector or background.
              </p>
              <div className="flex space-x-4">
                {['Facebook', 'Twitter', 'LinkedIn'].map((social) => (
                  <button key={social} className="text-gray-400 hover:text-white transition-colors">
                    {social}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => setShowSectorModal(true)} className="hover:text-white transition-colors">Personal Loans</button></li>
                <li><button onClick={() => navigate('/loan/pay')} className="hover:text-white transition-colors">Loan Payments</button></li>
                <li><button onClick={() => navigate('/loans')} className="hover:text-white transition-colors">Loan History</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LoanFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sector Selection Modal */}
      {showSectorModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform animate-in fade-in duration-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Select Your Sector</h3>
              <p className="text-gray-600">Choose the option that best describes your employment status</p>
            </div>
            
            <div className="space-y-4 mb-6">
              <button
                onClick={() => handleSectorSelect('formal')}
                className="w-full p-6 text-left border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 mb-1">Formal Sector</div>
                    <div className="text-sm text-gray-600">
                      Regular employment with salary, bank statements, and payslips
                    </div>
                  </div>
                </div>
              </button>
              
              <button
                onClick={() => handleSectorSelect('informal')}
                className="w-full p-6 text-left border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 mb-1">Informal Sector</div>
                    <div className="text-sm text-gray-600">
                      Self-employed, freelance, or irregular income sources
                    </div>
                  </div>
                </div>
              </button>
            </div>
            
            <button
              onClick={() => setShowSectorModal(false)}
              className="w-full py-3 text-gray-600 hover:text-gray-800 font-medium transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;