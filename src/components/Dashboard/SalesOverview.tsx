import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowUpIcon, BarChart3Icon } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const SalesOverview = () => {
  const monthlyData = [
    {
      month: 'Oct',
      China: 1195.28,
      UE: 747.05,
      USA: 597.64,
      Canada: 298.82,
      Other: 149.41
    },
    {
      month: 'Nov',
      China: 529.53,
      UE: 617.78,
      USA: 353.02,
      Canada: 176.51,
      Other: 88.25
    },
    {
      month: 'Dec',
      China: 1802.54,
      UE: 801.13,
      USA: 1001.41,
      Canada: 280.4,
      Other: 120.17
    }
  ]

  const totalSales = 9257.51
  const increase = 143.5
  const increasePercentage = 15.8

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center text-lg font-semibold">
              <BarChart3Icon className="mr-2 h-5 w-5" />
              Sales Overview
            </CardTitle>
            <div className="mt-1 flex items-center space-x-2">
              <span className="text-2xl font-bold">${totalSales.toLocaleString()}</span>
              <div className="flex items-center text-green-600">
                <ArrowUpIcon className="mr-1 h-4 w-4" />
                <span className="text-sm">{increasePercentage}%</span>
              </div>
              <span className="text-sm text-gray-600">+${increase} increased</span>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              Filter
            </Button>
            <Button variant="outline" size="sm">
              Sort
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip
                formatter={(value) => [`$${Number(value).toFixed(2)}`, 'Sales']}
                labelFormatter={(label) => `Month: ${label}`}
              />
              <Legend />
              <Bar dataKey="China" fill="#9333ea" />
              <Bar dataKey="UE" fill="#a855f7" />
              <Bar dataKey="USA" fill="#3b82f6" />
              <Bar dataKey="Canada" fill="#2dd4bf" />
              <Bar dataKey="Other" fill="#5eead4" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

export default SalesOverview
