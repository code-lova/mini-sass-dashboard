import { render, screen } from '@testing-library/react'
import DashboardSkeleton from './dashboard-skeleton'

describe('DashboardSkeleton', () => {
  it('renders skeleton loaders for stats cards', () => {
    render(<DashboardSkeleton />)

    // Check for stats cards skeletons container
    const statsSkeleton = screen.getByTestId('stats-skeleton')
    expect(statsSkeleton).toBeInTheDocument()
    expect(statsSkeleton.children).toHaveLength(4)
  })

  it('renders skeleton for chart', () => {
    render(<DashboardSkeleton />)

    // Check for chart skeleton
    const chartSkeleton = screen.getByTestId('chart-skeleton')
    expect(chartSkeleton).toBeInTheDocument()
  })

  it('renders skeleton for recent activity', () => {
    render(<DashboardSkeleton />)

    // Check for activity skeletons container
    const activitySkeleton = screen.getByTestId('activity-skeleton')
    expect(activitySkeleton).toBeInTheDocument()
    expect(activitySkeleton.children).toHaveLength(4)
  })
})