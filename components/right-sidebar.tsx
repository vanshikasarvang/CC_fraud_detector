"use client"

import { Upload, Play } from "lucide-react"

export default function RightSidebar() {
  return (
    <div className="w-80 border-l border-slate-700/50 bg-slate-900/30 backdrop-blur-sm p-6 flex flex-col gap-6 sticky top-20 h-[calc(100vh-80px)] overflow-y-auto">
      {/* Actions */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Actions</h3>
        <button className="w-full flex items-center justify-center gap-2 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 text-cyan-400 py-3 rounded-lg font-semibold transition-colors">
          <Upload className="w-4 h-4" />
          Upload CSV
        </button>
        <button className="w-full flex items-center justify-center gap-2 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/50 text-purple-400 py-3 rounded-lg font-semibold transition-colors">
          <Play className="w-4 h-4" />
          Run Model
        </button>
      </div>

      {/* Model Information */}
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

      {/* System Status */}
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

      {/* Footer Note */}
      <div className="text-xs text-slate-500 text-center mt-auto pt-4 border-t border-slate-700/50">
        Last sync: 30 seconds ago
      </div>
    </div>
  )
}
