import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ArrowUpIcon, Users } from 'lucide-react'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const TotalSubscriber = () => {
  const weeklyData = [
    { day: 'Sun', value: 2850 },
    { day: 'Mon', value: 3200 },
    { day: 'Tue', value: 3874 },
    { day: 'Wed', value: 3100 },
    { day: 'Thu', value: 3400 },
    { day: 'Fri', value: 3600 },
    { day: 'Sat', value: 2900 }
  ]

  const totalSubscribers = 24473
  const increase = 749
  const increasePercentage = 8.3

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center text-lg font-semibold">
              <Users className="mr-2 h-5 w-5" />
              Total Subscriber
            </CardTitle>
            <div className="mt-1 flex items-center space-x-2">
              <span className="text-2xl font-bold">{totalSubscribers.toLocaleString()}</span>
              <div className="flex items-center text-green-600">
                <ArrowUpIcon className="mr-1 h-4 w-4" />
                <span className="text-sm">{increasePercentage}%</span>
              </div>
              <span className="text-sm text-gray-600">+{increase} increased</span>
            </div>
          </div>
          <Select defaultValue="weekly">
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
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={weeklyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip
                formatter={(value) => [value.toLocaleString(), 'Subscribers']}
                labelFormatter={(label) => `Day: ${label}`}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#8b5cf6"
                strokeWidth={3}
                dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#8b5cf6', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

export default TotalSubscriber
