import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowDownIcon, ArrowUpIcon, ClockIcon, DollarSignIcon, EyeIcon, InfoIcon } from 'lucide-react'
import { Area, AreaChart, ResponsiveContainer } from 'recharts'

const SummaryCards = () => {
  const pageViewsData = [
    { value: 1200 },
    { value: 1350 },
    { value: 1100 },
    { value: 1400 },
    { value: 1600 },
    { value: 1800 },
    { value: 12450 }
  ]

  const revenueData = [
    { value: 45 },
    { value: 52 },
    { value: 38 },
    { value: 48 },
    { value: 55 },
    { value: 42 },
    { value: 363.95 }
  ]

  const bounceRateData = [
    { value: 82 },
    { value: 85 },
    { value: 88 },
    { value: 84 },
    { value: 87 },
    { value: 89 },
    { value: 86.5 }
  ]

  return (
    <div className="mb-8 grid grid-cols-3 gap-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center justify-between text-sm font-medium text-gray-600">
            <div className="flex items-center">
              <EyeIcon className="mr-2 h-4 w-4" />
              Page Views
            </div>
            <InfoIcon className="h-4 w-4 text-gray-400" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex items-center justify-between">
            <span className="text-2xl font-bold">12,450</span>
            <div className="flex items-center text-green-600">
              <ArrowUpIcon className="mr-1 h-4 w-4" />
              <span className="text-sm">15.8%</span>
            </div>
          </div>
          <div className="h-16">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={pageViewsData}>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center justify-between text-sm font-medium text-gray-600">
            <div className="flex items-center">
              <DollarSignIcon className="mr-2 h-4 w-4" />
              Total Revenue
            </div>
            <InfoIcon className="h-4 w-4 text-gray-400" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex items-center justify-between">
            <span className="text-2xl font-bold">$363.95</span>
            <div className="flex items-center text-red-600">
              <ArrowDownIcon className="mr-1 h-4 w-4" />
              <span className="text-sm">34.0%</span>
            </div>
          </div>
          <div className="h-16">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#ef4444"
                  fill="#ef4444"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center justify-between text-sm font-medium text-gray-600">
            <div className="flex items-center">
              <ClockIcon className="mr-2 h-4 w-4" />
              Bounce Rate
            </div>
            <InfoIcon className="h-4 w-4 text-gray-400" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex items-center justify-between">
            <span className="text-2xl font-bold">86.5%</span>
            <div className="flex items-center text-green-600">
              <ArrowUpIcon className="mr-1 h-4 w-4" />
              <span className="text-sm">24.2%</span>
            </div>
          </div>
          <div className="h-16">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={bounceRateData}>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#10b981"
                  fill="#10b981"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default SummaryCards
