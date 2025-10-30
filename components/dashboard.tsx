"use client"
import SummaryCards from "./summary-cards"
import TransactionTrends from "./transaction-trends"
import TransactionDistribution from "./transaction-distribution"
import ModelPerformance from "./model-performance"
import FraudAlert from "./fraud-alert"
import RecentTransactions from "./recent-transactions"
import RightSidebar from "./right-sidebar"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="px-8 py-6">
          <h1 className="text-3xl font-bold text-balance">Fraud Detection Dashboard</h1>
          <p className="text-slate-400 text-sm mt-1">Real-time transaction monitoring and ML model performance</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex">
        {/* Left Content Area */}
        <div className="flex-1 p-8">
          {/* Summary Cards */}
          <SummaryCards />

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            <TransactionTrends />
            <TransactionDistribution />
          </div>

          {/* Model Performance */}
          <div className="mt-8">
            <ModelPerformance />
          </div>

          {/* Fraud Alert */}
          <div className="mt-8">
            <FraudAlert />
          </div>

          {/* Recent Transactions */}
          <div className="mt-8">
            <RecentTransactions />
          </div>
        </div>

        {/* Right Sidebar */}
        <RightSidebar />
      </div>
    </div>
  )
}
