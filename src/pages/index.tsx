import DashboardControls from '@/components/Dashboard/DashboardControls'
import IntegrationList from '@/components/Dashboard/IntegrationList'
import SalesDistribution from '@/components/Dashboard/SalesDistribution'
import SalesOverview from '@/components/Dashboard/SalesOverview'
import SummaryCards from '@/components/Dashboard/SummaryCards'
import TotalSubscriber from '@/components/Dashboard/TotalSubscriber'

const Home = () => {
  return (
    <div className="space-y-6">
      <DashboardControls />
      <SummaryCards />

      {/* Middle Section */}
      <div className="grid grid-cols-2 gap-6">
        <SalesOverview />
        <TotalSubscriber />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-2 gap-6">
        <SalesDistribution />
        <IntegrationList />
      </div>
    </div>
  )
}

export default Home
