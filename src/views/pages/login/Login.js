import React from "react";
import { useState, useEffect } from "react";
import "src/views/pages/login/login.css";
import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser, cilLockUnlocked } from "@coreui/icons";
import logoLogin from "src/assets/brand/login-logo.png";
import { useNavigate } from "react-router-dom";

        const users = [{
            username: 'admin1',
            password: '12345678'
          },
          {
            username: 'admin2',
            password: '012345678'
          }
        ];

const Login = () => {
    const navigate = useNavigate();

    const [data, setData] = useState({
      username: '',
      password: ''
    });
    const changeHandler = (e) => {
      setData({
        ...data,
        [e.target.name]: e.target.value
      })
    }

    const checkUser = () => {
      const usercheck = users.find(user => (user.username === data.username && user.password === data.password));
      if (usercheck) {
        console.log("Login successful");
        navigate('/')
      } else {
        console.log("Wrong password or username");
      }
      // console.log(uname);
      console.log(usercheck);
    }

    useEffect(() => {
      checkUser(users)
    }, [data.username, data.password])

    console.log(data)

    return (
        <div className="min-vh-100 d-flex flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                    <div className="alert alert-warning" id="warning" role="alert" style={{width: 'auto', borderRadius: '10px', marginTop: '-40px'}}>
                        Data input login akan <strong>langsung tersubmit</strong>, jika data yang anda masukan sudah benar
                    </div>
                    <CCol
                        md={8}
                        style={{
                            boxShadow: '0px 10px 25px 2px rgba(71, 133, 234, 0.5)',
                            padding: '0',
                        }}
                    >
                        <CCardGroup>
                            <CCard className="p-4" style={{ height: '450px' }}>
                                <CCardBody>
                                    <CForm>
                                        <h1>Login</h1>
                                        <p className="text-medium-emphasis">
                                            Sign In to your account
                                        </p>
                                        <br />
                                        <CInputGroup className="mb-4">
                                            <CFormInput
                                                placeholder="Username or email"
                                                aria-describedby = "inputGroupPrepend2"
                                                name = "username"
                                                value={data.username}
                                                required
                                                type="text"
                                                style={{ height: '50px' }}
                                                onChange = {
                                                  changeHandler
                                                }
                                            />
                                            <CInputGroupText>
                                                <CIcon icon={cilUser} />
                                            </CInputGroupText>
                                        </CInputGroup>
                                        <CInputGroup className="mb-3">
                                            <CFormInput
                                                value={data.password}
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                required
                                                style={{ height: '50px' }}
                                                aria-describedby = "inputGroupPrepend2"
                                                onChange = {
                                                  changeHandler
                                                }
                                            />
                                            <CInputGroupText>
                                                <button
                                                    style={{ border: 'none', background: 'none' }}
                                                >
                                                    <CIcon
                                                        icon={cilLockLocked}
                                                    />
                                                </button>
                                            </CInputGroupText>
                                        </CInputGroup>
                                        <CRow>
                                            <CCol
                                                xs={6}
                                                style={{
                                                    margin: '35px 0 0 0',
                                                    padding: '0 0 0 25px',
                                                }}
                                            >
                                                <CButton
                                                    color="primary"
                                                    className="px-4"
                                                    type="submit"
                                                >
                                                    Login
                                                </CButton>
                                            </CCol>
                                            <CCol
                                                xs={6}
                                                className="text-right"
                                                style={{
                                                    margin: '35px 0 0 0',
                                                    padding: '0 0 0 45px',
                                                }}
                                            >
                                                <CButton
                                                    color="link"
                                                    className="px-0"
                                                    href="/Reset"
                                                >
                                                    Reset password?
                                                </CButton>
                                            </CCol>
                                        </CRow>
                                    </CForm>
                                </CCardBody>
                            </CCard>
                            <CCard
                                className="text-white py-5"
                                style={{ width: '44%', background: '#4785EA' }}
                            >
                                <CCardBody
                                    className="text-center"
                                    style={{ overflow: 'hidden', padding: '0' }}
                                >
                                    <CAvatar
                                        src={logoLogin}
                                        style={{ width: '650px', margin: '200px 0 0 -90px' }}
                                    />
                                </CCardBody>
                            </CCard>
                        </CCardGroup>
                    </CCol>
          <p  style={{ textAlign: 'center', opacity: '0.7', margin: '5px 0 0 0' }}
          >
            Dont Have an Account?, <a href="/register">Register</a>
          </p>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
