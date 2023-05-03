import React, { useEffect, useState } from 'react'
import { Route, useNavigate } from 'react-router-dom'

const ProtectedRoute = (props) => {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const checkAdminToken = () => {
    const AdminToken = sessionStorage.getItem('accessToken')
    if (!AdminToken || AdminToken === 'undefined') {
      setIsLoggedIn(false)
      return navigate('/login')
    }
    setIsLoggedIn(true)
  }
  useEffect(() => {
    checkAdminToken()
  }, [isLoggedIn])
  return <React.Fragment>{isLoggedIn ? props.children : null}</React.Fragment>
}
export default ProtectedRoute
