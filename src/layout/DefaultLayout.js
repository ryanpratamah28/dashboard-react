import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = () => {
  return (
    <div>
      <div
        className="mb-4"
        style={{
          width: '100%',
          backgroundColor: 'rgb(94, 114, 228)',
          minHeight: '300px',
          position: 'absolute',
        }}
      ></div>

      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
