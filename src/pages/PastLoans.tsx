import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, FileText, Calendar, DollarSign, Eye, Filter } from 'lucide-react';
import type { Loan } from '../types';

const PastLoans: React.FC = () => {
  const navigate = useNavigate();
  const [selectedLoan, setSelectedLoan] = useState<Loan | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  // Mock past loans data
  const pastLoans: Loan[] = [
    {
      id: 'LOAN-004',
      principal: 3000,
      interest: 450,
      dueDate: '2023-12-15',
      status: 'completed',
      sector: 'informal',
      createdAt: '2023-10-15',
    },
    {
      id: 'LOAN-005',
      principal: 8000,
      interest: 1200,
      dueDate: '2023-11-30',
      status: 'completed',
      sector: 'formal',
      createdAt: '2023-09-01',
    },
    {
      id: 'LOAN-006',
      principal: 1500,
      interest: 225,
      dueDate: '2023-10-20',
      status: 'completed',
      sector: 'informal',
      createdAt: '2023-08-20',
    },
    {
      id: 'LOAN-007',
      principal: 12000,
      interest: 1800,
      dueDate: '2024-01-15',
      status: 'pending',
      sector: 'formal',
      createdAt: '2023-11-15',
    },
  ];

  const handleViewDetails = (loan: Loan) => {
    setSelectedLoan(loan);
    setShowDetailModal(true);
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'active':
        return 'bg-blue-100 text-blue-800';
      case 'overdue':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
              <h1 className="text-3xl font-bold text-gray-900">Loan History</h1>
              <p className="text-gray-600 mt-1">View all your past and current loans</p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>

          {pastLoans.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">No Loan History</h3>
              <p className="text-gray-600 mb-8">You haven't taken any loans yet.</p>
              <button
                onClick={() => navigate('/')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Apply for Your First Loan
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200 bg-white">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Loan ID
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Sector
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Due Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Created
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {pastLoans.map((loan) => (
                    <tr key={loan.id} className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                            <FileText className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-gray-900">{loan.id}</div>
                            <div className="text-xs text-gray-500">Loan ID</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <DollarSign className="w-4 h-4 text-green-600 mr-1" />
                          <div>
                            <div className="text-sm font-bold text-gray-900">
                              {formatCurrency(loan.principal + loan.interest)}
                            </div>
                            <div className="text-xs text-gray-500">
                              Principal: {formatCurrency(loan.principal)}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 capitalize">
                          {loan.sector}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full capitalize ${getStatusColor(loan.status)}`}>
                          {loan.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {formatDate(loan.dueDate)}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{formatDate(loan.createdAt)}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => handleViewDetails(loan)}
                          className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Detail Modal */}
      {showDetailModal && selectedLoan && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white rounded-t-2xl border-b border-gray-200 px-8 py-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Loan Details
                    </h3>
                    <p className="text-gray-600">{selectedLoan.id}</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowDetailModal(false)}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <span className="text-gray-500 text-xl">×</span>
                </button>
              </div>
            </div>
            
            <div className="px-8 py-6 space-y-8">
              {/* Loan Summary */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-blue-600" />
                Loan Details - {selectedLoan.id}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <span className="text-gray-600 text-sm">Principal Amount</span>
                    <div className="text-xl font-bold text-gray-900">{formatCurrency(selectedLoan.principal)}</div>
                  </div>
                  <div>
                    <span className="text-gray-600 text-sm">Interest</span>
                    <div className="text-xl font-bold text-gray-900">{formatCurrency(selectedLoan.interest)}</div>
                  </div>
                  <div>
                    <span className="text-gray-600 text-sm">Total Amount</span>
                    <div className="text-2xl font-bold text-blue-600">{formatCurrency(selectedLoan.principal + selectedLoan.interest)}</div>
                  </div>
                  <div>
                    <span className="text-gray-600 text-sm">Sector</span>
                    <div className="text-xl font-bold text-gray-900 capitalize">{selectedLoan.sector}</div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                  Timeline
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <div>
                      <div className="font-medium text-gray-900">Application Date</div>
                      <div className="text-sm text-gray-600">{formatDate(selectedLoan.createdAt)}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                    <div>
                      <div className="font-medium text-gray-900">Due Date</div>
                      <div className="text-sm text-gray-600">{formatDate(selectedLoan.dueDate)}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status */}
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Current Status</h4>
                <span className={`px-4 py-2 text-sm font-semibold rounded-full capitalize ${getStatusColor(selectedLoan.status)}`}>
                  {selectedLoan.status}
                </span>
              </div>

              {/* Mock Additional Details */}
              <div>
                <h4 className="font-bold text-gray-900 mb-4">Application Details</h4>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Interest Rate:</span>
                      <span className="font-medium">15% per annum</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Loan Term:</span>
                      <span className="font-medium">6 months</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Collateral:</span>
                      <span className="font-medium">Asset-backed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Guarantors:</span>
                      <span className="font-medium">2 provided</span>
                    </div>
                  </div>
                </div>
              </div>

              {selectedLoan.status === 'pending' && (
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-xl p-6">
                  <h4 className="font-bold text-yellow-800 mb-3 flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Pending Application
                  </h4>
                  <p className="text-yellow-700 mb-4">
                    This loan application is still being processed. You can check the status on the loan pending page.
                  </p>
                  <button
                    onClick={() => {
                      setShowDetailModal(false);
                      navigate(`/loan/pending/${selectedLoan.id}`);
                    }}
                    className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors font-medium"
                  >
                    View Status
                  </button>
                </div>
              )}
            </div>
            
            <div className="sticky bottom-0 bg-white rounded-b-2xl border-t border-gray-200 px-8 py-6">
              <button
                onClick={() => setShowDetailModal(false)}
                className="w-full bg-gray-600 text-white py-3 rounded-xl font-semibold hover:bg-gray-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PastLoans;