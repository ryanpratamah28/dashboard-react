import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const Announcement = React.lazy(() => import('./views/pages/announcement/Announcements'))
const CreateAnnouncement = React.lazy(() => import('./views/pages/announcement/Announcement'))

const Employees = React.lazy(() => import('./views/pages/employee/Employee'))
const Absent = React.lazy(() => import('./views/pages/absent/Absent'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/employees', name: 'Employees', element: Employees },
  { path: '/absent', name: 'Absent', element: Absent },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/announcement', name: 'Announcement', element: Announcement },
  { path: '/announcement/create', name: 'Create Announcement', element: CreateAnnouncement },
]

export default routes
