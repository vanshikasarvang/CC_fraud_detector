"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", legitimate: 2800, fraudulent: 120 },
  { month: "Feb", legitimate: 3200, fraudulent: 145 },
  { month: "Mar", legitimate: 2900, fraudulent: 98 },
  { month: "Apr", legitimate: 3500, fraudulent: 167 },
  { month: "May", legitimate: 3100, fraudulent: 112 },
  { month: "Jun", legitimate: 3800, fraudulent: 189 },
  { month: "Jul", legitimate: 4200, fraudulent: 201 },
]

export default function TransactionTrends() {
  return (
    <div className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-6 backdrop-blur-sm">
      <h2 className="text-lg font-semibold mb-6 text-white">Transaction Trends (Jan - Jul)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="month" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "1px solid #475569",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "#e2e8f0" }}
          />
          <Legend />
          <Bar dataKey="legitimate" fill="#06b6d4" name="Legitimate" />
          <Bar dataKey="fraudulent" fill="#ef4444" name="Fraudulent" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
