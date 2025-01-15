'use client'
/* eslint-disable */
import { Card } from "@/components/ui/card"
import StakeCard from "./Stake"
import History from "./StakeHistory"
import { abi } from '@/abi/abi'
import { useAccount, useReadContract } from 'wagmi';
import { useEffect, useState } from "react"

export default function StakingCard() {
  const lp_contract = process.env.NEXT_PUBLIC_LPTOKEN_CONTRACT as `0x${string}` ?? "0xd4c4d35Af5b77F0f66e80e507cFbCC23240bDb32"
  const { isConnected, address } = useAccount();
  const [lpToken, setLptoken] = useState(0);
  const balanceOf = useReadContract({
    abi: abi,
    address: lp_contract,
    functionName: "balanceOf",
    args: [address || "0x0"],
  });

  useEffect(() => {
    setLptoken(parseFloat(balanceOf?.data?.toString() ?? "0") / (10 ** 18));
  }, [address, balanceOf])

  return (
    <div className="min-h-screen px-4 py-6 md:py-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px]">
          {/* Main Content */}
          <div className="space-y-6">
            {/* Stake Info */}
            <div className="bg-[#2B2B31] rounded-xl p-6">
              <div className="flex items-center gap-3">
                <h2 className="text-xl md:text-2xl font-bold text-white">My stake</h2>
              </div>
              
              <div className="mt-4 flex flex-wrap items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-bold bg-text-grad break-all">
                  {lpToken}
                </span>
                <span className="text-lg md:text-xl text-white">
                  {process.env.NEXT_PUBLIC_STAKE_TOKEN_NAME}
                </span>
              </div>
              <div className="text-xs md:text-sm text-gray-400 mt-2">$ 0.00</div>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              <Card className="bg-[#2B2B31] border-[#FF8100]">
                <div className="p-4 md:p-6">
                  <h3 className="text-xs md:text-sm font-medium text-gray-400">
                    {process.env.NEXT_PUBLIC_STAKE_TOKEN_NAME} SUPPLY
                  </h3>
                  <div className="mt-2 text-xl md:text-2xl font-bold text-white break-words">
                    19,409,935.1507
                  </div>
                </div>
              </Card>

              <Card className="bg-[#2B2B31] border-[#FF8100]">
                <div className="p-4 md:p-6">
                  <h3 className="text-xs md:text-sm font-medium text-gray-400">
                    ESTIMATED APR
                  </h3>
                  <div className="mt-2 text-xl md:text-2xl font-bold text-white">
                    8.70%
                  </div>
                </div>
              </Card>

              <Card className="bg-[#2B2B31] border-[#FF8100]">
                <div className="p-4 md:p-6">
                  <h3 className="text-xs md:text-sm font-medium text-gray-400">
                    {process.env.NEXT_PUBLIC_STAKE_TOKEN_NAME} Price
                  </h3>
                  <div className="mt-2 text-xl md:text-2xl font-bold text-white break-words">
                    1.1077 {process.env.NEXT_PUBLIC_TOKEN_NAME}
                  </div>
                </div>
              </Card>
            </div>

            {/* History Section */}
            <div className="mt-6 md:mt-8">
              <History />
            </div>
          </div>

          {/* Right Panel - Stake Card */}
          <div className="mt-6 lg:mt-0">
            <StakeCard />
          </div>
        </div>
      </div>
    </div>
  )
}
