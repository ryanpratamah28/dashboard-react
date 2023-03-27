import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilDescription, cilHome, cilUser, cilBarChart } from '@coreui/icons'
import logoProfil from 'src/assets/brand/profil.png'
import { CNavGroup, CAvatar, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    icon: <CAvatar src={logoProfil} customClassName="nav-icon rounded mx-auto d-block" />,
  },
  {
    component: CNavItem,
    badge: {
      color: 'info',
      text: 'Admin',
    },
  },
  {
    component: CNavGroup,
    name: 'Yoga Pratama',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon invisible" />,
    items: [
      {
        component: CNavItem,
        name: 'Username@gmail.com',
        to: '#',
      },
      {
        component: CNavItem,
        name: 'Username123',
        to: '#',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Username123',
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
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
    ],
  },
]

export default _nav
