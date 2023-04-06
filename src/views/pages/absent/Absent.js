import React from 'react'
import { CCard, CCardBody } from '@coreui/react'
import { CChartPie } from '@coreui/react-chartjs'

function Absent() {
  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          <CChartPie
            data={{
              labels: ['Hadir', 'Tidak Hadir', 'Tanpa Keterangan'],
              datasets: [
                {
                  data: [60, 35, 5],
                  backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                  hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                },
              ],
            }}
          />
        </CCardBody>
      </CCard>
    </>
  )
}

export default Absent
