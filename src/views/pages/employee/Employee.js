import React from 'react'
import Table from 'src/components/DataTables'
import EmployeesData from 'src/views/data/EmployeesData'
import { CCard, CCardBody } from '@coreui/react'

const Employee = () => {
  return (
    <>
      <CCard
        className="mb-4"
        style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)', borderRadius: '20px' }}
      >
        <CCardBody
          style={{
            paddingTop: '15px',
            paddingLeft: '0px',
            paddingRight: '0px',
            paddingBottom: '15px',
          }}
        >
          <Table data={EmployeesData} />
        </CCardBody>
      </CCard>
    </>
  )
}

export default Employee
