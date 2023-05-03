import React from "react";
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
import { cilLockLocked, cilUser } from "@coreui/icons";
import logoLogin from "src/assets/brand/login-logo.png";

const Login = () => {
  return (
    <div className="min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol
            md={8}
            style={{
              boxShadow: "0px 10px 25px 2px rgba(71, 133, 234, 0.5)",
              padding: "0",
            }}
          >
            <CCardGroup>
              <CCard className="p-4" style={{ height: "450px" }}>
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
                        aria-describedby="inputGroupPrepend2"
                        name="username"
                        required
                        type="text"
                        style={{ height: "50px" }}
                      />
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        style={{ height: "50px" }}
                        aria-describedby="inputGroupPrepend2"
                      />
                      <CInputGroupText>
                        <button style={{ border: "none", background: "none" }}>
                          <CIcon icon={cilLockLocked} />
                        </button>
                      </CInputGroupText>
                    </CInputGroup>
                    <CRow>
                      <CCol
                        xs={6}
                        style={{
                          margin: "35px 0 0 0",
                          padding: "0 0 0 25px",
                        }}
                      >
                        <CButton color="primary" className="px-4" type="submit">
                          Login
                        </CButton>
                      </CCol>
                      <CCol
                        xs={6}
                        className="text-right"
                        style={{
                          margin: "35px 0 0 0",
                          padding: "0 0 0 45px",
                        }}
                      >
                        <CButton color="link" className="px-0" href="/Reset">
                          Reset password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white py-5"
                style={{ width: "44%", background: "#4785EA" }}
              >
                <CCardBody
                  className="text-center"
                  style={{ overflow: "hidden", padding: "0" }}
                >
                  <CAvatar
                    src={logoLogin}
                    style={{ width: "650px", margin: "200px 0 0 -90px" }}
                  />
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
          <p
            style={{ textAlign: "center", opacity: "0.7", margin: "5px 0 0 0" }}
          >
            Dont Have an Account?, <a href="/register">Register</a>
          </p>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
