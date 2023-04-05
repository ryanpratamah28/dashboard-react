import React from 'react'
import { CInputGroup, CInputGroupText, CFormInput } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilSearch } from '@coreui/icons'
import styled from 'styled-components'
import PropType from 'prop-types'

const Input = styled.input.attrs((props) => ({
  type: 'text',
  size: props.small ? 5 : undefined,
}))

const FilterComponent = ({ FilterText, onFilter }) => (
  <>
    <CInputGroup className="mb-3 w-100">
      <CInputGroupText
        id="basic-addon1"
        style={{ backgroundColor: 'transparent', border: '2px solid #8380F6', borderRight: 'none' }}
      >
        <CIcon icon={cilSearch} size="lg" style={{ color: 'gray' }} />
      </CInputGroupText>

      <CFormInput
        id="search"
        type="text"
        placeholder="Search..."
        value={FilterText}
        onChange={onFilter}
        style={{ border: '2px solid #8380F6', borderLeft: 'none' }}
      />
    </CInputGroup>
  </>
)

FilterComponent.PropType = {
  FilterText: PropType.string.isRequired,
  onFilter: PropType.func.isRequired,
}

export default FilterComponent
