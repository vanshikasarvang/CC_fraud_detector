"use client"

import { useState } from "react"
import { Play, AlertCircle, CheckCircle } from "lucide-react"

type Details = {
  amount: string
  merchantType: string
  country: string
  hour: string
  previousDeclines: string
  cardAgeMonths: string
}

type Tx = {
  id: string
  amount: string
  time: string
  status: string
  probability: number
  isFraud: boolean
}

export default function RightSidebar({ onModelRun }: { onModelRun?: (tx: Tx) => void }) {
  const [details, setDetails] = useState<Details>({
    amount: "",
    merchantType: "groceries",
    country: "IN",
    hour: "12",
    previousDeclines: "",
    cardAgeMonths: "24",
  })
  const [probability, setProbability] = useState<number | null>(null)
  const [isFraud, setIsFraud] = useState<boolean | null>(null)

  const runModel = () => {
    const amount = parseFloat(details.amount)
    const hour = parseInt(details.hour, 10)
    const previousDeclines = parseInt(details.previousDeclines, 10)
    const cardAgeMonths = parseInt(details.cardAgeMonths, 10)
    let score = 0
    const amountScore = Math.min(30, (isNaN(amount) ? 0 : amount / 5000) * 30)
    score += amountScore
    const merchantMap: Record<string, number> = {
      groceries: 2,
      electronics: 10,
      jewelry: 15,
      travel: 8,
      online: 12,
      other: 5,
    }
    score += merchantMap[details.merchantType] ?? 5
    const countryMap: Record<string, number> = {
      US: 2,
      CA: 3,
      GB: 5,
      IN: 10,
      RU: 15,
      NG: 20,
      other: 8,
    }
    score += countryMap[details.country] ?? 8
    if (!isNaN(hour) && hour >= 0 && hour <= 5) score += 15
    else if (!isNaN(hour) && hour >= 23) score += 10
    else score += 5
    score += Math.min(21, (isNaN(previousDeclines) ? 0 : previousDeclines) * 7)
    score += Math.min(18, Math.max(0, 12 - (isNaN(cardAgeMonths) ? 0 : cardAgeMonths)) * 1.5)
    const p = Math.max(0, Math.min(100, Math.round(score)))
    const fraud = p >= 60
    setProbability(p)
    setIsFraud(fraud)
    const tx: Tx = {
      id: `TXN-${Date.now()}`,
      amount: `$${(isNaN(amount) ? 0 : amount).toFixed(2)}`,
      time: "just now",
      status: fraud ? "Fraud" : "Legitimate",
      probability: p,
      isFraud: fraud,
    }
    if (onModelRun) onModelRun(tx)
  }

  return (
    <div className="w-80 border-l border-slate-700/50 bg-slate-900/30 backdrop-blur-sm p-6 flex flex-col gap-6 sticky top-20 h-[calc(100vh-80px)] overflow-y-auto">
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Actions</h3>
        <button onClick={runModel} className="w-full flex items-center justify-center gap-2 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/50 text-purple-400 py-3 rounded-lg font-semibold transition-colors">
          <Play className="w-4 h-4" />
          Run Model
        </button>
      </div>

      <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 space-y-3">
        <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Transaction Input</h3>
        <div className="space-y-3 text-sm">
          <div className="space-y-1">
            <label className="text-slate-400">Amount ($)</label>
            <input
              type="number"
              value={details.amount}
              placeholder="e.g., 1250"
              onChange={(e) => setDetails({ ...details, amount: e.target.value })}
              className="w-full bg-slate-900/50 border border-slate-700/50 rounded px-3 py-2 text-white"
            />
          </div>
          <div className="space-y-1">
            <label className="text-slate-400">Merchant Type</label>
            <select
              value={details.merchantType}
              onChange={(e) => setDetails({ ...details, merchantType: e.target.value })}
              className="w-full bg-slate-900/50 border border-slate-700/50 rounded px-3 py-2 text-white"
            >
              <option value="groceries">Groceries</option>
              <option value="electronics">Electronics</option>
              <option value="jewelry">Jewelry</option>
              <option value="travel">Travel</option>
              <option value="online">Online</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-slate-400">Country</label>
            <select
              value={details.country}
              onChange={(e) => setDetails({ ...details, country: e.target.value })}
              className="w-full bg-slate-900/50 border border-slate-700/50 rounded px-3 py-2 text-white"
            >
              <option value="US">US</option>
              <option value="CA">CA</option>
              <option value="GB">GB</option>
              <option value="IN">IN</option>
              <option value="RU">RU</option>
              <option value="NG">NG</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-slate-400">Hour (0-23)</label>
            <input
              type="number"
              min={0}
              max={23}
              value={details.hour}
              onChange={(e) => setDetails({ ...details, hour: e.target.value })}
              className="w-full bg-slate-900/50 border border-slate-700/50 rounded px-3 py-2 text-white"
            />
          </div>
          <div className="space-y-1">
            <label className="text-slate-400">Previous Declines</label>
            <input
              type="number"
              min={0}
              value={details.previousDeclines}
              placeholder="e.g., 2"
              onChange={(e) => setDetails({ ...details, previousDeclines: e.target.value })}
              className="w-full bg-slate-900/50 border border-slate-700/50 rounded px-3 py-2 text-white"
            />
          </div>
          <div className="space-y-1">
            <label className="text-slate-400">Card Age (months)</label>
            <input
              type="number"
              min={0}
              value={details.cardAgeMonths}
              onChange={(e) => setDetails({ ...details, cardAgeMonths: e.target.value })}
              className="w-full bg-slate-900/50 border border-slate-700/50 rounded px-3 py-2 text-white"
            />
          </div>
        </div>
      </div>

      <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 space-y-3">
        <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Model Info</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-400">Version:</span>
            <span className="text-white font-semibold">v2.41</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Algorithm:</span>
            <span className="text-white font-semibold">Random Forest</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Last Updated:</span>
            <span className="text-white font-semibold">Oct 25, 2025</span>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-slate-700/50">
            <span className="text-slate-400">Status:</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-emerald-400 font-semibold">Active</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 space-y-3">
        <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Prediction</h3>
        {probability === null ? (
          <p className="text-slate-400 text-sm">Enter details and press Run Model</p>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              {isFraud ? (
                <AlertCircle className="w-4 h-4 text-red-400" />
              ) : (
                <CheckCircle className="w-4 h-4 text-emerald-400" />
              )}
              <span className={isFraud ? "text-red-400 font-semibold" : "text-emerald-400 font-semibold"}>
                {isFraud ? "Fraud" : "Legitimate"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className={`h-full ${isFraud ? "bg-red-500" : "bg-emerald-500"}`}
                  style={{ width: `${probability}%` }}
                />
              </div>
              <span className="text-sm font-semibold text-slate-300 w-12 text-right">{probability}%</span>
            </div>
          </div>
        )}
      </div>

      <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 space-y-3">
        <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">System Status</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-slate-400 text-sm">Database</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              <span className="text-emerald-400 text-sm font-semibold">Online</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-400 text-sm">API Status</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              <span className="text-emerald-400 text-sm font-semibold">Online</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-400 text-sm">ML Engine</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              <span className="text-emerald-400 text-sm font-semibold">Running</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-xs text-slate-500 text-center mt-auto pt-4 border-t border-slate-700/50">
        Last sync: 30 seconds ago
      </div>
    </div>
  )
}
