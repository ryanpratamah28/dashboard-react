import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilDescription, cilHome, cilUser, cilBarChart, cilAccountLogout } from '@coreui/icons'
import logoProfil from 'src/assets/brand/profil.png'
import { CNavGroup, CAvatar, CNavItem, CNavTitle } from '@coreui/react'

var emailGet = sessionStorage.getItem('email')
var nameGet = sessionStorage.getItem('name')

var name = nameGet.replace(/["]/g, '')
var email = emailGet.replace(/["]/g, '')

const _nav = [
  {
    component: CNavItem,
    icon: <CAvatar src={logoProfil} customClassName="nav-icon rounded mx-auto d-block" />,
  },
  {
    component: CNavItem,
    badge: {
      color: 'primary',
      text: 'Admin',
    },
  },
  {
    component: CNavGroup,
    name: email,
    style: { padding: '0 0 0 30px' },
    items: [
      {
        component: CNavItem,
        name: email,
        style: { margin: '0 0 0 -40px' },
        to: '#',
      },
      {
        component: CNavItem,
        name: name,
        style: { margin: '0 0 0 -40px' },
        to: '#',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Menu',
  },
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Employees',
    to: '/employees',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Absent',
    to: '/absent',
    icon: <CIcon icon={cilBarChart} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Login & Register',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Logout',
    to: '/logout',
    icon: <CIcon icon={cilAccountLogout} customClassName="nav-icon" />,
  },
]

export default _nav
