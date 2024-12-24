'use client'

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import UpDownIcon from "@/assets/icon/UpDownIcon"
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount } from 'wagmi';
import Image from "next/image"

export default function StakeCard() {
  const [activeTab, setActiveTab] = useState("Stake")
  const { open } = useWeb3Modal();
  const { isConnected } = useAccount();
  const changeActiveTab = () => {
    if (activeTab == "Stake") {
      setActiveTab("Unstake");
    }
    else {
      setActiveTab("Stake");
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-white mb-8">{activeTab}</h1>

        <Tabs defaultValue="Stake" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full bg-[#1C1D1F] rounded-3xl border-2 border-bg-grad">
            <TabsTrigger
              value="Stake"
              className="w-full rounded-3xl border-gray-900 data-[state=active]:border-2 data-[state=active]:text-white data-[state=active]:bg-gradient-to-l data-[state=active]:from-[#f09819] data-[state=active]:to-[#ff512f]"
            >
              Stake
            </TabsTrigger>
            <TabsTrigger
              value="Unstake"
              className="w-full rounded-3xl border-gray-900 data-[state=active]:border-2 data-[state=active]:text-white data-[state=active]:bg-gradient-to-l data-[state=active]:from-[#f09819] data-[state=active]:to-[#ff512f]"
            >
              Unstake
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="bg-blue-900 rounded-xl">
          {/* <div className="grid grid-cols-3 gap-4 p-4">
            <div className="space-y-1">
              <div className="text-sm text-gray-400">{process.env.NEXT_PUBLIC_STAKE_TOKEN_NAME} SUPPLY</div>
              <div className="text-white font-medium">19,409,935.1507</div>
            </div>
            <div className="space-y-1 text-center">
              <div className="text-sm text-gray-400">ESTIMATED APR</div>
              <div className="text-cyan-400 font-medium">8.70%</div>
            </div>
            <div className="space-y-1 text-right">
              <div className="text-sm text-gray-400">{process.env.NEXT_PUBLIC_STAKE_TOKEN_NAME} Price</div>
              <div className="text-white font-medium">1.1077 {process.env.NEXT_PUBLIC_TOKEN_NAME}</div>
            </div>
          </div> */}


          <Card className="bg-[#2B2B31] border-[#2B2B31] rounded-b-none">
            <CardContent className="p-6 space-y-6 bg-[#2B2B31] rounded-t-2xl rounded-b-none">
              <div className="space-y-4">
                <div className="relative h-20">
                  <Input
                    type="text"
                    placeholder="0.0000"
                    className="bg-[#1C1D1F] border-0 text-2xl h-20 text-white"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <Button variant="secondary" className="bg-gray-700 hover:bg-gray-600 text-white">
                      {process.env.NEXT_PUBLIC_TOKEN_NAME}
                    </Button>
                  </div>
                  <div className="absolute right-3 top-14 mt-1 text-sm text-gray-400">
                    Max: 0.00
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="bg-[#1C1D1F] p-2 rounded-md" onClick={changeActiveTab}>
                    <UpDownIcon />
                  </div>
                </div>

                <div className="relative">
                  <Input
                    type="text"
                    placeholder="0.00"
                    className="bg-[#1C1D1F] border-0 text-2xl h-16 text-white"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <Button variant="secondary" className="bg-gray-700 hover:bg-gray-600 text-white">
                      {process.env.NEXT_PUBLIC_STAKE_TOKEN_NAME}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>You will receive</span>
                  <span className="flex items-center gap-2">
                    <Image
                      className="dark:invert rounded-full"
                      src="https://s2.coinmarketcap.com/static/img/coins/64x64/5705.png"
                      alt="Next.js logo"
                      width={32}
                      height={32}
                    />
                    0.00 {process.env.NEXT_PUBLIC_STAKE_TOKEN_NAME}
                  </span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Your {process.env.NEXT_PUBLIC_TOKEN_NAME} balance</span>
                  <span>0.00 {process.env.NEXT_PUBLIC_TOKEN_NAME}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Your {process.env.NEXT_PUBLIC_STAKE_TOKEN_NAME} balance</span>
                  <span>0.00 {process.env.NEXT_PUBLIC_STAKE_TOKEN_NAME}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Your share of the pool</span>
                  <span>0.00%</span>
                </div>
              </div>
              {
                !isConnected && (
                  <Button className="w-full btn-grad h-12" onClick={() => open()}>
                    Connect Wallet
                  </Button>
                )
              }
              {
                isConnected && (
                  <Button className="w-full btn-grad h-12">
                    {activeTab}
                  </Button>
                )
              }

            </CardContent>
          </Card>
        </div>


      </div>
    </div>
  )
}

