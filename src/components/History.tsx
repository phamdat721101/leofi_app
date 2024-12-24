import { useState } from "react";
import { ArrowRightLeft, Coins, ExternalLink } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

// Mock data for demonstration
const transactions = [
  {
    id: "1",
    type: "Sell",
    tokenFrom: {
      symbol: "GOLD",
      logo_url: "https://s2.coinmarketcap.com/static/img/coins/64x64/5705.png",
    },
    tokenTo: {
      symbol: "METIS",
      logo_url: "https://s2.coinmarketcap.com/static/img/coins/64x64/9640.png",
    },
    amount: "0.5 GOLD",
    amountTo: "750 METIS",
    date: "2023-05-10T14:30:00Z",
    status: "Completed",
  },
  {
    id: "2",
    type: "Buy",
    tokenFrom: {
      symbol: "METIS",
      logo_url: "https://s2.coinmarketcap.com/static/img/coins/64x64/9640.png",
    },
    tokenTo: {
      symbol: "GOLD",
      logo_url: "https://s2.coinmarketcap.com/static/img/coins/64x64/5705.png",
    },
    amount: "100 METIS",
    amountTo: "25 GOLD",
    date: "2023-05-09T10:15:00Z",
    status: "Completed",
  },
  {
    id: "3",
    type: "Sell",
    tokenFrom: {
      symbol: "GOLD",
      logo_url: "https://s2.coinmarketcap.com/static/img/coins/64x64/5705.png",
    },
    tokenTo: {
      symbol: "METIS",
      logo_url: "https://s2.coinmarketcap.com/static/img/coins/64x64/9640.png",
    },
    amount: "2 GOLD",
    amountTo: "100 METIS",
    date: "2023-05-08T18:45:00Z",
    status: "Completed",
  },
];

export default function History() {
  const [filter, setFilter] = useState("all");

  const filteredTransactions = transactions.filter((tx) => {
    if (filter === "all") return true;
    return tx.type.toLowerCase() === filter;
  });

  return (
    <Card className="p-0 w-full bg-transparent	border-0">
      <CardHeader className="py-4 px-0">
        <CardTitle className="text-2xl font-bold text-gray-50">
          Transaction History
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <div className="flex justify-between items-center mb-5">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter transactions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Transactions</SelectItem>
              <SelectItem value="buy">Buys</SelectItem>
              <SelectItem value="sell">Sells</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">Export CSV</Button>
        </div>
        <Table className="bg-[#282e3a] rounded-lg">
          <TableHeader>
            <TableRow>
              <TableHead className="text-white">Type</TableHead>
              <TableHead className="text-white">Assets</TableHead>
              <TableHead className="text-white">Amount</TableHead>
              <TableHead className="text-white">Date</TableHead>
              <TableHead className="text-white">Status</TableHead>
              <TableHead className="text-right text-white">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTransactions.map((tx) => (
              <TableRow key={tx.id}>
                <TableCell>
                  <Badge variant={tx.type === "Sell" ? "secondary" : "default"}>
                    {tx.type === "Sell" ? (
                      <ArrowRightLeft className="w-4 h-4 mr-1" />
                    ) : (
                      <Coins className="w-4 h-4 mr-1" />
                    )}
                    {tx.type}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2 text-white">
                    <Avatar className="w-6 h-6">
                      <Image
                        src={tx.tokenFrom.logo_url}
                        alt={tx.tokenFrom.symbol}
                        width={40}
                        height={40}
                      />
                    </Avatar>
                    <span>{tx.tokenFrom.symbol}</span>
                    <ArrowRightLeft className="w-4 h-4" />
                    <Avatar className="w-6 h-6">
                      <Image
                        src={tx.tokenTo.logo_url}
                        alt={tx.tokenTo.symbol}
                        width={40}
                        height={40}
                      />
                    </Avatar>
                    <span>{tx.tokenTo.symbol}</span>
                  </div>
                </TableCell>
                <TableCell className="text-white">
                  {tx.amount}
                  <br />
                  <span className="text-sm text-[#9B9B9B]">{tx.amountTo}</span>
                </TableCell>
                <TableCell className="text-white">
                  {new Date(tx.date).toLocaleString()}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      tx.status === "Completed" ? "default" : "destructive"
                    }
                  >
                    {tx.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right text-white">
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
