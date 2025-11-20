import React, { useState } from 'react';
import { Eye, EyeOff, ChevronLeft, X, Wallet, Send, Users, CheckCircle, Receipt, DollarSign } from 'lucide-react';

export default function ClinicPesaDashboard() {
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [activeTab, setActiveTab] = useState('account');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#084C6C] to-[#0B6C94] text-white px-4 py-8 shadow-lg">
        <div className="flex items-center justify-between max-w-md md:max-w-4xl lg:max-w-6xl mx-auto">
          <button className="p-2 hover:bg-teal-600 rounded-lg transition">
            <ChevronLeft size={24} className="text-yellow-300" />
          </button>
          <h1 className="text-2xl font-bold tracking-wide">clinicPesa</h1>
          
          <button className="p-2 hover:bg-teal-600 rounded-lg transition">
            <X size={24} className="text-yellow-300" />
          </button>
          
        </div><br></br>
        <div className="text-center mt-6 mb-4">
          <h2 className="text-xl font-semibold text-white-800">Good Morning, Robert</h2>
        </div><br></br>
      </header>

      {/* Main Content */}
      <main className=" mx-auto px-4 md:px-8 lg:px-12 pb-8">
        {/* Greeting */}
        {/* <div className="text-center mt-6 mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Good Morning, Robert</h2>
        </div> */}

        {/* Savings Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100 -mt-12">
          <div className="flex items-center justify-between mb-4">
            <span className="bg-teal-50 text-teal-700 px-4 py-1.5 rounded-full text-sm font-medium">
              Savings
            </span>
            <button 
              onClick={() => setBalanceVisible(!balanceVisible)}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              {balanceVisible ? (
                <EyeOff size={20} className="text-gray-600" />
                
              ) : (
                <Eye size={20} className="text-gray-600" />
              )}
            </button>
          </div>

          <div className="text-center mb-6">
            <p className="text-sm text-[#0B6C94] mb-2">Balance</p>
            <h3 className="text-4xl font-bold text-[#084C6C] mb-4">
              {balanceVisible ? 'UGX 50,000' : '••••••'}
            </h3>
            
            <div className="flex justify-center gap-8 text-sm">
              <div>
                <span className="text-gray-600">Frequency: </span>
                <span className="font-semibold text-gray-800">Monthly</span>
              </div>
              <div>
                <span className="text-gray-600">AutoSave amount:</span>
                <span className="font-semibold text-gray-800">UGX 1,000</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
            <button className="flex flex-col items-center gap-2 py-3 hover:bg-gray-50 rounded-lg transition">
              <Wallet size={24} className="text-[#084C6C]" />
              <span className="font-semibold text-[#084C6C] text-sm">Deposit</span>
            </button>
            <button className="flex flex-col items-center gap-2 py-3 hover:bg-gray-50 rounded-lg transition">
              <Send size={24} className="text-[#084C6C]" />
              <span className="font-semibold text-[#084C6C] text-sm">Share Medical</span>
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mb-6">
          <div className="w-8 h-1 bg-yellow-400 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('account')}
            className={`pb-3 px-2 font-semibold text-sm transition relative ${
              activeTab === 'account'
                ? 'text-[#084C6C]'
                : 'text-[#084C6C] hover:text-[#084C6C]'
            }`}
          >
            ACCOUNT OPTIONS
            {activeTab === 'account' && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-400 rounded-t"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab('invest')}
            className={`pb-3 px-2 font-semibold text-sm transition ${
              activeTab === 'invest'
                ? 'text-teal-700'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            INVEST
          </button>
          <button
            onClick={() => setActiveTab('transactions')}
            className={`pb-3 px-2 font-semibold text-sm transition ${
              activeTab === 'transactions'
                ? 'text-gray-700'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            TRANSACTIONS
          </button>
        </div>

        {/* Action Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <button className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center gap-3 hover:shadow-lg transition border border-gray-100">
            <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center">
              <Receipt size={24} className="text-[#084C6C]" />
            </div>
            <span className="font-semibold text-gray-700 text-center">Pay Medical Bill</span>
          </button>

          <button className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center gap-3 hover:shadow-lg transition border border-gray-100">
            <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center">
              <DollarSign size={24} className="text-[#084C6C]" />
            </div>
            <span className="font-semibold text-gray-500 text-center">Get Loan</span>
          </button>

          <button className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center gap-3 hover:shadow-lg transition border border-gray-100">
            <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center">
              <Users size={24} className="text-[#084C6C]" />
            </div>
            <span className="font-semibold text-gray-500 text-center">Join MaMas</span>
          </button>

          <button className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center gap-3 hover:shadow-lg transition border border-gray-100">
            <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center">
              <CheckCircle size={24} className="text-[#084C6C]" />
            </div>
            <span className="font-semibold text-gray-500 text-center">My Approvals</span>
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-sm text-gray-500">
          <p>
            clinicPesa{' '}
            <a href="#" className="text-[#084C6C] underline hover:text-[#084C6C]">
              T&Cs
            </a>{' '}
            apply.
          </p>
        </div>
      </main>
    </div>
  );
}