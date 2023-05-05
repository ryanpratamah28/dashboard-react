import React from 'react'
import { CCard, CCardBody } from '@coreui/react'
import BarChart from 'src/components/BarChart'
import PrecentageChart from 'src/components/PrecentageChart'

function Absent() {
  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          <PrecentageChart />
        </CCardBody>
      </CCard>
    </>
  )
}

export default Absent
