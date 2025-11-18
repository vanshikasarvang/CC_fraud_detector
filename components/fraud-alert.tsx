"use client"

import { AlertTriangle, Clock } from "lucide-react"

type Tx = {
  id: string
  amount: string
  time: string
  status: string
  probability: number
  isFraud: boolean
}

export default function FraudAlert({ tx }: { tx?: Tx }) {
  const isFraud = tx?.isFraud ?? true
  const riskLabel = isFraud ? "HIGH RISK" : "LOW RISK"
  const amount = tx?.amount ?? "$1,250.00"
  const id = tx?.id ?? "TXN-8924"
  const time = tx?.time ?? "2 minutes ago"

  return (
    <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/50 rounded-lg p-6 backdrop-blur-sm">
      <div className="flex items-start gap-4">
        <AlertTriangle className={`w-8 h-8 ${isFraud ? "text-red-400" : "text-emerald-400"} flex-shrink-0 mt-1`} />
        <div className="flex-1">
          <h3 className={`text-lg font-semibold mb-2 ${isFraud ? "text-red-300" : "text-emerald-300"}`}>High Risk Fraud Alert</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Transaction ID:</span>
              <span className={`font-mono font-semibold ${isFraud ? "text-red-400" : "text-emerald-400"}`}>{id}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Amount:</span>
              <span className={`font-semibold ${isFraud ? "text-red-400" : "text-emerald-400"}`}>{amount}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Detected:</span>
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-4 h-4" />
                <span>{time}</span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-red-500/30">
              <span className="text-slate-300">Risk Score:</span>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${isFraud ? "bg-red-500/30 text-red-300" : "bg-emerald-500/30 text-emerald-300"}`}>{riskLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
