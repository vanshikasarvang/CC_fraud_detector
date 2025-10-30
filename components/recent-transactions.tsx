"use client"

import { AlertCircle, CheckCircle } from "lucide-react"

const transactions = [
  {
    id: "TXN-8924",
    amount: "$1,250.00",
    time: "2 min ago",
    status: "Fraud",
    probability: 98,
    isFraud: true,
  },
  {
    id: "TXN-8923",
    amount: "$45.99",
    time: "5 min ago",
    status: "Legitimate",
    probability: 99,
    isFraud: false,
  },
  {
    id: "TXN-8922",
    amount: "$2,100.00",
    time: "12 min ago",
    status: "Fraud",
    probability: 94,
    isFraud: true,
  },
  {
    id: "TXN-8921",
    amount: "$89.50",
    time: "18 min ago",
    status: "Legitimate",
    probability: 97,
    isFraud: false,
  },
  {
    id: "TXN-8920",
    amount: "$567.00",
    time: "25 min ago",
    status: "Legitimate",
    probability: 96,
    isFraud: false,
  },
  {
    id: "TXN-8919",
    amount: "$3,450.00",
    time: "32 min ago",
    status: "Fraud",
    probability: 91,
    isFraud: true,
  },
  {
    id: "TXN-8918",
    amount: "$123.45",
    time: "40 min ago",
    status: "Legitimate",
    probability: 98,
    isFraud: false,
  },
  {
    id: "TXN-8917",
    amount: "$890.00",
    time: "48 min ago",
    status: "Legitimate",
    probability: 95,
    isFraud: false,
  },
]

export default function RecentTransactions() {
  return (
    <div className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-6 backdrop-blur-sm overflow-hidden">
      <h2 className="text-lg font-semibold mb-6 text-white">Recent Transactions</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700/50">
              <th className="text-left py-3 px-4 text-slate-400 font-semibold text-sm">Transaction ID</th>
              <th className="text-left py-3 px-4 text-slate-400 font-semibold text-sm">Amount</th>
              <th className="text-left py-3 px-4 text-slate-400 font-semibold text-sm">Time</th>
              <th className="text-left py-3 px-4 text-slate-400 font-semibold text-sm">Status</th>
              <th className="text-left py-3 px-4 text-slate-400 font-semibold text-sm">Probability</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, idx) => (
              <tr key={idx} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                <td className="py-4 px-4 font-mono text-sm text-cyan-400">{tx.id}</td>
                <td className="py-4 px-4 font-semibold text-white">{tx.amount}</td>
                <td className="py-4 px-4 text-slate-400 text-sm">{tx.time}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    {tx.isFraud ? (
                      <>
                        <AlertCircle className="w-4 h-4 text-red-400" />
                        <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs font-semibold">
                          {tx.status}
                        </span>
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                        <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded text-xs font-semibold">
                          {tx.status}
                        </span>
                      </>
                    )}
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${tx.isFraud ? "bg-red-500" : "bg-emerald-500"}`}
                        style={{ width: `${tx.probability}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-slate-300 w-8 text-right">{tx.probability}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
