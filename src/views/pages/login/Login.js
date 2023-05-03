import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
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
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const Navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://13.215.252.80:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((data) => data.json());
        if ("accessToken" in response && response.user.role == 'admin') {
            console.log(response)
            sessionStorage.setItem("accessToken", response.accessToken);
            sessionStorage.setItem("email", JSON.stringify(response.user.email));
            sessionStorage.setItem("name", JSON.stringify(response.user.name));
            sessionStorage.setItem("role", JSON.stringify(response.user.role));
            Navigate('/dashboard')
        } else {
          MySwal("Failed", "error");
        }
  };

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
                  <h1>Login</h1>
                  <p className="text-medium-emphasis">
                    Sign In to your account
                  </p>
                  <br />
                  <CInputGroup className="mb-4">
                    <CFormInput
                      placeholder="Username or email"
                      name="username"
                      id="username"
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      style={{ height: "50px" }}
                    />
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      style={{ height: "50px" }}
                      onChange={(e) => setPassword(e.target.value)}
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
                      <CButton
                        color="primary"
                        className="px-4 text-light"
                        onClick={handleSubmit}
                      >
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
}