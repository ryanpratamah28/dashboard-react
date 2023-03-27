import React from 'react'
import DataTable from 'react-data-table-component'

const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>

const columns = [
  {
    name: 'Employees',
    selector: (row) => row.employees,
    sortable: true,
  },
  {
    name: 'Division',
    selector: (row) => row.division,
    sortable: true,
  },
]

const data = [
  {
    id: 1,
    employees: 'John Doe',
    division: 'Front End Developer',
  },
  {
    id: 2,
    employees: 'Sarah',
    division: 'Backend Developer',
  },
]

function Employee() {
  return (
    <DataTable
      title="Employee List"
      columns={columns}
      data={data}
      selectableRows
      expandableRowsComponent={ExpandedComponent}
      pagination
    />
  )
}

export default Employee
