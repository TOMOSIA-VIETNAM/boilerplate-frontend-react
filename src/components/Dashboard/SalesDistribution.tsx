import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { PieChartIcon } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

const SalesDistribution = () => {
  const salesData = [
    { name: 'Website', amount: 374.82, percentage: 45, color: '#8b5cf6' },
    { name: 'Mobile App', amount: 241.6, percentage: 29, color: '#2dd4bf' },
    { name: 'Other', amount: 213.42, percentage: 26, color: '#d1d5db' }
  ]

  const COLORS = ['#8b5cf6', '#2dd4bf', '#d1d5db']

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-lg">
          <p className="font-medium">{payload[0].name}</p>
          <p className="text-sm text-gray-600">${payload[0].value.toFixed(2)}</p>
          <p className="text-sm text-gray-600">{payload[0].payload.percentage}%</p>
        </div>
      )
    }
    return null
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center text-lg font-semibold">
            <PieChartIcon className="mr-2 h-5 w-5" />
            Sales Distribution
          </CardTitle>
          <Select defaultValue="monthly">
            <SelectTrigger className="w-24">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {salesData.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <span className="text-sm">
                {item.name} (${item.amount.toFixed(2)})
              </span>
              <span className="text-sm font-medium">{item.percentage}%</span>
            </div>
          ))}
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={salesData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percentage }) => `${name} ${percentage}%`}
                  outerRadius={60}
                  fill="#8884d8"
                  dataKey="amount"
                >
                  {salesData.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default SalesDistribution
