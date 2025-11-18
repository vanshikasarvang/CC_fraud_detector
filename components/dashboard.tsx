// fileName: dashboard.tsx
"use client"
import { useState } from "react"
import SummaryCards from "./summary-cards"
import TransactionTrends from "./transaction-trends"
import TransactionDistribution from "./transaction-distribution"
import ModelPerformance from "./model-performance"
import FraudAlert from "./fraud-alert"
import RecentTransactions from "./recent-transactions"
import RightSidebar from "./right-sidebar"

type Tx = {
  id: string
  amount: string
  time: string
  status: string
  probability: number
  isFraud: boolean
}

type TrendItem = { month: string; legitimate: number; fraudulent: number }
type DistItem = { name: string; value: number }

export default function Dashboard() {
  const [transactions, setTransactions] = useState<Tx[]>([])
  const [trendData, setTrendData] = useState<TrendItem[]>([
    { month: "Jan", legitimate: 2800, fraudulent: 120 },
    { month: "Feb", legitimate: 3200, fraudulent: 145 },
    { month: "Mar", legitimate: 2900, fraudulent: 98 },
    { month: "Apr", legitimate: 3500, fraudulent: 167 },
    { month: "May", legitimate: 3100, fraudulent: 112 },
    { month: "Jun", legitimate: 3800, fraudulent: 189 },
    { month: "Jul", legitimate: 4200, fraudulent: 201 },
  ])
  const [distributionData, setDistributionData] = useState<DistItem[]>([
    { name: "Legitimate", value: 96.8 },
    { name: "Fraudulent", value: 3.2 },
  ])

  const [alertTx, setAlertTx] = useState<Tx | null>(null)
  const handleModelRun = (tx: Tx) => {
    setTransactions((prev) => [tx, ...prev])
    setAlertTx(tx)
    const month = new Date().toLocaleString("en-US", { month: "short" })
    setTrendData((prev) => {
      const idx = prev.findIndex((d) => d.month === month)
      if (idx === -1) {
        const next = [...prev, { month, legitimate: 0, fraudulent: 0 }]
        const i = next.length - 1
        if (tx.isFraud) next[i].fraudulent += 1
        else next[i].legitimate += 1
        return next
      } else {
        const next = [...prev]
        if (tx.isFraud) next[idx].fraudulent += 1
        else next[idx].legitimate += 1
        return next
      }
    })
    setDistributionData(() => {
      const total = transactions.length + 1
      const fraudCount = transactions.filter((t) => t.isFraud).length + (tx.isFraud ? 1 : 0)
      const legitCount = total - fraudCount
      const legitPct = Math.round((legitCount / total) * 1000) / 10
      const fraudPct = Math.round((fraudCount / total) * 1000) / 10
      return [
        { name: "Legitimate", value: legitPct },
        { name: "Fraudulent", value: fraudPct },
      ]
    })
  }

  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="px-8 py-6">
          <h1 className="text-3xl font-bold text-balance">Fraud Detection Dashboard</h1>
          <p className="text-slate-400 text-sm mt-1">Real-time transaction monitoring and ML model performance</p>
        </div>
      </header>

      <div className="flex">
        <div className="flex-1 p-8">
          <SummaryCards />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            <TransactionTrends data={trendData} />
            <TransactionDistribution data={distributionData} />
          </div>

          <div className="mt-8">
            <ModelPerformance />
          </div>

          <div className="mt-8">
            <FraudAlert tx={alertTx ?? undefined} />
          </div>

          <div className="mt-8">
            <RecentTransactions transactions={transactions} />
          </div>
        </div>

        <RightSidebar onModelRun={handleModelRun} />
      </div>
    </div>
  )
}