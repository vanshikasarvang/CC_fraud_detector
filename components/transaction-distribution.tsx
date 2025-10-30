"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Legitimate", value: 96.8 },
  { name: "Fraudulent", value: 3.2 },
]

const COLORS = ["#06b6d4", "#ef4444"]

export default function TransactionDistribution() {
  return (
    <div className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-6 backdrop-blur-sm">
      <h2 className="text-lg font-semibold mb-6 text-white">Transaction Distribution</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name}: ${value}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "1px solid #475569",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "#e2e8f0" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
