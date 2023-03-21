import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
    CContainer,
    CHeader,
    CHeaderBrand,
    CHeaderNav,
    CHeaderToggler,
    CNavLink,
    CNavItem,
    CButton,
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

    const [language, setLanguage] = useState('Id')
    const toggleLanguage = () => {
        setLanguage(language === 'Id' ? 'En' : 'Id')
    }

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
                    <div className="me-2 bg-primary p-1 rounded-pill">
                        <div className="btn-language d-flex">
                            <CButton
                                onClick={toggleLanguage}
                                id="Id"
                                style={{ marginRight: '5px' }}
                                className={
                                    language === 'Id'
                                        ? 'd-flex bg-light border-0 rounded-pill text-dark active me-2 transition-all duration-500'
                                        : 'd-flex bg-primary border-0 rounded-pill text-light me-2'
                                }
                            >
                                <img
                                    src={IndonesianFlag}
                                    width="25"
                                    className="d-flex justify-content-center align-items-center me-2 rounded-1"
                                ></img>
                                <h6
                                    className="d-flex justify-content-center align-items-center"
                                    style={{ margin: 0 }}
                                >
                                    ID
                                </h6>
                            </CButton>

                            <CButton
                                onClick={toggleLanguage}
                                id="En"
                                className={
                                    language === 'En'
                                        ? 'd-flex bg-light border-0 rounded-pill text-dark active'
                                        : 'd-flex bg-primary border-0 rounded-pill text-light'
                                }
                            >
                                <img
                                    src={EnglandFlag}
                                    width="30"
                                    className="d-flex justify-content-center align-items-center me-2 rounded-1"
                                ></img>
                                <h6
                                    className="d-flex justify-content-center align-items-center"
                                    style={{ margin: 0 }}
                                >
                                    EN
                                </h6>
                            </CButton>
                        </div>
                    </div>

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
