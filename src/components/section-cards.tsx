import { TrendingUpIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6">

      {/* Total Revenue: £21,018 (+43.15% from prev £14,682) */}
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Total Revenue</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            £21,018
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs font-bold text-emerald-500">
              <TrendingUpIcon className="size-3 text-emerald-500" />
              +43.2%
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Up £6,336 from last month <TrendingUpIcon className="size-4 text-emerald-500" />
          </div>
          <div className="text-muted-foreground">
            Previous month: £14,682
          </div>
        </CardFooter>
      </Card>

      {/* New Customers: 20,743 (+8.3% from prev 19,152) — growing slower than revenue = higher avg spend */}
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>New Customers</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            20,743
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs font-bold text-sky-500">
              <TrendingUpIcon className="size-3 text-sky-500" />
              +8.3%
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Up 1,591 from last period <TrendingUpIcon className="size-4 text-sky-500" />
          </div>
          <div className="text-muted-foreground">
            Higher avg. spend per customer
          </div>
        </CardFooter>
      </Card>

      {/* Active Accounts: 45,678 (+6.2% from prev 43,012) — steady organic retention */}
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Active Accounts</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            45,678
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs font-bold text-rose-500">
              <TrendingUpIcon className="size-3 text-rose-500" />
              +6.2%
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Up 2,666 from last month <TrendingUpIcon className="size-4 text-rose-500" />
          </div>
          <div className="text-muted-foreground">Strong retention rate</div>
        </CardFooter>
      </Card>

      {/* Growth Rate: 43.2% MoM (+3.1% QoQ improvement) */}
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Growth Rate</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            43.2%
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs font-bold text-purple-500">
              <TrendingUpIcon className="size-3 text-purple-500" />
              +3.1%
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Accelerating quarter-on-quarter <TrendingUpIcon className="size-4 text-purple-500" />
          </div>
          <div className="text-muted-foreground">Up from 40.1% last month</div>
        </CardFooter>
      </Card>
    </div>
  )
}
