'use client'

import { Card } from "@/components/ui/card"
import StakeCard from "./Stake"
export default function StakingCard() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px]">
          {/* Main Content */}
          <div className="space-y-6">
            {/* Stake Info */}
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-white">My stake</h2>
              </div>
              
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-bold bg-text-grad">0.00</span>
                <span className="text-xl text-white">{process.env.NEXT_PUBLIC_STAKE_TOKEN_NAME}</span>
              </div>
              <div className="text-sm text-gray-400">$ 0.00</div>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="bg-slate-900/50 bg-[#2B2B31]">
                <div className="p-6">
                  <h3 className="text-sm font-medium text-gray-400">{process.env.NEXT_PUBLIC_STAKE_TOKEN_NAME} SUPPLY</h3>
                  <div className="mt-2 text-2xl font-bold text-white">19,409,935.1507</div>
                </div>
              </Card>
              <Card className="bg-slate-900/50 bg-[#2B2B31]">
                <div className="p-6">
                  <h3 className="text-sm font-medium text-gray-400">ESTIMATED APR</h3>
                  <div className="mt-2 text-2xl font-bold text-white">8.70%</div>
                </div>
              </Card>
              <Card className="bg-slate-900/50 bg-[#2B2B31]">
                <div className="p-6">
                  <h3 className="text-sm font-medium text-gray-400">{process.env.NEXT_PUBLIC_STAKE_TOKEN_NAME} Price</h3>
                  <div className="mt-2 text-2xl font-bold text-white">1.1077 {process.env.NEXT_PUBLIC_TOKEN_NAME}</div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right Panel */}
          <StakeCard />
        </div>
      </div>
    </div>
  )
}
