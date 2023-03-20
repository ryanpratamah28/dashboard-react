import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMenu } from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import { logo } from 'src/assets/brand/logo'

import IndonesianFlag from '../../src/assets/images/avatars/Indonesian.jpg'
import EnglandFlag from '../../src/assets/images/avatars/England.png'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader
      className=""
      style={{
        marginBottom: '40px',
        backgroundColor: 'transparent',
        border: 'none',
      }}
    >
      <CContainer fluid style={{ marginBottom: '30px' }}>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" style={{ color: 'white' }} />
        </CHeaderToggler>

        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
        </CHeaderBrand>

        <CHeaderNav className="ms-3">
          <CDropdown>
            <CDropdownToggle color="light" variant="outline" className="IndonesianFlag">
              {' '}
              <img src={IndonesianFlag} style={{ width: '25px' }}></img> ID
            </CDropdownToggle>
            <CDropdownMenu className="mt-1">
              <CDropdownItem href="#">
                <img src={EnglandFlag} style={{ width: '25px' }}></img> EN
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>

          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>

      <CContainer fluid className="d-none d-md-flex me-auto">
        <CHeaderNav>
          <CNavItem>
            <CNavLink to="/dashboard" component={NavLink} style={{ color: 'white' }}>
              Dashboard
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#" style={{ color: 'white' }}>
              Users
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#" style={{ color: 'white' }}>
              Settings
            </CNavLink>
          </CNavItem>
        </CHeaderNav>

        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
