import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LinkIcon } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const IntegrationList = () => {
  const integrations = [
    {
      name: 'Stripe',
      type: 'Finance',
      rate: 40,
      profit: '$650.00',
      color: 'bg-blue-500'
    },
    {
      name: 'Zapier',
      type: 'CRM',
      rate: 80,
      profit: '$720.50',
      color: 'bg-orange-500'
    },
    {
      name: 'Shopify',
      type: 'Marketplace',
      rate: 20,
      profit: '$432.25',
      color: 'bg-green-500'
    }
  ]

  const chartData = integrations.map((integration) => ({
    name: integration.name,
    rate: integration.rate,
    profit: parseFloat(integration.profit.replace('$', '').replace(',', ''))
  }))

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-lg">
          <p className="font-medium">{label}</p>
          <p className="text-sm text-gray-600">Rate: {payload[0].value}%</p>
          <p className="text-sm text-gray-600">Profit: ${payload[1].value.toFixed(2)}</p>
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
            <LinkIcon className="mr-2 h-5 w-5" />
            List of Integration
          </CardTitle>
          <Button variant="link" className="h-auto p-0">
            See All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {integrations.map((integration) => (
            <div key={integration.name} className="flex items-center space-x-4 rounded-lg border p-3">
              <input type="checkbox" className="rounded" />
              <div
                className={`flex h-8 w-8 items-center justify-center rounded text-sm font-bold text-white ${integration.color}`}
              >
                {integration.name.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-medium">{integration.name}</span>
                  <span className="text-sm text-gray-600">{integration.type}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="mr-4 flex-1">
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div className="h-2 rounded-full bg-blue-500" style={{ width: `${integration.rate}%` }}></div>
                    </div>
                  </div>
                  <span className="text-sm font-medium">{integration.rate}%</span>
                  <span className="text-sm font-medium">{integration.profit}</span>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-6 h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip content={<CustomTooltip />} />
                <Bar yAxisId="left" dataKey="rate" fill="#3b82f6" name="Rate (%)" />
                <Bar yAxisId="right" dataKey="profit" fill="#10b981" name="Profit ($)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default IntegrationList
