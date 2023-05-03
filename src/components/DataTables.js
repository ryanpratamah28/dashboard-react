/* eslint-disable react/prop-types */
import React, { useMemo } from 'react'
import DataTable from 'react-data-table-component'
import { createTheme } from 'react-data-table-component'
import FilterComponent from './FilterComponent'
import { CButton } from '@coreui/react'
import { writeFile, utils } from 'xlsx'
import EmployeesData from 'src/views/data/EmployeesData'

createTheme(
  'blue',
  {
    text: {
      primary: '#23272a',
      secondary: '#2c2f33',
    },
    background: {
      default: '#ffff',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  },
  'dark',
)

const customStyles = {
  rows: {
    style: {
      minHeight: '72px',
    },
  },
  headCells: {
    style: {
      display: 'flex',
      justifyContent: 'start',
      backgroundColor: '#627ddc',
      color: '#ffff',
      fontSize: '16px',
      fontWeight: '700',
    },
  },
  cells: {
    style: {
      display: 'flex',
      justifyContent: 'start',
      backgroundColor: '#ffff',
      fontSize: '14px',
      fontWeight: '400',
    },
  },
}

const Table = (props) => {
  const columns = [
    {
      name: 'No.',
      selector: (row) => row.id,
      sortable: true,
    },
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
    {
      name: 'Date',
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: 'Check In',
      selector: (row) => row.checkIn,
      sortable: true,
    },
    {
      name: 'Check Out',
      selector: (row) => row.checkOut,
      sortable: true,
    },
    {
      name: 'Status',
      selector: (row) => row.status,
      sortable: true,
    },
  ]

  const [filterText, setFilterText] = React.useState('')
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false)

  const filteredItems = props.data.filter(
    (item) => JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !== -1,
  )

  const subHeaderComponent = useMemo(() => {
    const handlerClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle)
        setFilterText('')
      }
    }

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handlerClear}
        filterText={filterText}
      />
    )
  })

  function downloadXLSX() {
    const ws = utils.json_to_sheet(EmployeesData)
    const wb = utils.book_new()
    utils.book_append_sheet(wb, ws, 'Employee')
    writeFile(wb, 'Employees Data.xlsx')
  }

  const actionsMemo = (
    <CButton color="success" variant="outline" onClick={() => downloadXLSX()}>
      Export In Excel
    </CButton>
  )

  return (
    <DataTable
      theme="blue"
      customStyles={customStyles}
      responsive
      fixedHeader
      fixedHeaderScrollHeight="410px"
      title="Employees Data"
      columns={columns}
      data={filteredItems}
      defaultSortField="name"
      actions={actionsMemo}
      subHeader
      subHeaderComponent={subHeaderComponent}
      subHeaderAlign="right"
      subHeaderWrap
      pagination
    />
  )
}

export default Table
