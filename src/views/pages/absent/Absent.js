import React from 'react'
import { CCard, CCardBody } from '@coreui/react'
import PieChart from 'src/components/PieChart'

function Absent() {
  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          <PieChart />
        </CCardBody>
      </CCard>
    </>
  )
}

export default Absent
