"use client"

import { TrendingUp, TrendingDown, AlertCircle, CheckCircle } from "lucide-react"

const cards = [
  {
    title: "Total Transactions",
    value: "22,845",
    trend: "+12%",
    trendUp: true,
    icon: CheckCircle,
    color: "from-cyan-500/20 to-blue-500/20",
    accentColor: "text-cyan-400",
  },
  {
    title: "Fraudulent Transactions",
    value: "731",
    trend: "3.2%",
    trendUp: false,
    icon: AlertCircle,
    color: "from-red-500/20 to-orange-500/20",
    accentColor: "text-red-400",
  },
  {
    title: "Model Accuracy",
    value: "98.5%",
    trend: "+2.1%",
    trendUp: true,
    icon: CheckCircle,
    color: "from-purple-500/20 to-pink-500/20",
    accentColor: "text-purple-400",
  },
  {
    title: "Loss Prevented",
    value: "$1.2M",
    trend: "-6%",
    trendUp: false,
    icon: TrendingDown,
    color: "from-emerald-500/20 to-teal-500/20",
    accentColor: "text-emerald-400",
  },
]

export default function SummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, idx) => {
        const Icon = card.icon
        return (
          <div
            key={idx}
            className={`bg-gradient-to-br ${card.color} border border-slate-700/50 rounded-lg p-6 backdrop-blur-sm hover:border-slate-600 transition-colors`}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-slate-400 text-sm font-medium">{card.title}</p>
                <p className={`text-2xl font-bold mt-2 ${card.accentColor}`}>{card.value}</p>
              </div>
              <Icon className={`w-6 h-6 ${card.accentColor}`} />
            </div>
            <div className="flex items-center gap-2">
              {card.trendUp ? (
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              ) : (
                <TrendingDown className="w-4 h-4 text-slate-400" />
              )}
              <span className={card.trendUp ? "text-emerald-400" : "text-slate-400"}>{card.trend}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
