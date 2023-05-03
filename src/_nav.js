import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilDescription, cilHome, cilUser, cilBarChart, cilBell } from '@coreui/icons'
import logoProfil from 'src/assets/brand/profil.png'
import { CNavGroup, CAvatar, CNavItem, CNavTitle } from '@coreui/react'

global.Buffer = global.Buffer || require('buffer').Buffer

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImVtYWlsIjoicnlhbnByYXRAZ21haWwuY29tIiwibmFtZSI6InJ5YW4iLCJyb2xlIjoidXNlciIsImlhdCI6MTY4MTcwNDMyNX0.qDTwXh2u4x-73Vp1P2kR8y3w3rLgTVB4RNAOfJ8A4d8'
const decode = Buffer.from(token, 'base64').toString()
console.log(decode)

sessionStorage.setItem('sub', JSON.stringify(2))

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
