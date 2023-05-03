import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilDescription, cilHome, cilUser, cilBarChart, cilBell } from '@coreui/icons'
import logoProfil from 'src/assets/brand/profil.png'
import { CNavGroup, CAvatar, CNavItem, CNavTitle } from '@coreui/react'

var emailGet = localStorage.getItem('email')
var nameGet = localStorage.getItem('loginUsername')

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
    name: emailGet,
    style: { padding: '0 0 0 35px' },
    items: [
      {
        component: CNavItem,
        name: emailGet,
        style: { margin: '0 0 0 -40px' },
        to: '#',
      },
      {
        component: CNavItem,
        name: nameGet,
        style: { margin: '0 0 0 -40px' },
        to: '#',
      },
    ],
  },
  {
    component: CNavItem,
    name: nameGet,
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
    name: 'Annnouncement',
    to: '/announcement',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
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
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
    ],
  },
]

export default _nav
