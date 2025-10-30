"use client"

import { AlertTriangle, Clock } from "lucide-react"

export default function FraudAlert() {
  return (
    <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/50 rounded-lg p-6 backdrop-blur-sm">
      <div className="flex items-start gap-4">
        <AlertTriangle className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-red-300 mb-2">High Risk Fraud Alert</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Transaction ID:</span>
              <span className="font-mono text-red-400 font-semibold">TXN-8924</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Amount:</span>
              <span className="font-semibold text-red-400">$1,250.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Detected:</span>
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-4 h-4" />
                <span>2 minutes ago</span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-red-500/30">
              <span className="text-slate-300">Risk Score:</span>
              <span className="px-3 py-1 bg-red-500/30 text-red-300 rounded-full text-sm font-semibold">HIGH RISK</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
