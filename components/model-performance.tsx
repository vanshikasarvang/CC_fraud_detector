"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts"

const data = [
  { metric: "Precision", value: 97.2 },
  { metric: "Recall", value: 94.8 },
  { metric: "F1-Score", value: 95.9 },
]

export default function ModelPerformance() {
  return (
    <div className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-6 backdrop-blur-sm">
      <h2 className="text-lg font-semibold mb-6 text-white">Model Performance Metrics</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 150, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis type="number" stroke="#94a3b8" domain={[0, 100]} />
          <YAxis dataKey="metric" type="category" stroke="#94a3b8" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "1px solid #475569",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "#e2e8f0" }}
          />
          <Bar dataKey="value" fill="#a855f7" radius={[0, 8, 8, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill="#a855f7" />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
