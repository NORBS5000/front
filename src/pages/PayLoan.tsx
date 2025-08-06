import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Calendar, AlertTriangle, CheckCircle } from 'lucide-react';
import type { Loan } from '../types';

const PayLoan: React.FC = () => {
  const navigate = useNavigate();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState<Loan | null>(null);
  const [paymentAmount, setPaymentAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // Mock active loans data
  const activeLoans: Loan[] = [
    {
      id: 'LOAN-001',
      principal: 5000,
      interest: 750,
      dueDate: '2024-03-15',
      status: 'active',
      sector: 'formal',
      createdAt: '2024-01-15',
    },
    {
      id: 'LOAN-002',
      principal: 2500,
      interest: 375,
      dueDate: '2024-02-28',
      status: 'overdue',
      sector: 'informal',
      createdAt: '2023-12-01',
    },
    {
      id: 'LOAN-003',
      principal: 7500,
      interest: 1125,
      dueDate: '2024-04-10',
      status: 'active',
      sector: 'formal',
      createdAt: '2024-02-10',
    },
  ];

  const handlePayNow = (loan: Loan) => {
    setSelectedLoan(loan);
    setPaymentAmount((loan.principal + loan.interest).toString());
    setShowPaymentModal(true);
  };

  const processPayment = async () => {
    if (!selectedLoan || !paymentAmount) return;

    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    setShowPaymentModal(false);
    
    // Show success message
    alert(`Payment of $${paymentAmount} processed successfully for loan ${selectedLoan.id}`);
    
    setSelectedLoan(null);
    setPaymentAmount('');
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getDaysUntilDue = (dueDate: string) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </button>
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900">Loan Payments</h1>
              <p className="text-gray-600 mt-1">Manage your active loans</p>
            </div>
            <div className="w-24"></div> {/* Spacer for centering */}
          </div>

          {activeLoans.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">No Active Loans</h3>
              <p className="text-gray-600 mb-8">You don't have any active loans to pay at the moment.</p>
              <button
                onClick={() => navigate('/')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Apply for a New Loan
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {activeLoans.map((loan) => {
                const totalAmount = loan.principal + loan.interest;
                const daysUntilDue = getDaysUntilDue(loan.dueDate);
                const isOverdue = daysUntilDue < 0;
                
                return (
                  <div
                    key={loan.id}
                    className={`border-2 rounded-2xl p-6 transition-all hover:shadow-lg ${
                      isOverdue 
                        ? 'border-red-200 bg-gradient-to-r from-red-50 to-red-25' 
                        : 'border-gray-200 hover:border-blue-200'
                    }`}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                            <CreditCard className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">
                              {loan.id}
                            </h3>
                            <div className="flex items-center space-x-2 mt-1">
                              <span
                                className={`px-3 py-1 text-xs font-semibold rounded-full ${
                                  loan.status === 'overdue'
                                    ? 'bg-red-100 text-red-800'
                                    : 'bg-green-100 text-green-800'
                                }`}
                              >
                                {loan.status === 'overdue' ? 'Overdue' : 'Active'}
                              </span>
                              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 capitalize">
                                {loan.sector}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                          <div className="bg-white rounded-lg p-4 border">
                            <span className="text-sm text-gray-500 block">Principal</span>
                            <div className="text-lg font-bold text-gray-900">{formatCurrency(loan.principal)}</div>
                          </div>
                          <div className="bg-white rounded-lg p-4 border">
                            <span className="text-sm text-gray-500 block">Interest</span>
                            <div className="text-lg font-bold text-gray-900">{formatCurrency(loan.interest)}</div>
                          </div>
                          <div className="bg-white rounded-lg p-4 border">
                            <span className="text-sm text-gray-500 block">Total Amount</span>
                            <div className="text-xl font-bold text-blue-600">{formatCurrency(totalAmount)}</div>
                          </div>
                          <div className="bg-white rounded-lg p-4 border">
                            <span className="text-sm text-gray-500 flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              Due Date
                            </span>
                            <div className={`text-lg font-bold ${isOverdue ? 'text-red-600' : 'text-gray-900'}`}>
                              {formatDate(loan.dueDate)}
                            </div>
                            {isOverdue ? (
                              <div className="text-red-600 text-sm font-medium flex items-center mt-1">
                                <AlertTriangle className="w-4 h-4 mr-1" />
                                {Math.abs(daysUntilDue)} days overdue
                              </div>
                            ) : (
                              <div className="text-green-600 text-sm font-medium mt-1">
                                {daysUntilDue} days remaining
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 lg:mt-0 lg:ml-8">
                        <button
                          onClick={() => handlePayNow(loan)}
                          className={`w-full lg:w-auto px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center ${
                            isOverdue
                              ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white'
                              : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white'
                          }`}
                        >
                          <CreditCard className="w-5 h-5 mr-2" />
                          {isOverdue ? 'Pay Overdue' : 'Pay Now'}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && selectedLoan && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform animate-in fade-in duration-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Pay Loan {selectedLoan.id}
              </h3>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h4 className="font-semibold text-gray-900 mb-4">Payment Summary</h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Principal:</span>
                    <span className="font-medium">{formatCurrency(selectedLoan.principal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Interest:</span>
                    <span className="font-medium">{formatCurrency(selectedLoan.interest)}</span>
                  </div>
                  <hr className="border-blue-200" />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span className="text-blue-600">{formatCurrency(selectedLoan.principal + selectedLoan.interest)}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Payment Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={paymentAmount}
                    onChange={(e) => setPaymentAmount(e.target.value)}
                    className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg font-medium"
                    placeholder="0.00"
                  />
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowPaymentModal(false)}
                  className="flex-1 py-3 text-gray-600 hover:text-gray-800 font-semibold transition-colors"
                  disabled={isProcessing}
                >
                  Cancel
                </button>
                <button
                  onClick={processPayment}
                  disabled={isProcessing || !paymentAmount}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-5 h-5 mr-2" />
                      Pay Now
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PayLoan;